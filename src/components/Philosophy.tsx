import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Philosophy() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="philosophy" className="section-padding py-24 md:py-32 lg:py-40">
      <div
        ref={ref}
        className={`container-lux grid gap-12 lg:grid-cols-2 lg:gap-20 ${visible ? 'reveal visible' : 'reveal'}`}
      >
        {/* Left */}
        <div>
          <p className="eyebrow mb-6">Our Philosophy</p>
          <h2 className="font-serif text-display text-cream text-balance">
            Good food is not simply prepared.
            <br />
            <span className="italic text-gilded">It is experienced.</span>
          </h2>
          <div className="divider mt-10 max-w-xs" />
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-secondary-text text-lg leading-relaxed">
            We believe a meal is more than sustenance — it is a moment of connection. Our kitchen honors each ingredient with intention, drawing from seasonal harvests and time-honored technique to create dishes that surprise and delight.
          </p>
          <p className="text-muted leading-relaxed">
            From the warmth of our dining room to the precision of every plate, we craft an atmosphere where hospitality feels effortless and every visit becomes a memory worth keeping.
          </p>
          <a href="#chef" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-gilded">
            Discover Our Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
