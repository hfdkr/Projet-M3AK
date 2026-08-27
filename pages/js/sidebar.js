(function () {
    "use strict";

    var STORAGE_KEY = "m3ak.sidebarCollapsed";

    function getStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function setStored(value) {
        try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    }

    function isCollapsed() {
        return getStored() !== "false";
    }

    function apply(collapsed) {
        var sidebar = document.getElementById("sidebar");
        if (sidebar) sidebar.classList.toggle("sidebar-collapsed", collapsed);

        document.querySelectorAll("[data-sidebar-toggle]").forEach(function (btn) {
            btn.setAttribute("aria-expanded", String(!collapsed));
        });
    }

    function toggle() {
        var next = !isCollapsed();
        setStored(String(next));
        apply(next);
    }

    function wire() {
        apply(isCollapsed());

        document.addEventListener("click", function (e) {
            var btn = e.target.closest("[data-sidebar-toggle]");
            if (btn) {
                e.preventDefault();
                toggle();
            }
        });

        /* État partagé entre onglets */
        window.addEventListener("storage", function (e) {
            if (e.key === STORAGE_KEY) apply(isCollapsed());
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", wire);
    } else {
        wire();
    }
})();
