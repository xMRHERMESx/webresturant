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
    <section className="bg-obsidian section-padding py-20 md:py-28">
      <div ref={ref} className={`container-lux max-w-2xl text-center mx-auto ${visible ? 'reveal visible' : 'reveal'}`}>
        <p className="eyebrow mb-5">Newsletter</p>
        <h2 className="font-serif text-display text-cream">Stay At the Table</h2>
        <p className="mt-5 text-secondary-text text-lg">
          Receive seasonal menus, special events and stories from our kitchen.
        </p>

        {done ? (
          <p className="mt-8 text-gilded font-serif text-xl">Thank you — you're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
