import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const { ref, visible } = useScrollReveal()
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setDone(true)
  }

  return (
    <section className="bg-obsidian section-padding py-24 md:py-32">
      <div ref={ref} className={`container-lux max-w-2xl text-center mx-auto ${visible ? 'reveal visible' : 'reveal'}`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-6 bg-accent/40" />
          <p className="eyebrow-accent">Newsletter</p>
          <span className="h-px w-6 bg-accent/40" />
        </div>
        <h2 className="font-serif font-light text-display text-cream">Stay At the Table</h2>
        <p className="mt-6 text-secondary-text text-sm leading-relaxed max-w-md mx-auto">
          Receive seasonal menus, special events and stories from our kitchen.
        </p>

        {done ? (
          <p className="mt-10 text-gilded font-serif text-xl font-light italic">Thank you — you're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input-lux flex-1 text-center sm:text-left"
              aria-label="Email address"
            />
            <button type="submit" className="btn-primary group whitespace-nowrap">
              Subscribe
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
