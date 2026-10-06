import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ebony/80 backdrop-blur-[18px] border-b border-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-lux section-padding flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-serif text-2xl font-medium tracking-wide text-cream">
            Noir<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
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

          {/* Desktop CTA */}
          <a href="#reservation" className="hidden lg:inline-flex btn-primary text-xs px-6 py-3">
            Reserve a Table
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-cream p-2 -mr-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ebony transition-opacity duration-400 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <span className="font-serif text-2xl text-cream">
            Noir<span className="text-accent">.</span>
          </span>
          <button
            className="text-cream p-2 -mr-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center gap-8 mt-20">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-cream hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              Reserve a Table
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
