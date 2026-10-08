# Pinecrest Golf Club — Base44 Dev Environment

## Stack
- **Framework:** Vite 5 + React 18 (plain CSS, no UI libraries)
- **Runtime:** Node 22 (via `node:22-slim` in Docker)
- **Fonts:** Playfair Display (serif headings) + Montserrat (sans UI) loaded from Google Fonts in `index.html`

## Running the app
```
docker compose -f docker-compose.base44.yml up -d --build
```
- Web entry point: **http://localhost:3000**
- Vite dev server with HMR; bind-mounted source so edits hot-reload without rebuilds.
- `node_modules` lives in a named Docker volume (not bind-mounted) to avoid host/container platform conflicts.

## Project structure
- `src/App.jsx` — composes all sections in order
- `src/components/` — one `.jsx` + one `.css` per section:
  - `Header` (sticky nav + mobile menu), `Hero`, `About`, `Features` (3 cards),
  - `Heritage` (6-item dark-green grid), `Experience` (split image/text),
  - `MembershipCTA`, `Contact` (validated form), `Footer` (newsletter)
- `src/components/Reveal.jsx` — IntersectionObserver scroll-reveal wrapper (content stays visible if JS fails)
- `src/components/SmartImage.jsx` — image with forest-green gradient fallback on load error
- `src/components/icons.jsx` — inline SVG icon set (pine tree, arrows, heritage grid icons)
- `src/index.css` — design tokens (colors, fonts, spacing), global resets, button system, reveal animation

## Design system
- Colors defined as CSS variables in `:root` (see `src/index.css`)
- Forest green `#0f3026` dominates header/heritage/footer; cream `#f4f0e6`/ivory `#faf8f1` for content sections; gold `#b79a5a` as accent only
- Single-page site with anchor navigation (`#home`, `#about`, `#course`, `#membership`, `#experience`, `#contact`)

## Images
- All photos served from Pexels CDN (`images.pexels.com`) — verified reachable
- `SmartImage` component provides a gradient fallback if any image fails to load

## Notes
- Contact form is frontend-only (no backend/API); validates and shows success state
- Newsletter in footer validates email client-side
- `prefers-reduced-motion` disables scroll-reveal and scroll-bounce animations
