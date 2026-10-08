import { ArrowRight } from 'lucide-react'
import { philosophyImage } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Philosophy() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="philosophy" className="section-padding py-28 md:py-36 lg:py-44">
      <div
        ref={ref}
        className={`container-lux grid gap-16 lg:grid-cols-12 lg:gap-12 ${visible ? 'reveal visible' : 'reveal'}`}
      >
        {/* Left — heading with image accent */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-6 bg-accent/40" />
            <p className="eyebrow-accent">Our Philosophy</p>
          </div>
          <h2 className="font-serif font-light text-display text-cream text-balance">
            Good food is not
            <br />
            simply prepared.
            <br />
            <span className="italic text-gilded font-normal">It is experienced.</span>
          </h2>
          <div className="divider mt-12 max-w-[200px]" />
        </div>

        {/* Right — text, offset down for asymmetry */}
        <div className="flex flex-col gap-6 lg:col-span-5 lg:pt-16">
          <p className="text-secondary-text text-base leading-relaxed">
            We believe a meal is more than sustenance — it is a moment of connection. Our kitchen honors each ingredient with intention, drawing from seasonal harvests and time-honored technique to create dishes that surprise and delight.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            From the warmth of our dining room to the precision of every plate, we craft an atmosphere where hospitality feels effortless and every visit becomes a memory worth keeping.
          </p>
          <a href="#chef" className="group inline-flex items-center gap-2 mt-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:text-gilded">
            Discover Our Story
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
