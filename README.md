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

> More screenshots (Emergency Hub, Admin Dashboard) coming soon — see [Known Issues](#-known-issues).

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
│   ├── icon-bar-left/          # Shared left-sidebar nav icons (+ "-green" active variants)
│   ├── transport-icon/         # Transport page icons (modes, planner, quick places)
│   ├── housing-icons/          # Housing page icons
│   ├── login-sign/
│   │   ├── image-login/
│   │   ├── image-signUp/
│   │   └── image-new-password/
│   ├── images/
│   ├── emergence-image/
│   ├── health-image/
│   ├── support-image/
│   ├── coming-soon/
│   ├── settings/
│   └── screenshots/
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
  (My Space first, then the services, Emergency Support / Help Center / Settings / Logout in the foot)
  is now present and consistent on every app page, including the Emergency Hub.
- **My Space** (`overview.html`) — a single personal portal merging what used to be three overlapping
  pages (Overview dashboard + Compte Info + user settings). Tabbed: Dashboard, My Requests, Appointments,
  Personal Info (incl. Digital ID / CIN), Account (security + preferences). Deep links like
  `overview.html#account` or `#personal-info` open the matching tab; the old `compte.html#…` links
  still work via a redirect stub. The Dashboard tab holds a KPI snapshot (requests, payments,
  appointments) and a lightweight activity chart (pure CSS, no charting library).
- Instagram-style collapsible sidebar on every app page: icons only by default, hovering the sidebar
  reveals every label at once, active page always visible on its own icon color
- Shared left-sidebar icon set: nav items use a single PNG set (`assets/icon-bar-left/`), with `-green`
  variants shown on the active page and a dark-mode filter that keeps the plain icons legible
- **AI Assistant** page (`assistant.html`), linked from every app page's sidebar and from the Help Center
- Live transport status on the My Space Dashboard tab
- Digital identity management (UI) — CIN card, personal info, security, preferences in My Space → Personal Info / Account
- Services Directory (`home.html`, the signed-in landing page) — 12 ministry categories: Housing, Jobs,
  Education, Health, Registry, Transport, Interior, Finance, Justice, Foreign Affairs, Agriculture, Culture.
  8 are real pages; Justice, Foreign Affairs, Agriculture, and Culture fall back to the shared Coming Soon
  placeholder.
- Payments hub UI with wallet balance, recent payments, and bill-payment categories
- Emergency Hub: hold-to-trigger SOS, quick dial (Police 19 / Ambulance 15 / Gendarmerie 177), live map, medical ID
- Session handling shared across pages via `localStorage` (`session.js`), with an auth guard
  (`data-require-auth`) that redirects to Log in on every app/admin page if no session is stored
- Clean and accessible design (ARIA attributes, keyboard-focus reveals sidebar labels too, descriptive
  `alt` text on every `<img>` across the project)

> All data shown across the app (transport times, listings, payments, KPIs, etc.) is static/demo data, and
> actions like booking or checkout are UI-only for now — see [Current Progress](#-current-progress) and the
> Roadmap for what's planned once the backend lands.

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

**Responsive Design**

- [x] Mobile layout
- [x] Desktop / laptop layout

**Deployment**

- [x] Deployed on [Vercel](https://projet-m3-ak.vercel.app/)

### 🔜 Next Steps (Frontend)

- [ ] Justice, Foreign Affairs, Agriculture, Culture pages (still on the shared Coming Soon placeholder)
- [ ] Tablet-specific layout — tablet viewports currently reuse the desktop/laptop layout as a functional
      fallback; no breakpoint tuned specifically for tablet-sized screens yet
- [ ] Rebuild a standalone Admin Dashboard page — the previous one was removed; its footer link now points
      to Coming Soon, and the KPI snapshot it used to show now lives inside My Space's own Dashboard tab
- [ ] Missing icon assets referenced by `health.html` (`assets/services-image/`) and by the My Space
      Dashboard tab (`assets/dashboard-assets/`) — folders don't exist yet
- [ ] Cross-browser testing
- [ ] Automated broken-link check (GitHub Actions)
- [ ] Performance optimization
- [ ] Tailwind build step (replace the CDN build, see Tech Stack)

### 🔧 Future Backend Phase (Planned — 2026/2027 academic year)

- [ ] Real authentication
- [ ] Database
- [ ] Real API wired into the existing frontend

---
## 🐛 Known Issues

The project is functional, but a few items are still in progress:

**Still open:**

* Justice, Foreign Affairs, Agriculture, and Culture are currently represented by the shared **Coming Soon** page.
* `health.html` and the My Space Dashboard still reference some missing `.png` assets in `assets/services-image/` and `assets/dashboard-assets/`.
* The standalone Admin Dashboard has been removed and its demo link currently points to **Coming Soon**.
* Tablet layouts currently reuse the desktop/laptop layout; tablet-specific optimization is still pending.
* Cross-browser testing and final performance optimization are still pending.

Previously identified navigation, authentication-flow, responsive, dark-mode, asset-path, and accessibility issues have been reviewed and fixed during the development process.

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
- ✅ Sidebar nav switched to a shared PNG icon set (`icon-bar-left/`) with active-state green variants and a
  Passport entry on every page; `transport.html` wired to its own `transport-icon/` set
- ✅ Accessibility pass — descriptive `alt` text added to every image across the project
- ✅ Account/Settings page (now the Account tab in My Space) got the mobile hamburger + drawer it was missing
- ✅ Mobile and desktop breakpoints in place across the app; tablet viewports currently reuse the
  desktop/laptop layout rather than a custom-tuned in-between design (see Roadmap)
- ✅ Deployed on Vercel: https://projet-m3-ak.vercel.app/
- 🚧 Justice, Foreign Affairs, Agriculture, Culture ministry pages (currently placeholders)
- 🚧 Standalone Admin Dashboard page removed — footer link now points to Coming Soon; a Dashboard tab with
  the same KPI snapshot lives inside My Space
- 🚧 Tablet-specific layout pending
- 🚧 Cross-browser testing pending

---

## 👨‍💻 Author

**Hafid Karkouch**

- GitHub: https://github.com/hfdkr