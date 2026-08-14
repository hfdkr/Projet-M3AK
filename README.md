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
│   │   └── new-password.html
│   │
│   ├── app/
│   │   ├── overview.html
│   │   ├── service.html
│   │   ├── transport.html
│   │   ├── marketplace.html
│   │   ├── emergence.html
│   │   └── dashboard.html        # Admin Dashboard
│   │
│   └── js/
│       ├── session.js
│       ├── onboarding.js
│       ├── login.js
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
- [x] Sign In Page (UI + validation)
- [x] Sign Up Page (UI only — no JS wired yet)
- [ ] Forgot Password Page
- [x] New Password Page (UI only — `new-password.js` is empty)

#### Dashboard / App

- [x] Overview Page
- [x] Services Page
- [x] Transport Page
- [x] Marketplace Page
- [x] Emergency Hub Page
- [x] Admin Dashboard
- [ ] Housing Page
- [ ] Jobs Page
- [ ] Education Page
- [ ] Healthcare Page
- [ ] Payments Page
- [ ] User Profile Page
- [ ] Digital Identity Page
- [ ] Settings Page

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

Tracking honestly so nothing is hidden behind a green checklist:

- **Internal navigation is broken.** Links across `pages/app/*.html` point to `/pages/dashboard/...`, but the real folder is `/pages/app/...`.
- **Login can't complete.** `login.js` calls `window.M3akAuth`, but `session.js` exposes `window.M3ak`. Needs a consistent namespace.
- **`new-password.js` is empty** and not loaded on `new-password.html` — no validation or submit logic yet.
- **`onboarding.js`** redirects to `./pages/overview.htm` (wrong extension/path).
- A few links use inconsistent filenames (`service.html`/`services.html`, `emergence.html`/`emergency.html`, `home.html`).
- Absolute paths (`/pages/...`) will 404 once deployed on GitHub Pages (served under a subpath).
- `signup.html` has no JS attached yet.

---

## 📌 Current Progress

- ✅ Project setup completed
- ✅ Landing page completed
- ✅ Auth pages (login, signup, new-password) — UI complete, JS partially wired (see Known Issues)
- ✅ Dashboard Overview, Services, Transport, Marketplace, Emergency Hub, Admin Dashboard — UI complete
- 🚧 Fixing internal navigation & auth JS (top priority)
- 🚧 Remaining dashboard sections (Housing, Jobs, Education, Healthcare, Payments, Profile, Digital ID, Settings)
- 🚧 Tablet breakpoint and cross-browser testing pending

---

## 👨‍💻 Author

**Hafid Karkouch**

- GitHub: https://github.com/hfdkr