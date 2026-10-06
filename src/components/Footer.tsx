import { Instagram, Facebook } from 'lucide-react'

const columns = [
  {
    title: 'Explore',
    links: ['Home', 'Our Story', 'Menu', 'Experience', 'Gallery'],
  },
  {
    title: 'Visit',
    links: ['14 Vanak Square, Tehran', 'Open Daily 12:00 — 23:30', 'Get Directions'],
  },
  {
    title: 'Contact',
    links: ['+98 21 8800 4400', 'reservations@noirepicurean.com', 'Reservations'],
  },
]

// TikTok icon (not in lucide-react by default)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.06v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a7.82 7.82 0 0 0 4.64 1.52V7.15a4.85 4.85 0 0 1-1.71-.46z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070706] section-padding pt-24 pb-10">
      {/* Oversized background text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <p className="font-serif text-[18vw] font-light text-cream/[0.03] whitespace-nowrap select-none leading-none">
          GOOD FOOD / GOOD MOMENTS
        </p>
      </div>

      <div className="relative z-10 container-lux">
        {/* Top — logo + statement */}
        <div className="text-center pb-16 border-b border-border">
          <h2 className="font-serif text-5xl md:text-6xl text-cream">
            Noir<span className="text-accent">.</span> Epicurean
          </h2>
          <p className="mt-5 font-serif text-xl text-secondary-text italic">
            Thoughtful food. Beautiful moments. Memories worth keeping.
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-secondary-text transition-colors hover:text-cream">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-5">Follow</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary-text transition-all hover:border-accent hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary-text transition-all hover:border-accent hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary-text transition-all hover:border-accent hover:text-accent">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 Noir Epicurean. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cream">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-cream">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
