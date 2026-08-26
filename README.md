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
│   │   ├── service.html
│   │   ├── transport.html
│   │   ├── marketplace.html
│   │   ├── health.html
│   │   ├── emergence.html
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

- Modern and responsive UI
- Dashboard interface with live transport status
- Digital identity management (UI)
- Public service directory (12 government services)
- Marketplace with search, filters, sorting and wishlist
- Emergency Hub: hold-to-trigger SOS, quick dial (Police 19 / Ambulance 15 / Gendarmerie 177), live map, medical ID
- Admin Dashboard: KPIs, engagement trends, service usage
- Session handling shared across pages via `localStorage` (`session.js`)
- Clean and accessible design (ARIA attributes on interactive elements)

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
- [x] Coming Soon placeholder (Housing, Jobs, Education, Payments, and other not-yet-built sections)
- [ ] Housing Page
- [ ] Jobs Page
- [ ] Education Page
- [ ] Payments Page

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

**Still open:**

- Absolute paths (`/pages/...`) will 404 once deployed on GitHub Pages (served under a subpath) — needs a build
  step or relative-path rewrite before that deployment target.
- Housing, Jobs, Education, and Payments are represented by the shared Coming Soon placeholder, not real pages.
- Auth is frontend-only (`localStorage`), by design for this stage — no real backend/API yet.

---

## 📌 Current Progress

- ✅ Project setup completed
- ✅ Landing page completed
- ✅ Auth pages (login, signup, forgot password, new password) — UI complete, fully wired to the shared session
- ✅ Overview, Services, Transport, Marketplace, Health, Emergency Hub, Admin Dashboard, Account/Settings — UI
  complete and cross-linked
- ✅ Internal navigation, auth JS, and session guard fixed across the app
- 🚧 Housing, Jobs, Education, Payments sections (currently placeholders)
- 🚧 Tablet breakpoint and cross-browser testing pending

---

## 👨‍💻 Author

**Hafid Karkouch**

- GitHub: https://github.com/hfdkr