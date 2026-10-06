import { useState } from 'react'
import { menuCategories } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'

const tabs = Object.keys(menuCategories) as Array<keyof typeof menuCategories>

export default function MenuPreview() {
  const [active, setActive] = useState<keyof typeof menuCategories>('Mains')
  const { ref, visible } = useScrollReveal()

  return (
    <section id="menu" className="bg-obsidian section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-6">Curated Selection</p>
            <h2 className="font-serif text-display text-cream">From Our Menu</h2>
            <p className="mt-5 text-secondary-text max-w-sm">
              A living document — our menu changes with the seasons, guided by what the land offers.
            </p>
            <a href="#reservation" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-gilded">
              View Full Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — tabs + items */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`relative px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                    active === tab ? 'text-accent' : 'text-muted hover:text-secondary-text'
                  }`}
                >
                  {tab}
                  {active === tab && (
                    <span className="absolute -bottom-[17px] left-0 h-0.5 w-full bg-accent" />
                  )}
                </button>
              ))}
            </div>

            {/* Items */}
            <ul className="space-y-7">
              {menuCategories[active].map((item) => (
                <li key={item.name} className="group">
                  <div className="flex items-baseline gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-cream transition-colors group-hover:text-gilded">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    </div>
                    {/* Dotted leader */}
                    <span className="hidden sm:block flex-1 border-b border-dotted border-border/60 mb-2" />
                    <span className="font-serif text-xl text-gilded whitespace-nowrap">{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
