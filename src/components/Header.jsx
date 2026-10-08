import { useEffect, useState } from 'react'
import { PineTree } from './icons.jsx'
import './Header.css'

const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'COURSE', href: '#course' },
  { label: 'MEMBERSHIP', href: '#membership' },
  { label: 'GUEST EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // active section tracking
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#home" className="logo" aria-label="Pinecrest Golf Club home" onClick={closeMenu}>
          <span className="logo-mark"><PineTree size={22} color="var(--gold-light)" /></span>
          <span className="logo-text">
            <span className="logo-name">PINECREST</span>
            <span className="logo-sub">GOLF CLUB</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#membership" className="btn btn-outline header-cta">Join as a Member</a>

        <button
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-link ${active === link.href ? 'active' : ''}`}
              onClick={closeMenu}
              style={{ transitionDelay: `${menuOpen ? i * 50 : 0}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#membership" className="btn btn-primary mobile-cta" onClick={closeMenu}>
          Join as a Member
        </a>
      </div>
      {menuOpen && <div className="menu-backdrop" onClick={closeMenu} />}
    </header>
  )
}
