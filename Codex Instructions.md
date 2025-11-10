# Codex Instructions — Steven Baird Personal Site

## Project Overview

This repository powers **Steven Baird’s personal website**, showcasing professional experience and projects. The site aims for clarity, speed, and strong developer branding.

- **Deploy**: Vercel
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Packages**: pnpm
- **Styling**: Tailwind CSS
- **Analytics**: Vercel Analytics + Speed Insights
- **Theme**: Custom ThemeProvider (light/dark/system)
- **Repo host**: GitHub

---

## Goals

- Clean, performant, modern portfolio.
- Spotlight projects and impact (short, scannable content + links).
- Demonstrate technical depth through well-presented showcases.
- Provide a foundation for later content (blog/MDX) if needed.

---

## Current Repo Snapshot (authoritative for Codex)

These files **exist now** (do not invent or relocate without instruction):

- `src/app/layout.tsx` — root layout (ThemeProvider, Navbar, page container, Analytics, Speed Insights)
- `src/app/globals.css` — global styles (Tailwind)
- `src/components/theme-provider.tsx` — Theme provider (light/dark/system)
- `src/components/site/navbar.tsx` — Site navbar

---

## Development Conventions

- Prefer **React Server Components**; keep Client Components minimal (theme, interactivity).
- **TypeScript-first**: explicit, narrow props; no `any`.
- **Tailwind** for layout/styling; readable utility grouping.
- **A11y**: semantic HTML, focus states, keyboard navigation, alt text/aria.
- Keep to **Next.js App Router** standards (route folders, `page.tsx`, `layout.tsx`).
- Don’t introduce new libraries or restructure folders unless asked.

---

## SEO & Metadata

Use Next.js **Metadata API** in `src/app/layout.tsx` for defaults. When requested, include:

- `metadataBase`
- `openGraph` (title, description, url, images)
- `twitter` (card, site, creator)
- `robots`
- `alternates` (canonical)

Add JSON-LD helpers in `src/lib/seo.ts` when asked (e.g., `Person`, `WebSite`). Inject via a safe `<script type="application/ld+json">`.

---

## Commands

Development: pnpm dev
