import { chefImage } from '../data/content'
import Button from './ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ChefSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="chef" className="bg-obsidian section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux grid gap-12 lg:grid-cols-2 lg:gap-20 items-center ${visible ? 'reveal visible' : 'reveal'}`}>
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <img
              src={chefImage}
              alt="Executive Chef in the kitchen"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Accent frame line */}
          <div className="absolute -bottom-4 -right-4 h-32 w-32 border-r-2 border-b-2 border-accent/40 rounded-br-lg -z-0" />
        </div>

        {/* Text */}
        <div>
          <p className="eyebrow mb-6">The People Behind the Plate</p>
          <h2 className="font-serif text-display text-cream text-balance">
            Built on passion.
            <br />
            <span className="italic">Defined by craft.</span>
          </h2>
          <div className="mt-8 space-y-4">
            <p className="text-secondary-text text-lg leading-relaxed">
              "Every dish begins with respect for the ingredient and ends with a moment worth remembering."
            </p>
            <p className="text-muted leading-relaxed">
              With over two decades in kitchens across Paris, Tokyo and Tehran, our Executive Chef brings a global perspective to a deeply local table — where technique serves flavor, and flavor serves memory.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div>
              <p className="font-serif text-xl text-cream">Daniel Arman</p>
              <p className="text-sm text-muted uppercase tracking-wider">Executive Chef</p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="#reservation" variant="secondary" withArrow>Meet Our Chef</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
