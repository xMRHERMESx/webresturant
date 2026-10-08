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

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.06v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a7.82 7.82 0 0 0 4.64 1.52V7.15a4.85 4.85 0 0 1-1.71-.46z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070706] section-padding pt-32 pb-10">
      {/* Oversized background text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <p className="font-serif text-[15vw] font-light text-cream/[0.025] whitespace-nowrap select-none leading-none tracking-tight">
          GOOD FOOD / GOOD MOMENTS
        </p>
      </div>

      <div className="relative z-10 container-lux">
        {/* Top — large logo + statement */}
        <div className="text-center pb-20">
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-cream tracking-tight">
            Noir<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 font-serif text-xl md:text-2xl font-light text-secondary-text italic max-w-md mx-auto leading-relaxed">
            Thoughtful food.
            <br />
            Beautiful moments.
            <br />
            Memories worth keeping.
          </p>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Columns */}
        <div className="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-accent mb-6">{col.title}</h3>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-secondary-text transition-colors duration-300 hover:text-cream">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-accent mb-6">Follow</h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.08)] text-secondary-text transition-all duration-300 hover:border-accent/50 hover:text-accent">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.08)] text-secondary-text transition-all duration-300 hover:border-accent/50 hover:text-accent">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.08)] text-secondary-text transition-all duration-300 hover:border-accent/50 hover:text-accent">
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] text-muted">
          <p>© 2026 Noir Epicurean. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-cream">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-cream">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
