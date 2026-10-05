'use client'
import { useState } from 'react'
import { Instagram, Facebook, ArrowRight } from 'lucide-react'
import { navLinks } from '@/lib/data'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [lang, setLang] = useState('EN')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer id="contact" className="relative bg-espresso text-cream overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-3xl font-medium mb-4">Lumiere</h3>
            <p className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-6">Pizza • Fire • Company</p>
            <p className="font-serif italic text-cream/50 text-lg">Good pizza creates a brighter world.</p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 mb-4">Explore</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-cream/70 hover:text-warm-orange transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 mb-4">Stories from our table.</p>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 bg-transparent border-b border-cream/20 text-cream py-2 focus:outline-none focus:border-warm-orange transition-colors placeholder:text-cream/30"
              />
              <button type="submit" className="group inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-cream hover:text-warm-orange transition-colors">
                Subscribe
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
            {subscribed && <p className="text-xs text-warm-orange">Thank you for subscribing!</p>}

            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-warm-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-warm-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="TikTok" className="text-cream/50 hover:text-warm-orange transition-colors text-sm font-medium">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8 border-t border-cream/10">
          <p className="text-xs text-cream/40">© {new Date().getFullYear()} Lumiere. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang('EN')}
              className={`text-xs uppercase tracking-[0.15em] transition-colors ${lang === 'EN' ? 'text-cream' : 'text-cream/30'}`}
            >
              EN
            </button>
            <span className="text-cream/20">/</span>
            <button
              onClick={() => setLang('PL')}
              className={`text-xs uppercase tracking-[0.15em] transition-colors ${lang === 'PL' ? 'text-cream' : 'text-cream/30'}`}
            >
              PL
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
