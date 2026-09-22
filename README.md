# 🇲🇦 Projet-M3AK

A modern digital identity platform concept for Morocco — the interface, navigation, and user experience for managing digital identity and public services, as a **frontend project** built with HTML, Tailwind CSS, and vanilla JavaScript.

**🔗 Live demo:** [projet-m3-ak.vercel.app](https://projet-m3-ak.vercel.app/) — deployed on [Vercel](https://vercel.com/).

Backend (real auth, database, API) is planned for a later phase, once that's covered in the author's studies
(2026/2027 academic year) — this project is frontend-only for now, by design.

---

## 📸 Preview

<p align="center">
  <img src="./assets/screenshots/screen-index.png" alt="Landing Page" width="48%">
  <img src="./assets/screenshots/screen-overview.png" alt="Overview Page" width="48%">
</p>

<p align="center">
  <b>Landing Page</b>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Overview Page</b>
</p>

> More screenshots (Emergency Hub, Payments, Jobs) coming soon — see [Notes & Scope](#-notes--scope).

---

## 🚀 Tech Stack

- HTML5
- Tailwind CSS v4 *(via CDN — build step planned, see Roadmap)*
- JavaScript (vanilla, no framework)
- OpenStreetMap / Leaflet *(live maps & geolocation)*
- Deployed on [Vercel](https://vercel.com/)

This is the complete stack for now — frontend only. A backend is planned for later (see Roadmap).

---

## 📂 Project Structure

```text
Projet-M3AK/
│
├── assets/
│   ├── icon-bar-left/          # Legacy left-sidebar nav PNGs (+ "-green" active variants)
│   ├── transport-icon/         # Transport page icons (modes, planner, quick places)
│   ├── housing-icons/          # Housing page icons
│   ├── jobs-icon/              # "Explore by Ministry & Sector" tiles (Jobs)
│   ├── payment-icons/          # "Pay a Bill" category tiles (Payments)
│   ├── education/              # Education page icons
│   ├── finance/                # Finance page icons
│   ├── home/                   # Services Directory icons
│   ├── my-space/               # My Space icons
│   ├── login-sign/
│   │   ├── image-login/
│   │   └── image-sign-up/
│   ├── images/
│   ├── emergence-image/
│   ├── health-image/
│   ├── support-image/
│   ├── coming-soon/
│   └── settings/               # Logo, theme toggle, notification, avatar, password show/hide (SVG pairs)
│
├── pages/
│   ├── auth/
│   │   ├── login.html
│   │   ├── signup.html
│   │   ├── forgot-password.html
│   │   ├── reset-password.html
│   │   ├── onboarding.html        # Post-signup profile setup (personal / location / medical / emergency contact)
│   │   └── region-restricted.html # Shown after sign-in when the saved profile country isn't Morocco
│   │
│   ├── app/
│   │   ├── home.html             # Services Directory (12 ministry categories) — the signed-in landing page
│   │   ├── overview.html         # "My Space" — merged personal portal (Dashboard / My Requests / Appointments / Personal Info / Account)
│   │   ├── transport.html
│   │   ├── health.html
│   │   ├── emergence.html
│   │   ├── housing.html
│   │   ├── jobs.html
│   │   ├── education.html
│   │   ├── payments.html         # Wallet balance + bill payment categories
│   │   ├── registry.html         # Civil Registry (birth/marriage/residence certs)
│   │   ├── interior.html         # Passport, CNIE, residence permits
│   │   ├── finance.html          # Income tax, VAT, customs
│   │   ├── support.html          # Help Center (shared)
│   │   ├── assistant.html        # AI Assistant (linked from every app page's sidebar)
│   │   └── coming-soon.html      # Placeholder for not-yet-built sections
│   │
│   └── admin-pages/
│       └── compte.html           # Redirect stub → overview.html ("My Space"); the old Account/Settings page, now merged in as tabs
│
├── js/
│   ├── session.js
│   ├── theme.js
│   ├── shell.js
│   ├── onboarding.js
│   ├── landing-carousel.js       # index.html's mobile Skip/dots + auto-advancing slides
│   ├── login.js
│   ├── signup.js
│   ├── forgot-password.js
│   ├── reset-password.js
│   └── emergence.js
│
├── index.html
├── .gitignore
└── README.md
```

---

## ✨ Features

- Modern and responsive UI, light/dark mode on every page (`theme.js`, shared across tabs)
- **Unified information architecture:** one main citizen journey — **My Space → Services → (Transport,
  Health, Housing, Jobs, Education, Payments) → Emergency → Support**. The same left sidebar
  (My Space first, then the services, Emergency Support / Help Center / AI Assistant / Logout in the foot)
  is now present and consistent on every app page, including the Emergency Hub.
- **Shared site footer** — one identical, responsive footer on all 22 pages. Phones get a compact centred
  layout (brand, links, then single-line location / hours / contact rows with green outline icons); from
  `md` up it becomes a bar with brand, nav and copyright over three columns (Contact Us, Working Hours,
  Global HQ). Light and dark both follow the existing theme toggle.
- **My Space** (`overview.html`) — a single personal portal merging what used to be three overlapping
  pages (Overview dashboard + Compte Info + user settings). Tabbed: Dashboard, My Requests, Appointments,
  Personal Info (incl. Digital ID / CIN), Account (security + preferences). Deep links like
  `overview.html#account` or `#personal-info` open the matching tab; the old `compte.html#…` links
  still work via a redirect stub. The Dashboard tab holds a KPI snapshot (requests, payments,
  appointments) and a lightweight activity chart (pure CSS, no charting library).
- Instagram-style collapsible sidebar on every app page: icons only by default, hovering the sidebar
  reveals every label at once, active page always visible on its own icon color
- Shared left-sidebar icon set: most pages now use inline SVG nav icons that inherit `currentColor`, so
  active and dark-mode states come from the CSS rather than swapped image files; the older PNG set
  (`assets/icon-bar-left/`, with `-green` active variants) is still in use on the remaining pages
- Theme-aware image pairs throughout: logo, notification bell and password show/hide icons each ship a
  light and a dark SVG, swapped with `dark:hidden` / `hidden dark:block`
- Header avatar reflects the session — the profile photo when signed in, a neutral user icon when not,
  driven by the existing `data-auth` hooks in `session.js` (no extra JS)
- **AI Assistant** page (`assistant.html`), linked from every app page's sidebar and from the Help Center
- Live transport status on the My Space Dashboard tab
- Digital identity management (UI) — CIN card, personal info, security, preferences in My Space → Personal Info / Account
- Services Directory (`home.html`, the signed-in landing page) — 12 ministry categories: Housing, Jobs,
  Education, Health, Registry, Transport, Interior, Finance, Justice, Foreign Affairs, Agriculture, Culture.
  8 are real pages; Justice, Foreign Affairs, Agriculture, and Culture fall back to the shared Coming Soon
  placeholder.
- Payments hub UI with wallet balance, recent payments, and bill-payment categories
- Emergency Hub: press-and-hold SOS (3s, with a progress ring, countdown and pointer capture so the
  gesture survives finger drift), quick dial (Police 19 / Ambulance 15 / Gendarmerie 177 /
  Firefighters 15), live map, medical ID
- Session handling shared across pages via `localStorage` (`session.js`), with an auth guard
  (`data-require-auth`) that redirects to Log in on every app/admin page if no session is stored
- Client-side form validation with no backend: live password-requirement checks and a password/confirm
  match guard on Reset Password (blocks submit and announces the mismatch via `role="alert"`), and a
  digits-only filter on the onboarding contact-phone field
- Clean and accessible design (ARIA attributes, keyboard-focus reveals sidebar labels too, descriptive
  `alt` text on every `<img>` across the project)

> All data shown across the app (transport times, listings, payments, KPIs, etc.) is static/demo data, and
> actions like booking or checkout are UI-only — see [Notes & Scope](#-notes--scope) and the Roadmap for
> what's planned once the backend lands.

---

## 📋 Roadmap

### ✅ Current / Completed

**Setup**

- [x] Project Planning
- [x] UI/UX Design
- [x] Project Structure

**Authentication**

- [x] Landing Page
- [x] Sign In Page (UI + validation, wired to session)
- [x] Sign Up Page (UI + validation, wired to session)
- [x] Forgot Password Page
- [x] Reset Password Page (live requirement checks + reset flow)
- [x] Onboarding (post-signup profile setup)
- [x] Region-restricted screen for non-Morocco profiles

**App**

- [x] Services Directory / signed-in landing page (`home.html`)
- [x] My Space (`overview.html` — Dashboard, My Requests, Appointments, Personal Info, Account tabs)
- [x] Transport Page
- [x] Health / Find a Specialist Page
- [x] Emergency Hub Page
- [x] Help Center Page (shared across the app)
- [x] AI Assistant Page
- [x] Coming Soon placeholder (for sections without a dedicated page yet)
- [x] Housing Page
- [x] Jobs Page
- [x] Education Page
- [x] Payments Page (wallet balance + bill payment categories)
- [x] Civil Registry Page (birth/marriage/residence certificates, CNIE renewal)
- [x] Interior Page (passports, residence permits, CNIE)
- [x] Finance Page (income tax, VAT, customs)

**Shared UI System**

- [x] Light/dark theme on every page, shared across tabs (`theme.js`)
- [x] Collapsible left sidebar, consistent on all 13 app pages
- [x] Standardized responsive footer across all 22 pages
- [x] Session handling + auth guard shared across pages (`session.js`)
- [x] Client-side form validation (password rules, password match, numeric phone input)
- [x] Accessibility pass (ARIA attributes, keyboard focus, descriptive `alt` text)

**Responsive Design**

- [x] Mobile layout
- [x] Desktop / laptop layout

**Deployment**

- [x] Deployed on [Vercel](https://projet-m3-ak.vercel.app/)

### 🔮 Future Features & Improvements

Planned for a later version — outside the scope completed above.

**Additional Pages**

- [ ] Justice page
- [ ] Foreign Affairs page
- [ ] Agriculture page
- [ ] Culture page
- [ ] Standalone Admin Dashboard *(the KPI snapshot currently lives in My Space's Dashboard tab)*

**Design & Compatibility**

- [ ] Tablet-specific optimization *(tablet viewports currently reuse the desktop/laptop layout)*
- [ ] Cross-browser testing
- [ ] Translate `reset-password.html` to English (`lang`, `<title>`)
- [ ] Finish the sidebar PNG → inline-SVG icon migration on the remaining pages

**Tooling & Performance**

- [ ] Tailwind production build (replace the CDN build, see Tech Stack)
- [ ] Performance optimization
- [ ] Automated broken-link checking (GitHub Actions)

### 🔧 Future Backend Phase (Planned — 2026/2027 academic year)

- [ ] Real authentication
- [ ] Database
- [ ] Real API wired into the existing frontend

---
## 📝 Notes & Scope

A few deliberate boundaries of this frontend stage, so the demo reads as intended:

* **All data is static/demo data.** Transport times, listings, payments and KPIs are hard-coded, and
  actions like booking or checkout are UI-only — by design, until the backend phase.
* **Four ministry categories** (Justice, Foreign Affairs, Agriculture, Culture) intentionally route to the
  shared **Coming Soon** page rather than shipping half-built pages.
* **Tablet viewports reuse the desktop/laptop layout** as a functional fallback; a tablet-tuned breakpoint
  is planned (see Future Features).
* The two preview screenshots above point at `assets/screenshots/`, which isn't committed yet, so they
  render as broken on GitHub until the images are added.

Navigation, authentication-flow, responsive, dark-mode, asset-path and accessibility issues identified
during development have all been reviewed and fixed.

---

## 📌 Current Progress

- ✅ Project setup completed
- ✅ Landing page completed
- ✅ Auth pages (login, signup, forgot password, reset password, onboarding, region-restricted) — UI
  complete, fully wired to the shared session
- ✅ Home/Services Directory, My Space, Transport, Health, Housing, Jobs, Education, Payments, Registry,
  Interior, Finance, Emergency Hub, Help Center, AI Assistant — UI complete and cross-linked
- ✅ Internal navigation, auth JS, and session guard fixed across the app
- ✅ Dark mode verified complete on every page (two pages were silently broken, now fixed)
- ✅ Instagram-style collapsible sidebar rolled out to all 13 app pages that have one
- ✅ Sidebar nav icons largely migrated from the PNG set to inline SVG (`currentColor`-driven active and
  dark-mode states); Settings removed from the sidebar since it now lives as a My Space tab
- ✅ Shared responsive footer standardized across all 22 pages, replacing seven different per-page footers
- ✅ Header polish across the app: brand no longer wraps on narrow phones, the logo mark is hidden on
  mobile, and the logo now reloads the current page instead of linking to Coming Soon
- ✅ Jobs and Finance pages translated to English; Jobs restyled (employer-type tabs, richer job cards,
  full-width sector band) and its sector tiles wired to the `jobs-icon/` set
- ✅ Education page given a mobile-compact type and spacing scale; Payments "Pay a Bill" tiles wired to
  the `payment-icons/` set
- ✅ Accessibility pass — descriptive `alt` text added to every image across the project
- ✅ Account/Settings page (now the Account tab in My Space) got the mobile hamburger + drawer it was missing
- ✅ Mobile and desktop breakpoints in place across the app
- ✅ Deployed on Vercel: https://projet-m3-ak.vercel.app/

**The frontend scope for this stage is complete.** Everything planned beyond it is listed under
[Future Features & Improvements](#-future-features--improvements) and the
[Future Backend Phase](#-future-backend-phase-planned--20262027-academic-year).

---

## 👨‍💻 Author

**Hafid Karkouch**

- GitHub: https://github.com/hfdkr