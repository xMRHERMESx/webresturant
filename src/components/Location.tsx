import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const info = [
  { icon: MapPin, label: 'Address', value: '14 Vanak Square, Tehran, Iran' },
  { icon: Phone, label: 'Phone', value: '+98 21 8800 4400' },
  { icon: Mail, label: 'Email', value: 'reservations@noirepicurean.com' },
]

const hours = [
  { days: 'Monday — Thursday', time: '12:00 — 23:00' },
  { days: 'Friday — Sunday', time: '12:00 — 00:00' },
]

export default function Location() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux grid gap-12 lg:grid-cols-2 lg:gap-16 ${visible ? 'reveal visible' : 'reveal'}`}>
        {/* Left — map placeholder */}
        <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden rounded-lg border border-border bg-card">
          {/* Stylized map area */}
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-card to-ebony" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
          {/* Pin */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ebony">
                <MapPin className="h-6 w-6" />
              </div>
            </div>
            <p className="mt-4 font-serif text-lg text-cream">Noir Epicurean</p>
            <p className="text-xs uppercase tracking-wider text-muted">Vanak, Tehran</p>
          </div>
        </div>

        {/* Right — info */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-6">Find Us</p>
          <h2 className="font-serif text-display text-cream">Visit the Restaurant</h2>

          <div className="mt-10 space-y-7">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
                  <p className="mt-1 text-cream">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-muted mb-3">Opening Hours</p>
                {hours.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between border-b border-border/50 py-2">
                    <span className="text-sm text-secondary-text">{h.days}</span>
                    <span className="text-sm text-gilded">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="group mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-gilded">
            Get Directions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
