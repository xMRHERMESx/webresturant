# Lumiere — Premium Restaurant Website

## Overview
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.
Single-page immersive restaurant website for the brand "Lumiere".

## Development
- Run: `docker compose -f docker-compose.base44.yml up -d --build`
- Preview: http://localhost:3000
- Dev server: Next.js dev with hot reload, bound to 0.0.0.0:3000

## Architecture
- `app/` — Next.js App Router (layout.tsx, page.tsx, globals.css)
- `components/` — React client components (one per page section)
- `lib/data.ts` — All content data (menu, locations, ingredients, images)
- Images: Unsplash CDN (configured in next.config.mjs remotePatterns)

## Key Files
- `tailwind.config.ts` — Custom color palette, fonts, font sizes, animations
- `app/layout.tsx` — Cormorant Garamond + Inter fonts, SEO metadata, Schema.org
- `app/globals.css` — Organic shape utilities, grain texture, reduced-motion support

## Fonts
- Display/Headings: Cormorant Garamond (Google Fonts via next/font)
- Body/UI: Inter (Google Fonts via next/font)

## No external secrets required
The app uses only Unsplash CDN images and local placeholder data. No API keys or database needed.
