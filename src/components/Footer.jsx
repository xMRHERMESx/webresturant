import { useState } from 'react'
import { PineTree, ArrowRight } from './icons.jsx'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'The Course', href: '#course' },
  { label: 'Membership', href: '#membership' },
  { label: 'Guest Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const MEMBERSHIP_LINKS = [
  { label: 'Join as a Member', href: '#membership' },
  { label: 'Member Benefits', href: '#membership' },
  { label: 'Facility Guide', href: '#course' },
  { label: 'Events', href: '#experience' },
  { label: 'Member Portal', href: '#membership' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('') // '' | 'ok' | 'err'

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('ok')
      setEmail('')
    } else {
      setStatus('err')
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Pinecrest Golf Club home">
              <span className="footer-logo-mark"><PineTree size={24} color="var(--gold-light)" /></span>
              <span className="footer-logo-text">
                <span className="footer-logo-name">PINECREST</span>
                <span className="footer-logo-sub">GOLF CLUB</span>
              </span>
            </a>
            <p className="footer-tagline">
              Where tradition meets excellence. A private club dedicated to the timeless
              beauty of golf and hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="footer-col" aria-label="Quick links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          {/* Membership */}
          <nav className="footer-col" aria-label="Membership">
            <h4 className="footer-heading">Membership</h4>
            <ul className="footer-list">
              {MEMBERSHIP_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          {/* Stay Connected */}
          <div className="footer-col">
            <h4 className="footer-heading">Stay Connected</h4>
            <p className="footer-news-desc">
              Follow the latest club updates and special events.
            </p>
            <form className="newsletter" onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('') }}
                placeholder="Enter your email address"
                aria-invalid={status === 'err'}
              />
              <button type="submit" className="newsletter-btn" aria-label="Join newsletter">
                <ArrowRight size={16} color="var(--forest)" />
              </button>
            </form>
            {status === 'ok' && <span className="newsletter-msg ok">Thank you for subscribing.</span>}
            {status === 'err' && <span className="newsletter-msg err">Please enter a valid email.</span>}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Pinecrest Golf Club. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
