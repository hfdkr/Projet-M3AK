/* ==========================================================
   M3ak Morocco — ui.js
   Le peu qui était recopié à l'identique dans overview,
   marketplace et transport : les deux raccourcis de sélection
   et la pile de toasts.

   Expose window.M3akUI = { $, $$, toast }.
========================================================== */
(function () {
    "use strict";

    var STACK_ID = "m3ak-toast-stack";
    var TOAST_DURATION = 2600;

    /* ------------------------------------------------------
       Sélection
    ------------------------------------------------------ */
    function $(selector, scope) {
        return (scope || document).querySelector(selector);
    }

    function $$(selector, scope) {
        return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
    }

    /* ------------------------------------------------------
       Toasts

       La pile est créée à la première utilisation : aucune
       page n'a besoin de prévoir un conteneur dans son HTML.
    ------------------------------------------------------ */
    function stack() {
        var node = document.getElementById(STACK_ID);
        if (node) return node;

        node = document.createElement("div");
        node.id = STACK_ID;
        node.setAttribute("role", "status");
        node.setAttribute("aria-live", "polite");
        node.style.cssText =
            "position:fixed;left:50%;bottom:88px;transform:translateX(-50%);" +
            "z-index:9999;display:flex;flex-direction:column;gap:8px;" +
            "align-items:center;pointer-events:none;width:max-content;max-width:92vw";

        document.body.appendChild(node);
        return node;
    }

    var TONES = {
        info: "#0B6B45",
        error: "#E1362C"
    };

    function toast(message, tone) {
        var node = document.createElement("div");

        node.textContent = message;
        node.style.cssText =
            "background:" + (TONES[tone] || TONES.info) + ";color:#fff;" +
            "font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;line-height:18px;" +
            "padding:10px 18px;border-radius:999px;box-shadow:0 8px 24px rgba(0,0,0,.18);" +
            "opacity:0;transform:translateY(8px);transition:opacity .2s,transform .2s";

        stack().appendChild(node);

        requestAnimationFrame(function () {
            node.style.opacity = "1";
            node.style.transform = "none";
        });

        window.setTimeout(function () {
            node.style.opacity = "0";
            node.style.transform = "translateY(8px)";
            window.setTimeout(function () { node.remove(); }, 220);
        }, TOAST_DURATION);
    }

    window.M3akUI = { $: $, $$: $$, toast: toast };
})();
