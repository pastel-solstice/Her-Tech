# ⚗ HerTech — Smart Interactive Periodic Table

> **Free, multilingual chemistry education for Class 9–12 students in Odisha and beyond.**  
> Built by Team HerTech Trio · Smart Odisha Hackathon 2025

[![Live Demo](https://img.shields.io/badge/Live_Demo-hertech.vercel.app-6366f1?style=flat-square)](https://hertech.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Languages](https://img.shields.io/badge/Languages-8_(incl._Odia_%26_Arabic)-orange?style=flat-square)](#multilingual-support)

---

## The Problem

Rural Odisha has over 5 million Class 9–12 students preparing for CBSE/state board exams and competitive entrances like JEE and NEET. Most lack access to:
- Digital chemistry tools in their mother tongue (Odia)
- Interactive visualizations beyond static NCERT diagrams
- AI tutors that answer questions in real time

HerTech solves all three — in a single file that works offline for core features.

---

## Features

### 🗂 Core Learning Tools
| Feature | Description |
|--------|-------------|
| **Interactive Periodic Table** | All 118 elements, color-coded by category, filterable by block/phase/group |
| **3D Atom Visualizer** | Three.js WebGL renderer with controllable electron shells |
| **Bohr Model** | Animated canvas-based Bohr diagram for every element |
| **Element Modal** | Click any element → full data: config, oxidation states, uses, discovery, fun facts |
| **Heatmaps** | Visualize atomic radius, electronegativity, ionization energy, density, and 4 more across the table |

### 📚 NCERT Aligned Content
| Feature | Description |
|--------|-------------|
| **NCERT Chapters** | Class 9–12 curriculum: atomic structure, periodicity, bonding, organic chemistry |
| **Reactions** | Animated reaction visualizer with step-by-step explanations |
| **Organic Chemistry** | Functional groups, IUPAC naming, reaction mechanisms |
| **Mnemonics** | Audio-playable memory aids for groups and series |
| **Ions** | Cation/anion reference with charges and common compounds |

### 🔧 Chemistry Tools
| Tool | Description |
|------|-------------|
| **Molar Mass Calculator** | Parses any formula (e.g. `H2SO4`) → breakdown by element + total |
| **Equation Balancer** | Gaussian elimination method — balances unbalanced equations automatically |
| **Solubility Table** | Interactive solubility rules reference |
| **Unit Converter** | Chemistry units: energy, pressure, temperature, concentration |
| **Virtual Lab** | Drag-and-drop chemical reactions with visual feedback |

### 🤖 AI Tutor (Claude API)
- Ask any chemistry question in natural language
- Odia and Hindi voice input via Web Speech API
- Quick prompts: uses, hazards, electron config, industry applications
- Streaming responses with typing cursor
- Serverless proxy — API key never exposed to browser

### 🏆 Challenge Mode
- MCQ quiz across all NCERT topics
- Fisher-Yates shuffle for fair randomization
- 5 difficulty levels
- `localStorage` score persistence across sessions
- WhatsApp score sharing

### 🌍 Multilingual Support
8 languages with full UI translation:

| Language | Code | Script | RTL |
|----------|------|--------|-----|
| English | `en` | Latin | No |
| **Odia** | `or` | Odia | No |
| Hindi | `hi` | Devanagari | No |
| Arabic | `ar` | Arabic | **Yes** |
| French | `fr` | Latin | No |
| German | `de` | Latin | No |
| Japanese | `ja` | CJK | No |
| Chinese | `zh` | CJK | No |

RTL support includes: mirrored layout, reversed navtabs, flipped sidebar borders, Arabic font stack.

### 🎤 Presenter Mode
Built-in presentation overlay (Shift+P) with:
- 3-step demo script with timing cues
- Live countdown timer
- Keyboard navigation between slides

---

## Tech Stack

```
Frontend          Vanilla HTML5 / CSS3 / ES6 JavaScript
3D Rendering      Three.js r128 (WebGL)
AI               Anthropic Claude API (claude-sonnet-4-6) via serverless proxy
Voice Input       Web Speech API (SpeechRecognition)
Equation Math     Gaussian elimination (custom implementation)
Persistence       localStorage (scores, language preference)
Deployment        Vercel (static + serverless function)
Fonts             Google Fonts (Inter, Syne, Space Mono, Noto Sans family)
```

---

## Project Structure

```
hertech/
├── index.html              # App shell + HTML structure
├── css/
│   └── styles.css          # Full design system (tokens, dark mode, RTL, responsive)
├── js/
│   ├── data/
│   │   └── elements.js     # 118 elements dataset + periodic table renderer
│   ├── atom.js             # Three.js 3D viewer + Bohr model canvas
│   ├── reactions.js        # Reactions, organic chemistry, NCERT modules
│   ├── tools.js            # Molar mass, equation balancer, solubility, virtual lab
│   ├── ai.js               # Claude API chat + AI reaction predictor
│   ├── quiz.js             # Challenge mode, Fisher-Yates, score persistence
│   ├── i18n.js             # 8-language translation system + RTL
│   ├── ui.js               # Particles, theme, filters, search, heatmaps
│   └── presenter.js        # Presenter mode overlay
├── api/
│   └── chat.js             # Vercel serverless proxy (keeps API key server-side)
├── vercel.json             # Vercel routing + security headers
├── .env.example            # Environment variable template
└── .gitignore
```

---

## Getting Started

### Local Development

```bash
# Clone the repo
git clone https://github.com/your-username/hertech.git
cd hertech

# No build step needed — open directly in browser
open index.html
# or
npx serve .
```

> **Note:** AI features require the Vercel proxy to be running. Core features (periodic table, 3D atom, quiz, NCERT content) work fully without it.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set your API key in Vercel dashboard:
# Settings → Environment Variables → ANTHROPIC_API_KEY
```

Or click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/hertech)

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

```env
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

**Never commit your API key.** The `.gitignore` excludes `.env.local` automatically.

---

## Security

| Concern | Solution |
|---------|---------|
| API key exposure | Serverless proxy in `api/chat.js` — key stays server-side |
| XSS | No `innerHTML` with user input; element data is static |
| CSP headers | Set via `vercel.json` headers config |
| Rate limiting | Add via Vercel middleware or Upstash Redis (future) |

---

## Roadmap

- [ ] PWA / Service Worker for full offline support
- [ ] Teacher dashboard: assign quizzes, track class progress
- [ ] React/Next.js migration for maintainability
- [ ] Supabase backend for user accounts and progress sync
- [ ] Full Odia-medium NCERT chemistry curriculum (currently: UI + element names)
- [ ] LMS integration (Google Classroom, DIKSHA)
- [ ] Mobile app (React Native)

---

## Team

**HerTech Trio** — Smart Odisha Hackathon 2025

| Member | Role |
|--------|------|
| Ayushi Mandal | Frontend & AI integration |
| Pratikshya Mahapatra | Chemistry content & NCERT alignment |
| Pratyasha Dehury | UI/UX & multilingual system |

---

## Why HerTech?

- **Her** — built by women in STEM, for students who need it most
- **Tech** — modern web technology, zero cost to access
- **Trio** — three students, one mission: make chemistry click

> *"Meet Ananya, Class 11, Kandhamal district. NEET exam: March 15. No chemistry lab in her school. She downloads one file — this file — for free."*

---

## License

MIT © 2025 HerTech Trio. Free for students and educators worldwide.

---

## Acknowledgements

- [Anthropic](https://anthropic.com) — Claude API
- [Three.js](https://threejs.org) — 3D atom visualization
- [NCERT](https://ncert.nic.in) — curriculum reference
- [Google Fonts](https://fonts.google.com) — multilingual typography
- [Royal Society of Chemistry](https://rsc.org) — element data reference
