# Matheus Moreira Ferreira

Personal portfolio of **Matheus Moreira Ferreira** — full-stack developer with 7+ years building products for national and international companies.

**[matheusmf.dev](https://matheusmf.dev)** · [GitHub](https://github.com/matheus-mf) · [LinkedIn](https://www.linkedin.com/in/matheus-m-ferreira/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (Pages Router) |
| UI | Chakra UI v3 (`createSystem` API) |
| Language | TypeScript 5 |
| Runtime | React 19 |
| Animation | Motion 12 |
| i18n | react-i18next 17 |
| Email | Resend |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

## Features

- Always-dark design with OKLCH color tokens
- PT-BR / EN internationalization — all UI strings via `t('key')`
- 7 sections: Hero, About, Skills, Experience, Projects, Tech Stack, Contact
- Static content — no API calls at runtime; all data in TypeScript files
- Scroll-aware fixed navigation with IntersectionObserver
- Responsive layout

## Project Structure

```
src/
├── data/           # All content (TypeScript, edit to update portfolio)
├── pages/          # index.tsx — single page entry point
├── components/
│   ├── layout/     # Navigation, Footer
│   ├── sections/   # One component per page section
│   └── ui/         # Shared atoms (SectionHeader, TechTag, SkillBar, …)
├── theme/          # Chakra v3 design system (createSystem + semantic tokens)
├── lib/            # i18n initialization
└── styles/         # globals.css

public/
└── locales/
    ├── pt/         # Portuguese UI strings (default)
    └── en/         # English UI strings
```

## Getting Started

**Prerequisites:** Node.js 20+

```bash
npm install
cp .example.env .env.local   # add your Resend API key
npm run dev                  # http://localhost:3000
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Dev server with Turbopack at `localhost:3000` |
| `npm run build` | Type-check + production build (must pass with zero errors) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

> There are no tests. `npm run build` is the verification step.

## Editing Content

All portfolio content lives in `src/data/` — no CMS, no API.

| File | Controls |
|---|---|
| `src/data/developer.ts` | Name, email, social links, `available` flag |
| `src/data/experiences.ts` | Work history (company, role, dates, tech) |
| `src/data/projects.ts` | Portfolio projects (tech, gradient, links) |
| `src/data/skills.ts` | Skill levels (0–100), tech tags |
| `src/data/stack.ts` | Tech stack grid categories and items |
| `public/locales/pt/` | All UI strings in Portuguese |
| `public/locales/en/` | All UI strings in English |

Structured data (dates, URLs, numbers) stays in `src/data/`. Human-readable strings go in `public/locales/`.

## Environment Variables

Copy `.example.env` to `.env.local` and fill in:

```env
RESEND_API_KEY=re_your_api_key   # required for the contact form
```

## Deploy

```bash
npm run build
npm run start
```

The build fails on any TypeScript error — fix all type errors before deploying.
