import { signatureImage, signatureSecondary } from '../data/content'
import Button from './ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  { num: '01', title: 'Seasonal Ingredients', desc: 'Sourced at peak freshness from trusted local farms.' },
  { num: '02', title: 'Crafted Daily', desc: 'Every element prepared in-house, each morning.' },
  { num: '03', title: 'Served With Intention', desc: 'Plating and pacing designed to tell a story.' },
]

export default function SignatureExperience() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="bg-obsidian section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux grid gap-12 lg:grid-cols-2 lg:gap-20 items-center ${visible ? 'reveal visible' : 'reveal'}`}>
        {/* Left — circular image composition */}
        <div className="relative flex items-center justify-center order-2 lg:order-1">
          {/* Secondary smaller image behind */}
          <div className="absolute -top-8 -left-4 h-40 w-40 md:h-56 md:w-56 overflow-hidden rounded-full border border-border opacity-60 z-0">
            <img src={signatureSecondary} alt="Fresh seasonal ingredients" className="h-full w-full object-cover" loading="lazy" />
          </div>
          {/* Main circular image */}
          <div className="relative h-72 w-72 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem] overflow-hidden rounded-full z-10 group">
            <img
              src={signatureImage}
              alt="Signature dish on a white plate"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right — text content */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-6">The Signature Experience</p>
          <h2 className="font-serif text-display text-cream text-balance">
            Simple ingredients.
            <br />
            <span className="italic">Extraordinary moments.</span>
          </h2>
          <p className="mt-6 text-secondary-text text-lg leading-relaxed max-w-md">
            Our chef's tasting menu distills a season into a single evening — each course building on the last, each flavor revealing something unexpected.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-6">
            {features.map((f) => (
              <div key={f.num} className="flex gap-5 items-start">
                <span className="font-serif text-2xl text-accent/60 shrink-0 w-10">{f.num}</span>
                <div>
                  <h3 className="font-sans text-sm font-medium uppercase tracking-wider text-cream">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="#menu" variant="secondary" withArrow>Explore The Experience</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
