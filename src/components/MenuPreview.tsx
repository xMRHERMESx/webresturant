import { useState } from 'react'
import { menuCategories } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'

const tabs = Object.keys(menuCategories) as Array<keyof typeof menuCategories>

export default function MenuPreview() {
  const [active, setActive] = useState<keyof typeof menuCategories>('Mains')
  const { ref, visible } = useScrollReveal()

  return (
    <section id="menu" className="bg-obsidian section-padding py-28 md:py-36 lg:py-44">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-accent/40" />
              <p className="eyebrow-accent">Curated Selection</p>
            </div>
            <h2 className="font-serif font-light text-display text-cream">From Our Menu</h2>
            <p className="mt-6 text-secondary-text text-sm max-w-sm leading-relaxed">
              A living document — our menu changes with the seasons, guided by what the land offers.
            </p>
            <a href="#reservation" className="group mt-10 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:text-gilded">
              View Full Menu
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — tabs + items */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-1 mb-12 border-b border-[rgba(255,255,255,0.06)] pb-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`relative px-4 py-3 text-[0.7rem] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                    active === tab ? 'text-accent' : 'text-muted hover:text-secondary-text'
                  }`}
                >
                  {tab}
                  {active === tab && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-accent" />
                  )}
                </button>
              ))}
            </div>

            {/* Items */}
            <ul className="space-y-8">
              {menuCategories[active].map((item) => (
                <li key={item.name} className="group">
                  <div className="flex items-baseline gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-normal text-cream transition-colors duration-300 group-hover:text-gilded">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted">{item.description}</p>
                    </div>
                    {/* Dotted leader */}
                    <span className="hidden sm:block flex-1 border-b border-dotted border-[rgba(255,255,255,0.08)] mb-2" />
                    <span className="font-serif text-xl font-light text-gilded whitespace-nowrap">{item.price}</span>
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
