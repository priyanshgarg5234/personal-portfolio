# Priyansh Garg— Developer Portfolio

A modern, fully responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS**

---

## ✨ Features

- **Dark / Light mode** — persisted in `localStorage`, respects system preference
- **Smooth-scroll navigation** with active-link highlighting via scroll-spy
- **Animated sections** — staggered entrance animations powered by Framer Motion
- **Filterable project grid** — filter by category with animated transitions
- **Contact form** — with live per-field validation and submit feedback
- **Fully accessible** — semantic HTML, ARIA labels, keyboard navigation, skip link
- **Mobile-first** responsive layout
- **Performance-optimised** — lazy viewport animations, passive scroll listeners

---

## 📁 File Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component
    ├── index.css         # Tailwind directives + global styles
    ├── hooks/
    │   ├── useDarkMode.js    # Dark mode state + localStorage
    │   └── useScrollSpy.js   # Active nav-link tracking
    ├── data/
    │   └── portfolio.js      # ← Edit this to personalise content
    ├── components/
    │   ├── Navbar.jsx
    │   ├── AnimatedSection.jsx
    │   ├── SectionHeading.jsx
    │   └── Badge.jsx
    └── sections/
        ├── Hero.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9 (or pnpm / yarn)

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output is in the `dist/` folder — deploy to Vercel, Netlify, or any static host.

### 4. Preview production build locally

```bash
npm run preview
```

---

## 🎨 Personalisation

All content lives in **`src/data/portfolio.js`** — edit that single file to update:

| Export | What it controls |
|---|---|
| `personal` | Name, title, tagline, bio, location, email |
| `skills` | Skill categories and tech items |
| `projects` | Project cards (title, description, tech, links) |
| `experience` | Work history and education timeline |
| `socialLinks` | Footer/hero social media links |
| `navLinks` | Navbar link labels and hrefs |

### Changing the accent colour

Open `tailwind.config.js` and update:
```js
colors: {
  accent: {
    DEFAULT: '#00FF88',  // ← change this
    dark: '#00CC6A',
    muted: '#00FF8820',
  },
```

### Fonts

Fonts are loaded via Google Fonts in `index.html`. The config in `tailwind.config.js`:
```js
fontFamily: {
  display: ['"Playfair Display"', ...],  // headings
  body:    ['"DM Sans"', ...],           // body text
  mono:    ['"JetBrains Mono"', ...],    // labels & code
}
```

---

## 🔌 Connecting the contact form

The contact form simulates a network request by default. To make it real, replace the `await new Promise(...)` line in `src/sections/Contact.jsx` with a real API call:

```js
// Example: Formspree
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(fields),
})
if (!res.ok) throw new Error('Failed')
```

---

## 🧰 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Utility-first styling |
| Framer Motion | 11 | Animations |
| React Icons | 5 | Icon set |

---

## 📄 License

MIT — use freely for personal and commercial projects.
