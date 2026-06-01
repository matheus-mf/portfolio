# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Read Next.js docs before writing code

This project uses **Next.js 16.2.6**, which has breaking changes from earlier versions. Before writing any Next.js-specific code (routing, data fetching, middleware), read the embedded docs:

```
node_modules/next/dist/docs/02-pages/
```

## Commands

```bash
npm run dev      # dev server at localhost:3000 (Turbopack)
npm run build    # type-check + production build (must pass with zero errors)
npm run lint     # ESLint
npm run start    # serve the production build
```

There are no tests. `npm run build` is the verification step — it runs TypeScript before bundling.

## Architecture

**Framework:** Next.js 16 Pages Router (not App Router). Single page at `src/pages/index.tsx`.  
**UI:** Chakra UI v3 — uses `createSystem` API, not `extendTheme`.  
**i18n:** `react-i18next` initialized in `src/lib/i18n.ts`; translations bundled at build time from `public/locales/pt/common.json`.  
**Dark mode:** Always dark — `className="dark"` on `<html>` in `_document.tsx`; no toggle.

### Data flow

All content is static TypeScript — no API calls:

```
src/data/developer.ts      → profile (name, links, bio)
src/data/experiences.ts    → 4 work entries, reverse-chron
src/data/projects.ts       → 6 portfolio projects
src/data/skills.ts         → hardSkills[], softSkills[], techTags[]
src/data/stack.ts          → 6 StackCategory[], each with items[]
```

`src/pages/index.tsx` imports all data directly and passes it as props to section components. No `getStaticProps`, no server-side data fetching.

### Provider stack (`_app.tsx`)

```
ChakraProvider(value=system)
  └── I18nextProvider(i18n)
        └── <Component />
```

`system` is the Chakra v3 design system from `src/theme/index.ts`. i18n instance is from `src/lib/i18n.ts`.

### Component hierarchy

```
pages/index.tsx
├── components/layout/Navigation.tsx   (fixed, scroll-aware, IntersectionObserver)
├── components/sections/HeroSection.tsx
├── components/sections/AboutSection.tsx
├── components/sections/SkillsSection.tsx
├── components/sections/ExperienceSection.tsx
├── components/sections/ProjectsSection.tsx
├── components/sections/TechStackSection.tsx
├── components/sections/ContactSection.tsx
└── components/layout/Footer.tsx
```

Shared atoms in `components/ui/`: `SectionHeader`, `TechTag`, `SocialLink`, `SocialIcons` (inline SVGs for GitHub/LinkedIn/Instagram — lucide-react v1.17 removed brand icons), `StatusBadge`, `AvailableBadge`, `SkillBar`.

### Design tokens

All color values are OKLCH. Semantic tokens defined in `src/theme/index.ts`:

| Token | Value |
|---|---|
| `bg` | `oklch(0.072 0.009 265)` |
| `fg` | `oklch(0.93 0.005 265)` |
| `card` | `oklch(0.1 0.009 265)` |
| `card-secondary` | `oklch(0.14 0.01 265)` |
| `muted` | `oklch(0.52 0.008 265)` |
| `border` | `oklch(0.22 0.01 265 / 0.6)` |
| `accent` | `oklch(0.63 0.2 272)` |
| `accent-dim` | `oklch(0.63 0.2 272 / 0.15)` |
| `accent-border` | `oklch(0.63 0.2 272 / 0.35)` |

CSS custom properties for the same tokens are also in `src/styles/globals.css` (used by non-Chakra elements).

## Critical constraints

### Chakra v3 `ChakraProvider`

```tsx
// ✅ v3
<ChakraProvider value={system}>

// ❌ v2 (will not compile)
<ChakraProvider theme={customTheme}>
```

### i18n

`useTranslation` comes from `react-i18next` directly — not from `next-i18next` (v16 removed `appWithTranslation`/`serverSideTranslations`). All visible strings must go through `t('key')`. UI strings live in `public/locales/pt/common.json`; structured data (dates, URLs, numbers) stays in `src/data/`.

### Social icons

lucide-react v1.17 removed all brand icons. Use `GithubIcon`, `LinkedinIcon`, `InstagramIcon` from `src/components/ui/SocialIcons.tsx` (inline SVG components).

### Projects: no images

Project cards use CSS `gradient` strings as visual identity — never `<img>` or `<Image>`. The `gradient` field on each `Project` is a CSS `linear-gradient(...)` string applied as `style={{ background: project.gradient }}`.

### `Portfolio-extracted/`

This directory contains the original Vite + Tailwind + shadcn reference implementation and is excluded from TypeScript compilation (`tsconfig.json`). Do not modify or delete it — it is a design reference only.
