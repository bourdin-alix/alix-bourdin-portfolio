# CLAUDE.md — Alix Bourdin Portfolio

## Profile

Alix Bourdin — Fullstack Developer, Currently Freelancing  
Stack: React, Node.js, TypeScript, PostgreSQL, Python, FastAPI  
Experience: Petite Marelle (2021-2022) · Upfund (2022-2023) · Eteos (2023-2024)  
Education: BTS SIO @ IRIS (2019-2021) · Bachelor Epitech (2021-2022) · Master 2 Epitech (2022-2024)  
Hobbies: Football, Travel, Video Games, Coffee  
Contact: bourdinalix@gmail.com · linkedin.com/in/alixbourdin · github.com/bourdin-alix

## Design System

Style: Editorial / Magazine — opinionated, not minimal-boring.  
Accent: `#7c3aed` · Background: `#fafaf9` · Text: `#1a1a1a`  
Fonts: Syne (headings), DM Sans (body)  
Patterns: left-bar accents (`border-l-4` violet), asymmetric layouts, horizontal timelines  
No rounded-everything, no card-soup — whitespace and typography do the heavy lifting.

## Projects

| Name                  | Status         | Description                              |
| --------------------- | -------------- | ---------------------------------------- |
| Stan Delivery         | In development | Delivery platform                        |
| Wingstop Landing Page | In production  | Client landing page                      |
| Risk Management SaaS  | In development | Binance strategies + Streamlit dashboard |

## Easter Eggs

**About — "cafés":** The word is clickable. 5 clicks → sentence breaks apart (CSS animation) → reveals "Je déteste le café !!!"

**Quiz:** 5 questions, reference to Emilien (Les 12 Coups de Midi — French TV), Q1 triggers a coffee animation.

## Deployment

Hosted on Netlify — production site is live. Any change merged to `main` deploys automatically.

## Rules

- No filler content — use `[PLACEHOLDER: ...]` for anything not written yet. Never lorem ipsum.
- Tone: professional with personality and dry humor. No corporate fluff.
- Mobile-first, fully responsive (375px / 768px / 1280px).
- Stack: React 18 + Vite 6 + Tailwind CSS 3 + TypeScript. All components in `.tsx`, data files in `src/data/*.ts`.
- No new dependencies without a clear reason.

## Roadmap

Always read `roadmap.md` before starting any task — it's the source of truth for what needs to be done.

## Git Workflow

- **Never push directly to `main`** — Netlify deploys automatically on every merge, so `main` = production.
- Every feature or fix gets its own branch: `feat/feature-name`, `fix/bug-name`.
- Merge via PR only (even solo — keeps history clean and deployments intentional).
- **Before starting any task**, always propose creating the appropriate branch first.
