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
    <section className="section-padding py-28 md:py-36 lg:py-44">
      <div ref={ref} className={`container-lux grid gap-16 lg:grid-cols-2 lg:gap-20 ${visible ? 'reveal visible' : 'reveal'}`}>
        {/* Left — map area */}
        <div className="relative h-80 lg:h-full min-h-[440px] overflow-hidden rounded-[2px] border border-[rgba(255,255,255,0.04)] bg-card">
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-card to-ebony" />
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
          {/* Pin */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-accent/15" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-accent text-ebony">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-5 font-serif text-lg font-light text-cream">Noir Epicurean</p>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted mt-1">Vanak, Tehran</p>
          </div>
        </div>

        {/* Right — info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-accent/40" />
            <p className="eyebrow-accent">Find Us</p>
          </div>
          <h2 className="font-serif font-light text-display text-cream">Visit the Restaurant</h2>

          <div className="mt-12 space-y-8">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.06)] text-accent">
                  <item.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">{item.label}</p>
                  <p className="mt-1.5 text-cream text-base">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="flex items-start gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.06)] text-accent">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted mb-3">Opening Hours</p>
                {hours.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between border-b border-[rgba(255,255,255,0.04)] py-2.5">
                    <span className="text-sm text-secondary-text">{h.days}</span>
                    <span className="text-sm text-gilded font-serif">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="group mt-12 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:text-gilded">
            Get Directions
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
