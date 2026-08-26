# 🇲🇦 Projet-M3AK

A modern digital identity platform for Morocco, currently under development. This project focuses on creating a secure, user-friendly, and responsive platform for managing digital identity and public services.

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

> More screenshots (Marketplace, Emergency Hub, Admin Dashboard) coming soon — see [Known Issues](#-known-issues).

---

## 🚀 Tech Stack

- HTML5
- Tailwind CSS v4 *(via CDN — build step planned, see Roadmap)*
- JavaScript (vanilla, no framework)
- OpenStreetMap / Leaflet *(live maps & geolocation)*

---

## 📂 Project Structure

```text
Projet-M3AK/
│
├── assets/
│   ├── image-login/
│   ├── image-signUp/
│   ├── image-new-password/
│   ├── images/
│   ├── marketplace-image/
│   ├── emergence-image/
│   ├── dashboard-assets/
│   └── screenshots/
│
├── pages/
│   ├── auth/
│   │   ├── login.html
│   │   ├── signup.html
│   │   ├── forgot-password.html
│   │   └── new-password.html
│   │
│   ├── app/
│   │   ├── overview.html
│   │   ├── service.html          # Services Directory (12 ministry categories)
│   │   ├── transport.html
│   │   ├── marketplace.html
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
│   │   └── coming-soon.html      # Placeholder for not-yet-built sections
│   │
│   ├── admin-pages/
│   │   ├── dashboard.html        # Admin Dashboard
│   │   └── compte.html           # Citizen Account / Settings page
│   │
│   └── js/
│       ├── session.js
│       ├── theme.js
│       ├── onboarding.js
│       ├── login.js
│       ├── signup.js
│       ├── forgot-password.js
│       └── new-password.js
│
├── index.html
├── .gitignore
└── README.md
```

---

## ✨ Features

- Modern and responsive UI, light/dark mode on every page (`theme.js`, shared across tabs)
- Instagram-style collapsible sidebar on every app page (Overview, Marketplace, Transport, Housing, Jobs,
  Education, Payments, Registry, Interior, Finance, Health): icons only by default, hovering the sidebar
  reveals every label at once, active page always visible on its own icon color
- Dashboard interface with live transport status
- Digital identity management (UI) — CIN card, personal info, security, preferences in Account/Settings
- Public service directory (12 ministry categories: Housing, Jobs, Education, Healthcare, Registry, Interior,
  Finance, Justice, Foreign Affairs, Agriculture, Culture, Tourism — first 7 are real pages, the rest fall
  back to the shared Coming Soon placeholder)
- Marketplace with search, filters, sorting and wishlist
- Payments hub with wallet balance, recent payments, and bill-payment categories
- Emergency Hub: hold-to-trigger SOS, quick dial (Police 19 / Ambulance 15 / Gendarmerie 177), live map, medical ID
- Admin Dashboard: KPIs, engagement trends, service usage
- Session handling shared across pages via `localStorage` (`session.js`), with a real auth guard
  (`data-require-auth`) protecting every app/admin page
- Clean and accessible design (ARIA attributes, keyboard-focus reveals sidebar labels too)

---

## 📋 Roadmap

### ✅ Project Setup

- [x] Project Planning
- [x] UI/UX Design
- [x] Project Structure

### 🚧 Frontend Development

#### Authentication

- [x] Landing Page
- [x] Sign In Page (UI + validation, wired to session)
- [x] Sign Up Page (UI + validation, wired to session)
- [x] Forgot Password Page
- [x] New Password Page (live requirement checks + reset flow)

#### Dashboard / App

- [x] Overview Page
- [x] Services Page
- [x] Transport Page
- [x] Marketplace Page
- [x] Health / Find a Specialist Page
- [x] Emergency Hub Page
- [x] Admin Dashboard
- [x] Citizen Account / Settings Page (Personal Info, Digital ID, Security, Preferences)
- [x] Help Center Page (shared across the app)
- [x] Coming Soon placeholder (for sections without a dedicated page yet)
- [x] Housing Page
- [x] Jobs Page
- [x] Education Page
- [x] Payments Page (wallet balance + bill payment categories)
- [x] Civil Registry Page (birth/marriage/residence certificates, CNIE renewal)
- [x] Interior Page (passports, residence permits, CNIE)
- [x] Finance Page (income tax, VAT, customs)
- [ ] Justice, Foreign Affairs, Agriculture, Culture, Tourism pages (still on Coming Soon)

### 📱 Responsive Design

- [x] Mobile
- [ ] Tablet
- [x] Desktop

### 🧪 Testing

- [ ] Cross-browser Testing
- [ ] Automated broken-link check (GitHub Actions)
- [ ] Performance Optimization

### 🚀 Deployment

- [ ] Switch internal links to relative paths (required for GitHub Pages)
- [ ] GitHub Pages

---

## 🐛 Known Issues

Tracking honestly so nothing is hidden behind a green checklist. The connectivity pass fixed the items below —
remaining items are genuinely open:

**Fixed:**

- ~~Internal navigation pointed at `/pages/dashboard/...` instead of `/pages/app/...`.~~
- ~~`login.js` called `window.M3akAuth`, but `session.js` exposed `window.M3ak`.~~
- ~~`new-password.js` was empty and not loaded on `new-password.html`.~~
- ~~`onboarding.js` redirected to `./pages/overview.htm` (wrong extension/path).~~
- ~~Inconsistent filenames (`service.html`/`services.html`, `emergence.html`/`emergency.html`).~~
- ~~`signup.html` had no JS attached.~~
- ~~No session guard — app pages were reachable without signing in, and no page cleared the session on logout.~~
- ~~`overview.html` and `marketplace.html` used `dark:` classes everywhere but never defined the dark color
  tokens or `@custom-variant dark` — dark mode toggled but barely changed anything visually.~~
- ~~`overview.html`'s inline script referenced a `#openMap` button that didn't exist, throwing on load and
  silently breaking Appointments/Payments rendering.~~
- ~~`marketplace.html`'s entire sidebar had unclosed `<a>` tags (missing `>` after `class="..."`), which
  likely broke the icon `<img>` elements inside them.~~
- ~~`transport.html`'s Emergency Support button referenced a missing icon asset; `marketplace.html`'s used an
  unrelated icon; both now use a consistent alert-triangle icon like every other page.~~
- ~~`marketplace.html` had a redundant "Emergency" link in its nav list duplicating the "Emergency Support"
  button below it.~~
- ~~`new-password.html` used a system-font fallback stack instead of the project's two fonts; `emergence.html`'s
  clock used `font-mono`. Project now uses only Plus Jakarta Sans / Hanken Grotesk throughout.~~
- ~~`health.html` had no sidebar and no way to open one on mobile (no hamburger button) — now matches every
  other app page.~~

**Still open:**

- Absolute paths (`/pages/...`) will 404 once deployed on GitHub Pages (served under a subpath) — needs a build
  step or relative-path rewrite before that deployment target.
- Justice, Foreign Affairs, Agriculture, Culture, and Tourism are represented by the shared Coming Soon
  placeholder, not real pages.
- A number of `.png` icons referenced across `transport.html`, `health.html`, and admin `dashboard.html` don't
  exist in `assets/` — pre-existing gaps, not something introduced by recent work.
- Auth is frontend-only (`localStorage`), by design for this stage — no real backend/API yet.

---

## 📌 Current Progress

- ✅ Project setup completed
- ✅ Landing page completed
- ✅ Auth pages (login, signup, forgot password, new password) — UI complete, fully wired to the shared session
- ✅ Overview, Services, Transport, Marketplace, Health, Housing, Jobs, Education, Payments, Registry, Interior,
  Finance, Emergency Hub, Admin Dashboard, Account/Settings, Help Center — UI complete and cross-linked
- ✅ Internal navigation, auth JS, and session guard fixed across the app
- ✅ Dark mode verified complete on every page (two pages were silently broken, now fixed)
- ✅ Instagram-style collapsible sidebar rolled out to all 11 app pages that have one
- 🚧 Justice, Foreign Affairs, Agriculture, Culture, Tourism ministry pages (currently placeholders)
- 🚧 Tablet breakpoint and cross-browser testing pending

---

## 👨‍💻 Author

**Hafid Karkouch**

- GitHub: https://github.com/hfdkr