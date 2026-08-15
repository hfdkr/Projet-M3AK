/* ─────────────────────────────
           HELPERS
        ───────────────────────────── */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function toast(msg) {

    const t = $("#toast");

    t.textContent = msg;
    t.style.opacity = "1";

    clearTimeout(t._timer);

    t._timer = setTimeout(() => {
        t.style.opacity = "0";
    }, 2400);
}


/* ─────────────────────────────
   CLOCK
───────────────────────────── */

function tickClock() {

    $("#clock").textContent =
        new Date().toLocaleTimeString("fr-FR", {
            hour12: false
        });
}

tickClock();
setInterval(tickClock, 1000);


/* ─────────────────────────────
   GENERIC MODAL
───────────────────────────── */

const modal = $("#modal");

let onConfirm = null;
let onCancel = null;


function openModal({
    title,
    text,
    icon = "sos-logo.png",
    confirm = "Confirm",
    cancel = "Cancel",
    action,
    cancelAction
}) {

    /* CHANGE ICON */
    $("#modalIcon").src =
        `/assets/emergence-image/${icon}`;

    $("#modalIcon").alt = title;

    /* CHANGE TITLE */
    $("#modalTitle").textContent = title;

    /* CHANGE TEXT */
    $("#modalText").textContent = text;

    /* CHANGE BUTTONS */
    $("#modalConfirm").textContent = confirm;
    $("#modalCancel").textContent = cancel;

    /* SAVE ACTIONS */
    onConfirm = action || null;
    onCancel = cancelAction || null;

    /* SHOW MODAL */
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    $("#modalConfirm").focus();
}


function closeModal(runCancel = false) {

    const fn = onCancel;

    modal.classList.add("hidden");
    modal.classList.remove("flex");

    onConfirm = null;
    onCancel = null;

    if (runCancel && fn) {
        fn();
    }
}


$("#modalCancel").addEventListener("click", () => {
    closeModal(true);
});


$("#modalConfirm").addEventListener("click", () => {

    const fn = onConfirm;

    closeModal();

    if (fn) {
        fn();
    }
});


modal.addEventListener("click", e => {

    if (e.target === modal) {
        closeModal(true);
    }
});


document.addEventListener("keydown", e => {

    if (
        e.key === "Escape" &&
        !modal.classList.contains("hidden")
    ) {
        closeModal(true);
    }
});


/* ─────────────────────────────
   SOS BUTTON
───────────────────────────── */

const HOLD_MS = 3000;
const RING_LEN = 2 * Math.PI * 46;

const sosBtn = $("#sosBtn");
const ring = $("#sosRing");
const hint = $("#sosHint");
const halo = $(".sos-halo");

let rafId = null;
let startedAt = 0;


ring.setAttribute(
    "stroke-dasharray",
    RING_LEN.toFixed(1)
);

ring.style.strokeDashoffset = RING_LEN;


function frame(now) {

    const p =
        Math.min(
            (now - startedAt) / HOLD_MS,
            1
        );

    ring.style.strokeDashoffset =
        RING_LEN * (1 - p);

    hint.textContent =
        `Hold ${Math.ceil((1 - p) * 3)}s`;

    if (p < 1) {

        rafId =
            requestAnimationFrame(frame);

    } else {

        fireAlert();
    }
}


function startHold(e) {

    if (rafId) return;

    e.preventDefault();

    sosBtn.classList.add("is-holding");
    halo.classList.add("is-holding");

    navigator.vibrate?.(25);

    startedAt = performance.now();

    rafId =
        requestAnimationFrame(frame);
}


function cancelHold() {

    if (!rafId) return;

    cancelAnimationFrame(rafId);

    rafId = null;

    ring.style.strokeDashoffset =
        RING_LEN;

    sosBtn.classList.remove("is-holding");
    halo.classList.remove("is-holding");

    hint.textContent =
        "Press to trigger";
}


