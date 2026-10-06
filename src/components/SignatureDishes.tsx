import { dishes } from '../data/content'
import SectionHeader from './ui/SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SignatureDishes() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        <SectionHeader
          eyebrow="From Our Kitchen"
          title="Signature Dishes"
          description="A selection of dishes that define our kitchen."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, i) => (
            <article
              key={dish.name}
              className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {/* Category badge */}
                <span className="absolute top-4 left-4 text-xs uppercase tracking-wider text-cream/80 bg-ebony/60 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                  {dish.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-cream">{dish.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{dish.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-serif text-2xl text-gilded">{dish.price}</span>
                  {/* Accent line on hover */}
                  <span className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
