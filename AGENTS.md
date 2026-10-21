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

## Hero film (scroll-scrubbed video)
- `src/components/Hero.jsx` renders a scroll track (`--hero-scrub`, default 640vh,
  440vh under 767px) wrapping a `position: sticky` viewport that holds the film.
  Scroll position alone drives `video.currentTime`; the film is never played.
- `src/hooks/useScrollScrubVideo.js` — scrub engine: passive scroll listener →
  one `requestAnimationFrame` → seek. Progress is written directly onto nodes via
  the `onProgress` callback, so scrubbing causes zero React re-renders. It also
  owns readiness (`loading`/`ready`/`error`, 10s timeout) and degrades to the
  still hero image on failure. `src/hooks/usePrefersReducedMotion.js` disables the
  whole experience under `prefers-reduced-motion`.
- Media lives in `public/media/`, re-encoded from the supplied footage with
  ffmpeg (run in a throwaway `debian:12-slim` container — ffmpeg is NOT installed
  in the sandbox or in the `web` image):
  ```
  ffmpeg -i source.mp4 -c:v libx264 -preset slow -crf 21 -pix_fmt yuv420p \
    -g 6 -keyint_min 6 -sc_threshold 0 -x264-params ref=3:bframes=0 \
    -c:a copy -movflags +faststart hero-720.mp4          # 1280x720, ~5.2MB
  ffmpeg -i source.mp4 -vf scale=960:540 ... -crf 24 ... hero-540.mp4   # ~2.6MB
  ```
  Why it matters: the supplied source was 1280x720 @ ~9Mbps with only **2**
  keyframes in 10s and `moov` at the end of the file. Seeking such a file makes
  the decoder walk from the start on every scrub. The re-encodes keep the same
  footage/framing but put a keyframe every 6 frames (41 total) and move metadata
  to the front. `hero-540.mp4` is served to <=900px viewports and to clients with
  `saveData`; exactly one file is downloaded per visit.
- `body` uses `overflow-x: clip` (with `overflow-x: hidden` as the fallback) in
  `src/index.css`: `hidden` would make `<body>` a scroll container and break the
  sticky film viewport.
- Vite's dev server does serve `public/` with HTTP range requests (verified:
  `206 Partial Content` + `Accept-Ranges: bytes`), which seeking depends on.
- Scroll sensitivity is set only by `--hero-scrub` (CSS). At 640vh a ~100px wheel
  notch advances ~0.20s of the film (~5 frames), so the whole 10.08s timeline takes
  roughly 50 notches; the 280vh original was 2.3x faster than that. Nothing in the
  JS needs retuning when the knob changes — it seeks `progress * duration` exactly.
- Measured on the sandbox preview (desktop): seek latency
  cold 21ms / warm median 11ms (3–28ms); the whole file is buffered after ~1s, so
  seeks never hit the network; zero long tasks during scrubbing. A 40-step flick
  that crosses the film in ~0.65s issues one seek per frame, all of them complete,
  and the displayed frame trails by one scroll frame (~0.25s) — that is the
  seek+present floor, deliberately not hidden behind interpolation. `onProgress`
  only writes a style when the value actually changes (0 DOM writes while the copy
  is already fully faded, ~2 per frame while it is fading).
- To re-profile without touching app code, drive `window.scrollTo({behavior:'instant'})`
  in a rAF loop and read `video.requestVideoFrameCallback` metadata: `meta.mediaTime`
  is the frame actually on screen, which is what tells real lag from reported `currentTime`.

## Notes
- Contact form is frontend-only (no backend/API); validates and shows success state
- Newsletter in footer validates email client-side
- `prefers-reduced-motion` disables scroll-reveal and scroll-bounce animations
