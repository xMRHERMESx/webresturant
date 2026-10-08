# Noir Epicurean — Premium Restaurant Website

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS v3 (custom design tokens in `tailwind.config.js`)
- lucide-react for minimal line icons
- Google Fonts: Cormorant Garamond (serif) + Inter (sans-serif)

## Running
```
docker compose -f docker-compose.base44.yml up -d --build
```
The Vite dev server runs on port 5173 inside the container, mapped to host port 3000.
Dependencies install on container startup via `npm install` (no lockfile — first boot installs).

## Architecture
- `src/data/content.ts` — all site content (dishes, menu items, testimonials, etc.)
- `src/components/` — reusable section components
- `src/components/ui/` — shared primitives (Button, SectionHeader)
- `src/hooks/useScrollReveal.ts` — IntersectionObserver-based scroll reveal
- `src/index.css` — global styles, CSS variables, custom utilities

## Design System
Colors, fonts, and spacing tokens live in `tailwind.config.js` under `theme.extend`.
The palette is dark charcoal (#0A0A09) with warm gold accents (#D98B3A / #E8B56B).
