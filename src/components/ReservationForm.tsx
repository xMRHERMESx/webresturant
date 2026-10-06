import { useState } from 'react'
import { Calendar, Clock, Users, Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ReservationForm() {
  const { ref, visible } = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="bg-obsidian section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux max-w-3xl mx-auto ${visible ? 'reveal visible' : 'reveal'}`}>
        <div className="text-center mb-12">
          <p className="eyebrow mb-5">Book Your Evening</p>
          <h2 className="font-serif text-display text-cream">Make a Reservation</h2>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent text-accent">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-cream">Reservation Received</h3>
            <p className="mt-3 text-secondary-text">
              We will confirm your booking by email shortly. We look forward to welcoming you.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-ghost mt-8">
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider text-muted mb-2">Full Name</label>
                <input id="name" type="text" required className="input-lux" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted mb-2">Email</label>
                <input id="email" type="email" required className="input-lux" placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-muted mb-2">Phone</label>
                <input id="phone" type="tel" required className="input-lux" placeholder="+98 21 000 0000" />
              </div>
              <div>
                <label htmlFor="guests" className="block text-xs uppercase tracking-wider text-muted mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute right-0 top-3 h-5 w-5 text-muted pointer-events-none" />
                  <select id="guests" required className="input-lux appearance-none pr-7 cursor-pointer">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-obsidian text-cream">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="8+" className="bg-obsidian text-cream">8+ Guests</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="date" className="block text-xs uppercase tracking-wider text-muted mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute right-0 top-3 h-5 w-5 text-muted pointer-events-none" />
                  <input id="date" type="date" required className="input-lux pr-7" />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-xs uppercase tracking-wider text-muted mb-2">Time</label>
                <div className="relative">
                  <Clock className="absolute right-0 top-3 h-5 w-5 text-muted pointer-events-none" />
                  <select id="time" required className="input-lux appearance-none pr-7 cursor-pointer">
                    {['12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map((t) => (
                      <option key={t} value={t} className="bg-obsidian text-cream">{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="request" className="block text-xs uppercase tracking-wider text-muted mb-2">Special Request</label>
              <textarea id="request" rows={3} className="input-lux resize-none" placeholder="Dietary needs, occasion, seating preference..." />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
