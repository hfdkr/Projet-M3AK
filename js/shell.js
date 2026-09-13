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

        /* Legacy pages toggle `-translate-x-full` / `hidden` directly on the
           markup; the .app-* pages use `.is-open`. Drive both so one code path
           fits every page. */
        var openedAt = 0;
        function setOpen(open) {
            if (open) { openedAt = Date.now(); }
            sidebar.classList.toggle("is-open", open);
            sidebar.classList.toggle("-translate-x-full", !open);
            scrim.classList.toggle("is-open", open);
            scrim.classList.toggle("hidden", !open);
            document.body.classList.toggle("overflow-hidden", open && isDrawer());
        }

        /* Ignore pointer-out events fired while the drawer is still sliding in
           (the sidebar moving under a resting cursor briefly triggers them). */
        function settled() { return Date.now() - openedAt > 350; }

        if (menuBtn) { menuBtn.addEventListener("click", function () { setOpen(true); }); }
        scrim.addEventListener("click", function () { setOpen(false); });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") { setOpen(false); }
        });

        /* Pointer moves clear of the open drawer → close it (mobile + tablet).
           Uses the cursor position rather than mouseenter/leave, which the
           sidebar can miss when it slides in under a resting cursor. */
        function isOpen() { return sidebar.classList.contains("is-open"); }
        document.addEventListener("mousemove", function (e) {
            if (!isOpen() || !isDrawer() || !settled()) { return; }
            if (e.clientX > sidebar.getBoundingClientRect().right + 24) { setOpen(false); }
        });
        sidebar.addEventListener("mouseleave", function () {
            if (isDrawer() && settled()) { setOpen(false); }
        });

        /* Tap/click anywhere outside the drawer closes it too. */
        document.addEventListener("click", function (e) {
            if (!isDrawer() || !settled()) { return; }
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
