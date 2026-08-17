(function () {
    "use strict";

    var STORAGE_KEY = "m3ak.theme";

    function getStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function systemPrefersDark() {
        return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }

    function currentTheme() {
        var stored = getStored();
        return stored === "dark" || stored === "light" ? stored : (systemPrefersDark() ? "dark" : "light");
    }

    function apply(theme) {
        var root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        root.setAttribute("data-theme", theme);

        document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
            btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
        });
    }

    /* Appliqué tout de suite, avant le premier paint */
    apply(currentTheme());

    function toggle() {
        var next = document.documentElement.classList.contains("dark") ? "light" : "dark";
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
        apply(next);
    }

    function wire() {
        document.addEventListener("click", function (e) {
            var btn = e.target.closest("[data-theme-toggle]");
            if (btn) {
                e.preventDefault();
                toggle();
            }
        });

        /* Thème partagé entre onglets */
        window.addEventListener("storage", function (e) {
            if (e.key === STORAGE_KEY) apply(currentTheme());
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", wire);
    } else {
        wire();
    }

    window.M3akTheme = { toggle: toggle, get: currentTheme, apply: apply };
})();