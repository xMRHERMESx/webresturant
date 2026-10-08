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
    <section className="bg-obsidian section-padding py-28 md:py-36 lg:py-44">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        {/* Asymmetric layout — image offset, text not in a column */}
        <div className="grid gap-16 lg:gap-12 lg:grid-cols-12 items-center">
          {/* Left — overlapping circular images */}
          <div className="relative lg:col-span-6 flex items-center justify-center lg:justify-start lg:pl-8">
            {/* Secondary smaller image — overlapping behind, offset */}
            <div className="absolute -bottom-6 -right-2 md:right-4 h-36 w-36 md:h-44 md:w-44 overflow-hidden rounded-full border border-[rgba(255,255,255,0.06)] z-20 shadow-2xl shadow-ebony/80">
              <img
                src={signatureSecondary}
                alt="Fresh seasonal ingredients"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Main circular image */}
            <div className="relative h-72 w-72 md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-[30rem] overflow-hidden rounded-full z-10 group">
              <img
                src={signatureImage}
                alt="Signature dish on a white plate"
                className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle ring */}
              <div className="absolute inset-0 rounded-full ring-1 ring-[rgba(255,255,255,0.04)]" />
            </div>
          </div>

          {/* Right — text content, offset to create asymmetry */}
          <div className="lg:col-span-6 lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-accent/40" />
              <p className="eyebrow-accent">The Signature Experience</p>
            </div>
            <h2 className="font-serif font-light text-display text-cream text-balance">
              Simple ingredients.
              <br />
              <span className="italic text-gilded">Extraordinary moments.</span>
            </h2>
            <p className="mt-7 text-secondary-text text-base leading-relaxed max-w-md">
              Our chef's tasting menu distills a season into a single evening — each course building on the last, each flavor revealing something unexpected.
            </p>

            {/* Features */}
            <div className="mt-12 space-y-7">
              {features.map((f) => (
                <div key={f.num} className="flex gap-6 items-start group/item">
                  <span className="font-serif text-lg font-light text-accent/40 shrink-0 w-8 pt-1">{f.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-cream">{f.title}</h3>
                      <span className="h-px flex-1 max-w-[60px] bg-[rgba(255,255,255,0.06)]" />
                    </div>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button href="#menu" variant="secondary" withArrow>Explore The Experience</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
