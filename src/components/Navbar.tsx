import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-ebony/75 backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.05)] py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-lux section-padding flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-serif text-xl font-normal tracking-[0.05em] text-cream">
            Noir<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${i === 0 ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — refined, not pill */}
          <a
            href="#reservation"
            className="hidden lg:inline-flex items-center rounded-[3px] border border-[rgba(255,255,255,0.12)] px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Reserve a Table
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-cream p-2 -mr-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ebony transition-opacity duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <span className="font-serif text-xl text-cream">
            Noir<span className="text-accent">.</span>
          </span>
          <button
            className="text-cream p-2 -mr-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-col items-start gap-6 mt-24 px-5">
          {navLinks.map((link, i) => (
            <li key={link.href} className="w-full">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl font-light text-cream hover:text-accent transition-colors duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
              <div className="divider mt-4" />
            </li>
          ))}
          <li className="mt-4 w-full">
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Reserve a Table
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