function resetRing() {

    ring.style.strokeDashoffset =
        RING_LEN;

    hint.textContent =
        "Press to trigger";
}


function fireAlert() {

    cancelAnimationFrame(rafId);

    rafId = null;

    sosBtn.classList.remove("is-holding");
    halo.classList.remove("is-holding");

    ring.style.strokeDashoffset = 0;

    hint.textContent =
        "Alert active";

    navigator.vibrate?.([
        60,
        40,
        60
    ]);


    /* SOS MODAL */
    openModal({

        title: "SOS Alert",

        text:
            "Your emergency alert has been activated. Your location will be shared with emergency services and your primary contacts.",

        icon: "sos-logo.png",

        confirm:
            "Keep alert active",

        cancel:
            "Cancel alert",

        action: () => {

            toast(
                "Alert stays active — responders can track your location"
            );
        },

        cancelAction: () => {

            resetRing();

            toast(
                "Alert cancelled"
            );
        }
    });
}


sosBtn.addEventListener(
    "pointerdown",
    startHold
);

sosBtn.addEventListener(
    "pointerup",
    cancelHold
);

sosBtn.addEventListener(
    "pointerleave",
    cancelHold
);

sosBtn.addEventListener(
    "pointercancel",
    cancelHold
);

sosBtn.addEventListener(
    "contextmenu",
    e => e.preventDefault()
);

sosBtn.addEventListener(
    "keydown",
    e => {

        if (
            (e.key === " " ||
                e.key === "Enter") &&
            !e.repeat
        ) {
            startHold(e);
        }
    }
);

sosBtn.addEventListener(
    "keyup",
    cancelHold
);

sosBtn.addEventListener(
    "blur",
    cancelHold
);


/* HEADER SOS BUTTON */

$$("[data-jump-sos]").forEach(b => {

    b.addEventListener(
        "click",
        () => {

            $("#sosCard").scrollIntoView({
                block: "center"
            });

            sosBtn.focus();

            toast(
                "Press and hold the SOS button for 3 seconds"
            );
        }
    );

});


/* ─────────────────────────────
   QUICK EMERGENCY CALLS
───────────────────────────── */

$$("[data-call]").forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            const num =
                btn.dataset.call;

            const service =
                btn.dataset.service;


            /* EACH SERVICE HAS ITS OWN ICON */

            const icons = {

                "Police":
                    "police-icon.png",

                "Ambulance":
                    "ambulance-icon.png",

                "Gendarmerie Royale":
                    "gendarme-icon.png"
            };


            openModal({

                title:
                    `Call ${service}`,

                text:
                    `You are about to call ${service} on ${num}. Only confirm if you need emergency assistance.`,

                icon:
                    icons[service],

                confirm:
                    `Call ${num}`,

                cancel:
                    "Not now",

                action: () => {

                    window.location.href =
                        `tel:${num}`;
                }
            });

        }
    );

});


/* ─────────────────────────────
   MAP
───────────────────────────── */

const PLACES = {

    hospitals: {
        name: "Hôpital Militaire d'Instruction",
        meta: "0.8 km · 4 mins away",
        status: "ER open · Occupancy low",
        icon: "hopitale-Icon.png",
        lat: 34.0075,
        lon: -6.8489
    },

    pharmacies: {
        name: "Pharmacie de la Gare (24h)",
        meta: "0.4 km · 2 mins away",
        status: "Open now · Night duty",
        icon: "pharmacy.jpg",
        lat: 34.0132,
        lon: -6.8326
    },

    police: {
        name: "Préfecture de Police de Rabat",
        meta: "1.2 km · 6 mins away",
        status: "Open 24/7 · Patrol nearby",
        icon: "police-icon.png",
        lat: 34.0209,
        lon: -6.8416
    }
};


function paintTabs(active) {

    $$(".map-tab").forEach(t => {

        const on =
            t.dataset.layer === active;

        t.className =
            `map-tab shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${on
                ? "bg-brand-soft text-brand"
                : "text-muted hover:text-ink"
            }`;

        t.setAttribute(
            "aria-pressed",
            on
        );
    });
}


