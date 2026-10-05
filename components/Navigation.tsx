'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl font-medium tracking-wide text-charcoal">
            Lumiere
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-xs uppercase tracking-[0.2em] text-charcoal/70 hover:text-charcoal transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#reservation"
              className="ml-4 px-6 py-2.5 rounded-full bg-terracotta text-cream text-xs uppercase tracking-[0.15em] hover:bg-charcoal transition-colors duration-300"
            >
              Reserve a Table →
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-charcoal" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-cream lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-serif text-2xl font-medium">Lumiere</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-charcoal" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center min-h-[80vh] gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-serif text-3xl text-charcoal hover:text-terracotta transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#reservation"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.08 }}
                className="mt-4 px-8 py-3 rounded-full bg-terracotta text-cream text-sm uppercase tracking-[0.15em]"
              >
                Reserve a Table →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
