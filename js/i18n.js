/* ==========================================================
   M3ak Morocco — i18n.js
   One page, several languages (English ↔ Arabic today, French-ready).
   Load it in <head>, after /js/translations.js and /js/theme.js, so the
   direction (ltr / rtl) is set before the first paint.

   Markup (the English text stays in the HTML — it is the source):
     data-i18n="ns.key"              -> the element's own text (child icons are kept)
     data-i18n-html="ns.key"         -> innerHTML, for strings with inline markup
     data-i18n-placeholder / -aria-label / -alt / -title / -value / -content
                                     -> the matching attribute
     data-i18n-attr="data-pay:ns.key; title:ns.other"
                                     -> any other attribute(s)
     data-i18n-vars='{"n":3}'        -> values for {n} placeholders
     data-lang-switcher              -> the language menu is rendered here
     data-lang-set="ar"              -> any control that switches language on click
     <select data-lang-select>       -> a native select bound to the language

   API:
     M3akI18n.t(key, vars)           -> string in the current language
     M3akI18n.set(lang) / get() / dir()
     M3akI18n.setKey(el, key, vars)  -> point an element at another key (JS state changes)
     M3akI18n.apply(root)            -> translate markup injected after load
     document event "m3ak:languagechange"  { detail: { lang, dir } }
========================================================== */
(function () {
    "use strict";

    var STORAGE_KEY = "m3ak.language";
    var DEFAULT_LANG = "en";

    /* To ship a language: add a row here and its block in translations.js. */
    var LANGUAGES = {
        en: { dir: "ltr", label: "English", short: "EN" },
        ar: {
            dir: "rtl", label: "العربية", short: "ع",
            font: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
        }
    };

    var ATTRS = ["placeholder", "aria-label", "alt", "title", "value", "content"];
    var SELECTOR = "[data-i18n],[data-i18n-html],[data-i18n-attr]," + ATTRS.map(function (a) { return "[data-i18n-" + a + "]"; }).join(",");
    var BLOCKER_ID = "m3ak-i18n-blocker";
    var STYLE_ID = "m3ak-i18n-style";

    /* Arabic glyphs fall through to IBM Plex Sans Arabic while Latin text keeps
       the page's own font; letter-spacing breaks Arabic joining, so it is reset.
       The theme switch, the closed sidebar drawer (shell.js and the older page
       scripts all mark it with -translate-x-full; it must slide out to the
       right in RTL) and the footer contact links are shared by every page. */
    var BASE_CSS = [
        'html[lang="ar"]{',
        '  --font-sans:"Plus Jakarta Sans","IBM Plex Sans Arabic",ui-sans-serif,system-ui,sans-serif;',
        '  --font-jakarta:"Plus Jakarta Sans","IBM Plex Sans Arabic",sans-serif;',
        '  --font-hanken:"Hanken Grotesk","IBM Plex Sans Arabic",sans-serif;',
        '}',
        'html[lang="ar"] body,html[lang="ar"] body *{letter-spacing:0 !important}',
        '@media (min-width:48rem){html[dir="rtl"].dark .theme-toggle-thumb{translate:-1.5rem 0}}',
        '@media (max-width:63.99rem){html[dir="rtl"] #sidebar.-translate-x-full{translate:100% 0}}',
        'html[dir="rtl"] footer a[href^="tel:"],html[dir="rtl"] footer a[href^="mailto:"]{direction:ltr;unicode-bidi:isolate}',
        'html[dir="rtl"] input[type="email"],html[dir="rtl"] input[type="tel"],html[dir="rtl"] input[type="url"]{direction:ltr;text-align:right}'
    ].join("\n");

    var GLOBE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-[18px] shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>';

    var dict = window.M3akTranslations || {};
    var current = DEFAULT_LANG;
    var booted = false;
    var originals = new WeakMap();   /* element -> English captured from the HTML */
    var englishByKey = {};           /* key -> English, for clones / late markup */

    /* ------------------------------------------------------
       1. Dictionary lookup
    ------------------------------------------------------ */
    function lookup(lang, key) {
        var node = dict[lang];
        var parts = key.split(".");
        for (var i = 0; i < parts.length && node != null; i++) { node = node[parts[i]]; }
        return typeof node === "string" ? node : undefined;
    }

    function resolve(key) {
        var value = lookup(current, key);
        if (value === undefined && current !== DEFAULT_LANG) { value = lookup(DEFAULT_LANG, key); }
        return value;
    }

    function format(str, vars) {
        if (!vars) { return str; }
        return str.replace(/\{(\w+)\}/g, function (m, name) {
            return Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : m;
        });
    }

    function t(key, vars) {
        var value = resolve(key);
        return format(value === undefined ? (englishByKey[key] || key) : value, vars);
    }

    function varsOf(el) {
        var raw = el.getAttribute("data-i18n-vars");
        if (!raw) { return null; }
        try { return JSON.parse(raw); } catch (e) { return null; }
    }

    /* ------------------------------------------------------
       2. Applying translations to the DOM
    ------------------------------------------------------ */
    function ownTextNodes(el) {
        var list = [];
        for (var n = el.firstChild; n; n = n.nextSibling) {
            if (n.nodeType === 3 && n.nodeValue.trim()) { list.push(n); }
        }
        return list;
    }

    function capture(el) {
        var snap = originals.get(el);
        if (!snap) {
            snap = { attrs: {} };
            originals.set(el, snap);
        }
        return snap;
    }

    function remember(key, value) {
        if (booted || !key || value == null || englishByKey[key] !== undefined) { return; }
        englishByKey[key] = value;
    }

    /* English for this element: the dictionary first, then the HTML it
       shipped with, then whatever another element with the same key had. */
    function englishFor(key, captured) {
        var value = lookup(DEFAULT_LANG, key);
        if (value !== undefined) { return value; }
        return captured != null ? captured : englishByKey[key];
    }

    function textFor(key, captured, el) {
        var value = current === DEFAULT_LANG ? englishFor(key, captured) : resolve(key);
        if (value === undefined) { value = englishFor(key, captured); }
        return value === undefined ? undefined : format(value, varsOf(el));
    }

    function keepSpacing(previous, text) {
        var lead = previous.match(/^\s*/)[0];
        var trail = previous.match(/\s*$/)[0];
        return lead + text + trail;
    }

    function applyText(el, key) {
        var snap = capture(el);
        var nodes = ownTextNodes(el);
        if (snap.text === undefined && !booted) {
            snap.text = nodes.map(function (n) { return n.nodeValue.trim(); }).join(" ");
            remember(key, snap.text);
        }
        var value = textFor(key, snap.text, el);
        if (value === undefined) { return; }
        if (!nodes.length) {
            el.appendChild(document.createTextNode(value));
            return;
        }
        nodes[0].nodeValue = keepSpacing(nodes[0].nodeValue, value);
        for (var i = 1; i < nodes.length; i++) { nodes[i].nodeValue = " "; }
    }

    function applyHtml(el, key) {
        var snap = capture(el);
        if (snap.html === undefined && !booted) {
            snap.html = el.innerHTML;
            remember(key, snap.html);
        }
        var value = textFor(key, snap.html, el);
        if (value !== undefined && el.innerHTML !== value) { el.innerHTML = value; }
    }

    function applyAttr(el, attr, key) {
        var snap = capture(el);
        if (!(attr in snap.attrs) && !booted) {
            snap.attrs[attr] = el.getAttribute(attr);
            remember(key, snap.attrs[attr]);
        }
        var value = textFor(key, snap.attrs[attr], el);
        if (value !== undefined) { el.setAttribute(attr, value); }
    }

    function translate(el) {
        var key = el.getAttribute("data-i18n");
        if (key) { applyText(el, key); }
        key = el.getAttribute("data-i18n-html");
        if (key) { applyHtml(el, key); }
        for (var i = 0; i < ATTRS.length; i++) {
            key = el.getAttribute("data-i18n-" + ATTRS[i]);
            if (key) { applyAttr(el, ATTRS[i], key); }
        }
        (el.getAttribute("data-i18n-attr") || "").split(";").forEach(function (pair) {
            var at = pair.indexOf(":");
            if (at > 0) { applyAttr(el, pair.slice(0, at).trim(), pair.slice(at + 1).trim()); }
        });
    }

    function apply(root) {
        root = root || document;
        if (root !== document && root.matches && root.matches(SELECTOR)) { translate(root); }
        root.querySelectorAll(SELECTOR).forEach(translate);
    }

    function setKey(el, key, vars) {
        if (!el) { return; }
        el.setAttribute("data-i18n", key);
        if (vars) { el.setAttribute("data-i18n-vars", JSON.stringify(vars)); }
        else { el.removeAttribute("data-i18n-vars"); }
        translate(el);
    }

    /* ------------------------------------------------------
       3. Document language, direction, font
    ------------------------------------------------------ */
    function stored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function injectStyle() {
        if (document.getElementById(STYLE_ID)) { return; }
        var style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = BASE_CSS;
        (document.head || document.documentElement).appendChild(style);
    }

    function loadFont(lang) {
        var href = LANGUAGES[lang].font;
        if (!href || document.querySelector('link[data-i18n-font="' + lang + '"]')) { return; }
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.setAttribute("data-i18n-font", lang);
        (document.head || document.documentElement).appendChild(link);
    }

    function setDocumentLanguage(lang) {
        current = LANGUAGES[lang] ? lang : DEFAULT_LANG;
        var root = document.documentElement;
        root.setAttribute("lang", current);
        root.setAttribute("dir", LANGUAGES[current].dir);
        loadFont(current);
    }

    /* Hide translatable text until it is swapped, so an Arabic visitor
       never sees the English flash in (same idea as session.js). */
    function block() {
        if (current === DEFAULT_LANG || document.getElementById(BLOCKER_ID)) { return; }
        var style = document.createElement("style");
        style.id = BLOCKER_ID;
        style.textContent = "[data-i18n],[data-i18n-html]{visibility:hidden !important}";
        (document.head || document.documentElement).appendChild(style);
    }

    function unblock() {
        var style = document.getElementById(BLOCKER_ID);
        if (style) { style.remove(); }
    }

    /* ------------------------------------------------------
       4. Language switcher
    ------------------------------------------------------ */
    var BTN_CLASS = "inline-flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 dark:text-slate-300 dark:hover:bg-white/10";
    var MENU_CLASS = "absolute end-0 top-full z-[60] mt-2 hidden min-w-36 overflow-hidden rounded-xl border border-black/10 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-[#151C18]";
    var OPTION_CLASS = "flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2 text-start text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5 aria-checked:font-bold aria-checked:text-[#0B6B45] dark:aria-checked:text-[#2ED573]";

    function buildSwitcher(host) {
        if (host.getAttribute("data-lang-ready")) { return; }
        host.setAttribute("data-lang-ready", "true");
        host.classList.add("relative");

        var options = Object.keys(LANGUAGES).map(function (code) {
            var lang = LANGUAGES[code];
            return '<button type="button" role="menuitemradio" class="' + OPTION_CLASS + '" data-lang-set="' + code +
                '" lang="' + code + '" dir="' + lang.dir + '">' + lang.label + '</button>';
        }).join("");

        host.innerHTML =
            '<button type="button" class="' + BTN_CLASS + '" aria-haspopup="menu" aria-expanded="false" data-lang-toggle' +
            ' aria-label="Change language" data-i18n-aria-label="common.changeLanguage">' + GLOBE_SVG +
            '<span data-lang-current></span></button>' +
            '<div role="menu" class="' + MENU_CLASS + '" data-lang-menu>' + options + '</div>';
    }

    function closeMenus() {
        document.querySelectorAll("[data-lang-menu]").forEach(function (menu) { menu.classList.add("hidden"); });
        document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) { btn.setAttribute("aria-expanded", "false"); });
    }

    function paintSwitchers() {
        document.querySelectorAll("[data-lang-switcher]").forEach(buildSwitcher);
        document.querySelectorAll("[data-lang-current]").forEach(function (el) {
            el.textContent = LANGUAGES[current].short;
        });
        document.querySelectorAll("[data-lang-set]").forEach(function (el) {
            var on = el.getAttribute("data-lang-set") === current;
            el.setAttribute("aria-checked", on ? "true" : "false");
            if (el.getAttribute("role") !== "menuitemradio") { el.setAttribute("aria-pressed", on ? "true" : "false"); }
        });
        document.querySelectorAll("select[data-lang-select]").forEach(function (select) {
            select.value = current;
        });
    }

    /* ------------------------------------------------------
       5. Switching
    ------------------------------------------------------ */
    function announce() {
        document.dispatchEvent(new CustomEvent("m3ak:languagechange", {
            detail: { lang: current, dir: LANGUAGES[current].dir }
        }));
    }

    function set(lang, persist) {
        if (!LANGUAGES[lang]) { return; }
        if (persist !== false) {
            try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
        }
        if (lang === current) { closeMenus(); return; }
        setDocumentLanguage(lang);
        apply(document);
        paintSwitchers();
        closeMenus();
        announce();
    }

    function wire() {
        document.addEventListener("click", function (e) {
            var toggle = e.target.closest("[data-lang-toggle]");
            if (toggle) {
                e.preventDefault();
                var menu = toggle.parentElement.querySelector("[data-lang-menu]");
                var willOpen = menu && menu.classList.contains("hidden");
                closeMenus();
                if (willOpen) {
                    menu.classList.remove("hidden");
                    toggle.setAttribute("aria-expanded", "true");
                }
                return;
            }
            var choice = e.target.closest("[data-lang-set]");
            if (choice) {
                e.preventDefault();
                set(choice.getAttribute("data-lang-set"));
                return;
            }
            if (!e.target.closest("[data-lang-menu]")) { closeMenus(); }
        });

        document.addEventListener("change", function (e) {
            if (e.target.matches && e.target.matches("select[data-lang-select]")) { set(e.target.value); }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") { closeMenus(); }
        });

        /* Same language across open tabs, like the theme */
        window.addEventListener("storage", function (e) {
            if (e.key === STORAGE_KEY && e.newValue && LANGUAGES[e.newValue]) { set(e.newValue, false); }
        });
    }

    function start() {
        try {
            apply(document);
            paintSwitchers();
        } finally {
            booted = true;
            unblock();
        }
        wire();
        announce();
    }

    /* Applied right away, before the first paint */
    var initial = stored();
    setDocumentLanguage(LANGUAGES[initial] ? initial : DEFAULT_LANG);
    injectStyle();
    block();

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }

    window.M3akI18n = {
        t: t,
        set: set,
        get: function () { return current; },
        dir: function () { return LANGUAGES[current].dir; },
        languages: function () { return Object.keys(LANGUAGES); },
        setKey: setKey,
        apply: apply
    };
})();
