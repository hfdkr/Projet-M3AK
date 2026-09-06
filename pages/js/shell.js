/* ==========================================================
   M3ak Morocco — shell.js
   Shared behaviour for the app shell (left sidebar + mobile/tablet drawer).

   Markup contract (same on every app page):
     <button id="menuBtn">           hamburger, hidden once the sidebar docks
     <div id="scrim" class="app-scrim"></div>
     <aside id="sidebar" class="app-sidebar"> … nav links … </aside>

   - Opens / closes the drawer on any viewport where the sidebar isn't docked
     (menu button opens; scrim, Esc, pointer-leave, click-away, nav-link,
     bfcache restore and growing past the docked breakpoint all close it).
   - Marks the current page's link with .nav-item--active + aria-current.
========================================================== */
(function () {
    "use strict";

    function wireDrawer() {
        var sidebar = document.getElementById("sidebar");
        var scrim = document.getElementById("scrim");
        var menuBtn = document.getElementById("menuBtn");
        if (!sidebar || !scrim) { return; }

        /* The sidebar is a drawer while it's positioned as an overlay; once the
           breakpoint docks it (position: sticky) there's nothing to close. */
        function isDrawer() {
            return getComputedStyle(sidebar).position !== "sticky";
        }

        function setOpen(open) {
            sidebar.classList.toggle("is-open", open);
            scrim.classList.toggle("is-open", open);
            document.body.classList.toggle("overflow-hidden", open && isDrawer());
        }

        if (menuBtn) { menuBtn.addEventListener("click", function () { setOpen(true); }); }
        scrim.addEventListener("click", function () { setOpen(false); });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") { setOpen(false); }
        });

        /* Pointer leaves the open drawer (mobile + tablet) → close it. */
        sidebar.addEventListener("mouseleave", function () {
            if (isDrawer()) { setOpen(false); }
        });

        /* Tap/click anywhere outside the drawer closes it too. */
        document.addEventListener("click", function (e) {
            if (!isDrawer()) { return; }
            if (sidebar.contains(e.target) || (menuBtn && menuBtn.contains(e.target))) { return; }
            setOpen(false);
        });

        /* Close as soon as a nav link is picked — matters for links that stay on
           the same page (e.g. "#account") and don't reload to reset it. */
        sidebar.querySelectorAll("a[href]").forEach(function (link) {
            link.addEventListener("click", function () { setOpen(false); });
        });

        /* Grew past the docked breakpoint, or restored from the back/forward
           cache with stale DOM state → drop the open state. */
        window.addEventListener("resize", function () {
            if (!isDrawer()) { setOpen(false); }
        });
        window.addEventListener("pageshow", function () { setOpen(false); });
    }

    /* Highlight the sidebar link for the current page. Pages that aren't in the
       sidebar (finance, registry, interior…) simply get no highlight. */
    function markActive() {
        var current = location.pathname.split("/").pop() || "overview.html";

        document.querySelectorAll("#sidebar a[href]").forEach(function (link) {
            var target = link.getAttribute("href").split("#")[0].split("/").pop();
            if (target && target === current) {
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
