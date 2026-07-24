# Pramāṇa — Academic Certificate Verification System

A production-quality, frontend-only React + Tailwind CSS application for issuing and verifying academic certificates. Built for **MVGR College of Engineering (Autonomous)**.

---

## Overview

Pramāṇa (Sanskrit: प्रमाण — "proof, evidence, authority") is a secure, browser-based certificate management and verification portal that operates entirely client-side using LocalStorage and the Web Crypto API (SHA-256). Designed to resemble a real university ERP/government portal — professional, trustworthy, and institutional.

**Live Demo:** `http://localhost:5173/` (run `npm run dev`)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 (Vite 8) |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Icons | Lucide React |
| Animations | Framer Motion (minimal: fade, slide, hover) |
| Build | Vite + Rolldown |

**No backend required** — all persistence in `localStorage`, all hashing via `crypto.subtle.digest`.

---

## Project Architecture

```
pramana/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/          # 21 reusable UI components
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── CertificateCard.jsx
│   │   ├── CertificatePreview.jsx
│   │   ├── CertificateTable.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── EmptyState.jsx
│   │   ├── FilterDropdown.jsx
│   │   ├── HashDisplay.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageHeader.jsx
│   │   ├── QRCodePanel.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Select.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── StatusBadge.jsx
│   │   ├── StatusCard.jsx
│   │   ├── Timeline.jsx
│   │   ├── Toast.jsx
│   │   └── VerificationResultCard.jsx
│   ├── pages/               # 7 route pages
│   │   ├── CertificateDetails.jsx    # /certificate/:id
│   │   ├── CertificatePreviewPage.jsx # /preview
│   │   ├── Dashboard.jsx              # /
│   │   ├── IssueCertificate.jsx       # /issue
│   │   ├── IssuedCertificates.jsx     # /certificates
│   │   ├── Settings.jsx               # /settings
│   │   └── VerificationPortal.jsx     # /verify
│   ├── data/
│   │   └── mockData.js                # Sample certificates, stats, activity
│   ├── App.jsx                        # Router + layout shell
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Tailwind v4 + theme tokens
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Key Features

### 1. Dashboard (`/`)
- 4 statistic cards: Total Certificates, Verified Records, Today's Issuances, Integrity Score
- Recent Certificates table (top 5)
- Recent Activity timeline with icons

### 2. Issue Certificate (`/issue`)
- Professional form: Student Name, ID, Department, Degree, CGPA, Issue Date, Email, Certificate Type
- Live certificate preview (right side desktop / below mobile)
- Toast notifications on generate/reset
- Certificate ID format: `MVR-2026-XXXX`

### 3. Issued Certificates (`/certificates`)
- Searchable table (name, ID, cert ID)
- Filters: Department, Status
- Sort by Issue Date (descending)
- View action per row

### 4. Certificate Details (`/certificate/:id`)
- Full official certificate view
- SHA-256 hash display with copy-to-clipboard
- QR code panel (placeholder)
- Actions: Verify, Download PDF (UI), Copy Hash

### 5. Verification Portal (`/verify`)
- Public-facing search by Certificate ID or SHA-256 Hash
- Green "Verified Authentic" card with student details + hash integrity check
- Red "Verification Failed" card with possible reasons

### 6. Certificate Preview (`/preview`)
- Print-ready A4 layout
- University header, seal, signatory, QR
- SHA-256 hash, verification URL

### 7. Settings (`/settings`)
- Profile card (Principal)
- Notification toggles (Crimson-styled)
- Appearance (Dark Mode placeholder)
- About: version, security, institution

---

## Data Model (LocalStorage)

Key: `aster-certificates`

```javascript
{
  id: "MVR-2026-1234",
  studentName: "Arjun Mehta",
  studentId: "STU2024001",
  department: "Computer Science & Engineering",
  degree: "B.Tech",
  cgpa: "8.92",
  issueDate: "2026-07-24",
  email: "arjun.mehta@mvgrce.edu.in",
  certificateType: "Degree Certificate",
  status: "Issued",           // "Issued" | "Verified"
  hash: "a3f5b8c1d2e4...",    // SHA-256 hex
  qrValue: "MVR-2026-1234",
  createdAt: "2026-07-24T09:30:00.000Z"
}
```

---

## Crypto Utility

SHA-256 via Web Crypto API:

```javascript
// src/utils/hash.js (future extraction)
async function sha256Hex(data) {
  const encoder = new TextEncoder();
  const buffer = await crypto.subtle.digest("SHA-256", encoder.encode(data));
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}
```

---

## Design System

### Colors
| Role | Hex | Usage |
|------|-----|-------|
| Primary Dark | `#800000` | Navbar/header bg, cert headers, seal border |
| Crimson | `#991B1B` | Primary buttons, active nav, focus ring, cert ID text |
| Crimson Hover | `#7F1D1D` / `#B91C1C` | Button hover, link hover |
| Charcoal | `#1E293B` | Primary text, section titles |
| White | `#FFFFFF` | Cards, surfaces, backgrounds |
| Green | `#16A34A` | Verified badges, success, "Proven Placements" banner |
| Amber | `#D97706` | Warning stat card, pending badges |
| Border | `#E2E8F0` | Card borders, table dividers |

### Typography
- **Font:** Inter (300–800)
- **Scale:** `text-[10px]` → `text-xs` → `text-sm` → `text-base` → `text-lg` → `text-xl` → `text-2xl` → `text-3xl`

### Spacing
- 4px base unit (`gap-1` = 4px, `p-4` = 16px, `gap-6` = 24px)

### Components
- Cards: `bg-white rounded-xl border border-slate-200 shadow-sm`
- Buttons: `rounded-xl font-medium transition-all`
- Inputs: `border-slate-200 focus:border-[#991B1B] focus:ring-2 focus:ring-red-100`
- Badges: `rounded-full text-xs font-medium`

---

## Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Dashboard | Overview + stats |
| `/issue` | IssueCertificate | Create new certificate |
| `/certificates` | IssuedCertificates | Browse/search all |
| `/certificate/:id` | CertificateDetails | Full view + actions |
| `/verify` | VerificationPortal | Public verification |
| `/preview` | CertificatePreviewPage | Print layout |
| `/settings` | Settings | Profile, prefs, about |

---

## Getting Started

```bash
# Install
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 15+
- Edge 90+

Requires `crypto.subtle` (Web Crypto API) and `localStorage`.

---

## Security Notes

- **Client-side only** — no server trust model
- SHA-256 computed in-browser via `crypto.subtle.digest`
- Hash stored alongside record; verification recomputes and compares
- Tampering detectable: any field change → hash mismatch
- Not a substitute for PKI/digital signatures — demo/educational use

---

## Institution

**MVGR College of Engineering (Autonomous)**
- Established: 1997
- Location: Chintalavalasa, Vizianagaram, Andhra Pradesh
- Affiliation: JNTU-GV (Permanent)
- Accreditations: NAAC 'A' Grade, NBA (All B.Tech), UGC Autonomous (2015)
- EAPCET Code: **MVRG**
- Principal: **Dr. Y M C Shekhar**
- Email: `principal.mvgr@gmail.com`
- Website: `https://mvgrce.com`

---

## License

MIT — Educational / demonstration purposes.