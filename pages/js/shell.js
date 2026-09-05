/* ==========================================================
   M3ak Morocco — shell.js
   Shared behaviour for the app shell (left sidebar + mobile drawer).

   Markup contract (same on every app page):
     <button id="menuBtn">           mobile hamburger, lg:hidden
     <div id="scrim" class="app-scrim"></div>
     <aside id="sidebar" class="app-sidebar"> … nav links … </aside>

   - Opens / closes the drawer on mobile (menu button, scrim, Esc).
   - Marks the current page's link with .nav-item--active + aria-current.
========================================================== */
(function () {
    "use strict";

    /* sub-pages that live under a parent section in the sidebar */
    var SECTION_OF = {
        "finance.html": "service.html",
        "registry.html": "service.html",
        "interior.html": "service.html",
        "coming-soon.html": "service.html"
    };

    function wireDrawer() {
        var sidebar = document.getElementById("sidebar");
        var scrim = document.getElementById("scrim");
        var menuBtn = document.getElementById("menuBtn");
        if (!sidebar || !scrim) { return; }

        function setOpen(open) {
            sidebar.classList.toggle("is-open", open);
            scrim.classList.toggle("is-open", open);
            document.body.classList.toggle("overflow-hidden", open);
        }

        if (menuBtn) { menuBtn.addEventListener("click", function () { setOpen(true); }); }
        scrim.addEventListener("click", function () { setOpen(false); });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") { setOpen(false); }
        });

        /* Close the drawer as soon as a nav link is picked — matters for links
           that stay on the same page (e.g. "#account") and don't trigger a
           fresh page load to reset it. */
        sidebar.querySelectorAll("a[href]").forEach(function (link) {
            link.addEventListener("click", function () { setOpen(false); });
        });

        /* Pages restored from the back/forward cache keep their old DOM state,
           so the drawer could still show as open — force it closed. */
        window.addEventListener("pageshow", function () { setOpen(false); });
    }

    function markActive() {
        var file = location.pathname.split("/").pop() || "overview.html";
        var active = SECTION_OF[file] || file;

        document.querySelectorAll("#sidebar a[href]").forEach(function (link) {
            var target = link.getAttribute("href").split("#")[0].split("/").pop();
            if (target && target === active) {
                link.classList.add("nav-item--active");
                link.setAttribute("aria-current", "page");
            }
        });
    }

    function start() {
        wireDrawer();
        markActive();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
