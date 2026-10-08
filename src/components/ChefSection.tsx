import { chefImage } from '../data/content'
import Button from './ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ChefSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="chef" className="bg-obsidian section-padding py-28 md:py-36 lg:py-44">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Image — offset, with accent line */}
          <div className="relative lg:col-span-5 lg:order-2">
            <div className="overflow-hidden rounded-[2px]">
              <img
                src={chefImage}
                alt="Executive Chef in the kitchen"
                className="w-full h-[480px] md:h-[560px] object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Thin accent line — editorial detail */}
            <div className="absolute -left-4 -top-4 h-24 w-px bg-accent/30 hidden lg:block" />
          </div>

          {/* Text — wider column, offset */}
          <div className="lg:col-span-7 lg:order-1 lg:pr-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-accent/40" />
              <p className="eyebrow-accent">The People Behind the Plate</p>
            </div>
            <h2 className="font-serif font-light text-display text-cream text-balance">
              Built on passion.
              <br />
              <span className="italic text-gilded">Defined by craft.</span>
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-serif text-xl font-light italic text-secondary-text leading-relaxed">
                "Every dish begins with respect for the ingredient and ends with a moment worth remembering."
              </p>
              <p className="text-muted text-sm leading-relaxed max-w-lg">
                With over two decades in kitchens across Paris, Tokyo and Tehran, our Executive Chef brings a global perspective to a deeply local table — where technique serves flavor, and flavor serves memory.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="font-serif text-2xl font-normal text-cream">Daniel Arman</p>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted mt-1">Executive Chef</p>
              </div>
              <div className="h-12 w-px bg-[rgba(255,255,255,0.08)]" />
              <Button href="#reservation" variant="ghost" withArrow>Meet Our Chef</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
