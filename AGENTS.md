# AVESTORA — working notes

## What this repository is

A single-file, dependency-free Persian (RTL) marketing website: `index.html` contains all
HTML, CSS and JavaScript. There is no build step, no package manager, no framework and no
backend. Do not introduce React/Next/Vue/Tailwind or a bundler — the deliverable is one
file that runs by opening it in a browser.

## Running it in the Base44 sandbox

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

- One service, `web`, running `live-server` on **host port 3000** (the platform's preview port).
- `Dockerfile.base44` installs only the dev server; the repository is bind-mounted at `/app`,
  so source edits are served immediately and the browser reloads automatically.
- There are **no environment variables and no secrets**. The site is entirely client-side, so
  platform secrets cannot reach it — anything configurable must be a public value inside
  `index.html` (see "Configuration" below).
- The service therefore needs **no sandbox-specific overrides**: no host/origin allowlist, no
  `BASE44_PREVIEW_MODE` gate, no proxy rewrites. `live-server` does not validate `Host` or
  `Origin`, and the page has no CSP. Keep it that way unless the stack actually changes.

Health/logs and checks:

```bash
docker compose -f docker-compose.base44.yml ps
curl -sI http://localhost:3000/ | head -3
docker compose -f docker-compose.base44.yml logs --tail 50 web
```

## Configuration lives in one place

Everything an agency owner would edit sits in the `CONFIG` object at the top of the `<script>`
block in `index.html`:

- `HERO_VIDEO_URL`, `HERO_VIDEO_SCRUB` — optional cinematic hero footage. Empty = the CSS-only
  static scene (the default and fully designed state). A failed video degrades to that scene
  and shows a small note instead of throwing.
- `FORM_ENDPOINT` — `POST` target for the contact form (JSON body). While empty, the form
  validates and then **honestly reports that online submission is not configured**; it never
  fakes a successful send.
- `CONTACT.EMAIL / PHONE / WHATSAPP / INSTAGRAM / LINKEDIN` — each empty value removes that
  channel from the contact section, the footer list and the social row. WhatsApp only appears
  when the configured value yields a usable destination.

## Gotchas worth knowing

- The hero is a 380vh scroll track with a sticky 100vh stage (230vh/215vh on smaller screens,
  `height:auto` under `prefers-reduced-motion`). `initHeroScroll()` measures the track once and
  re-measures on resize/orientation change/load; it renders inside a single `requestAnimationFrame`.
- `body` uses `overflow-x: clip` on purpose: `overflow-x: hidden` on `body` breaks the sticky
  hero in some browsers. Do not change it back.
- The FAQ uses native `<details name="avestora-faq">`; `initFaq()` only enforces single-open on
  browsers that do not support the `name` attribute.
- JS-dependent controls carry `.js-only` (hidden when `index.html` runs without JavaScript) so
  no control is ever inert. Panels, sections and answers must stay readable with JS disabled:
  `html.no-js` reveals every stage panel and all footer/contact fallbacks.
- `#formStatus` is an always-present `role="status"` region (`.form__status:empty` hides it
  visually) — keep it in the DOM so announcements still work.
- The contact form sends `Content-Type: application/json`. If you point `FORM_ENDPOINT` at an
  endpoint that expects form-encoded data, change the `fetch` body accordingly.

## Verifying a change

There are no automated tests. Verify by serving the page and exercising the real UI:
navigation/mobile menu, hero scroll (forward and backward), growth-model tabs (mouse + arrow
keys), portfolio filters, FAQ open/close, service & project dialogs (Escape and close button),
form validation, and the unconfigured/endpoint form paths.
