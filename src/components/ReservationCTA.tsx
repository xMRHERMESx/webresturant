import { reservationBg } from '../data/content'
import Button from './ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ReservationCTA() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={reservationBg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
        <div className="absolute inset-0 bg-ebony/88" />
      </div>

      <div ref={ref} className={`relative z-10 section-padding py-36 md:py-48 lg:py-56 ${visible ? 'reveal visible' : 'reveal'}`}>
        <div className="container-lux max-w-2xl text-center mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-6 bg-accent/40" />
            <p className="eyebrow-accent">Reservations</p>
            <span className="h-px w-6 bg-accent/40" />
          </div>
          <h2 className="font-serif font-light text-display text-cream text-balance">
            Your Table Is <span className="italic text-gilded">Waiting.</span>
          </h2>
          <p className="mt-8 text-secondary-text text-base leading-relaxed max-w-md mx-auto">
            Join us for an evening of exceptional food, warm hospitality and unforgettable moments.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Button href="#reservation" variant="primary" withArrow>Reserve Your Table</Button>
            <Button href="#menu" variant="secondary">View Menu</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