function showLayer(key) {

    const p = PLACES[key];

    $("#placeName").textContent =
        p.name;

    $("#placeMeta").textContent =
        p.meta;

    $("#placeStatus").textContent =
        p.status;

    $("#placeIcon").src =
        `/assets/emergence-image/${p.icon}`;


    const bbox = [
        p.lon - .012,
        p.lat - .006,
        p.lon + .012,
        p.lat + .006
    ].join("%2C");


    $("#mapFrame").src =
        `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${p.lat}%2C${p.lon}`;


    paintTabs(key);
}


$$(".map-tab").forEach(t => {

    t.addEventListener(
        "click",
        () => showLayer(t.dataset.layer)
    );

});


showLayer("hospitals");


/* ─────────────────────────────
   MEDICAL ID
───────────────────────────── */

let editing = false;


$("#editMedical").addEventListener(
    "click",
    () => {

        editing = !editing;

        $$(".med-field").forEach(f => {

            f.contentEditable =
                editing;

            f.classList.toggle(
                "bg-white/15",
                editing
            );

            f.classList.toggle(
                "ring-1",
                editing
            );

            f.classList.toggle(
                "ring-white/30",
                editing
            );
        });


        if (editing) {

            $$(".med-field")[0].focus();

        } else {

            toast(
                "Medical ID updated"
            );
        }
    }
);


/* ─────────────────────────────
   EMERGENCY CONTACTS
───────────────────────────── */

const CONTACTS = [

    {
        name: "Amina Mansouri",
        role: "Mother",
        phone: "+212 6xx-xxxxxx",
        online: true
    },

    {
        name: "Driss El Fassi",
        role: "Brother",
        phone: "+212 7xx-xxxxxx",
        online: false
    },

    {
        name: "Dr. Sarah Tazi",
        role: "Personal Physician",
        phone: "+212 5xx-xxxxxx",
        online: true
    }
];


const initials = n =>

    n.replace(/^Dr\.\s*/i, "")
        .split(" ")
        .map(w => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();


function renderContacts() {

    $("#contactList").innerHTML =
        CONTACTS.map(c => `

                    <li class="flex items-center gap-3 py-3">

                        <span class="grid size-9 shrink-0 place-items-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">
                            ${initials(c.name)}
                        </span>

                        <span class="min-w-0 flex-1">

                            <span class="block truncate text-xs font-bold">
                                ${c.name}
                            </span>

                            <span class="block truncate text-[11px] text-muted">
                                ${c.role} · ${c.phone}
                            </span>

                        </span>

                        <span
                            class="size-2 shrink-0 rounded-full ${c.online
                ? "bg-brand"
                : "bg-black/15"
            }"
                            title="${c.online
                ? "Reachable"
                : "Unreachable"
            }">
                        </span>

                    </li>

                `).join("");
}


renderContacts();


const form =
    $("#contactForm");


$("#addContact").addEventListener(
    "click",
    () => {

        form.classList.toggle(
            "hidden"
        );

        if (!form.classList.contains("hidden")) {

            $("#cName").focus();
        }
    }
);


$("#cancelContact").addEventListener(
    "click",
    () => {

        form.classList.add(
            "hidden"
        );
    }
);


$("#saveContact").addEventListener(
    "click",
    () => {

        const name =
            $("#cName").value.trim();

        const role =
            $("#cRole").value.trim();

        const phone =
            $("#cPhone").value.trim();


        if (!name || !phone) {

            toast(
                "Add a name and a phone number to save"
            );

            return;
        }


        CONTACTS.push({

            name,
            role:
                role || "Contact",

            phone,
            online: true
        });


        ["#cName", "#cRole", "#cPhone"]
            .forEach(
                s => ($(s).value = "")
            );


        form.classList.add(
            "hidden"
        );


        renderContacts();


        toast(
            "Contact added to your alert list"
        );
    }
);