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
        <div className="absolute inset-0 bg-ebony/85" />
      </div>

      <div ref={ref} className={`relative z-10 section-padding py-32 md:py-44 lg:py-52 ${visible ? 'reveal visible' : 'reveal'}`}>
        <div className="container-lux max-w-2xl text-center mx-auto">
          <p className="eyebrow mb-6">Reservations</p>
          <h2 className="font-serif text-display text-cream text-balance">
            Your Table Is <span className="italic text-gilded">Waiting.</span>
          </h2>
          <p className="mt-6 text-secondary-text text-lg leading-relaxed">
            Join us for an evening of exceptional food, warm hospitality and unforgettable moments.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#reservation" variant="primary" withArrow>Reserve Your Table</Button>
            <Button href="#menu" variant="secondary">View Menu</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
