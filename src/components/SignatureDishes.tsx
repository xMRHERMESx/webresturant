import { dishes } from '../data/content'
import SectionHeader from './ui/SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SignatureDishes() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section-padding py-28 md:py-36 lg:py-44">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        <SectionHeader
          eyebrow="From Our Kitchen"
          title="Signature Dishes"
          description="A selection of dishes that define our kitchen."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, i) => (
            <article
              key={dish.name}
              className="group cursor-pointer"
            >
              {/* Image — no card frame, image-first */}
              <div className="relative h-80 overflow-hidden rounded-[2px]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ebony/90 via-ebony/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                {/* Price reveal on hover — large editorial serif behind */}
                <span className="absolute bottom-4 right-4 font-serif text-3xl font-light text-gilded opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  {dish.price}
                </span>
              </div>

              {/* Content — below image, minimal */}
              <div className="mt-5">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted mb-2">{dish.category}</p>
                <h3 className="font-serif text-xl font-normal text-cream transition-colors duration-300 group-hover:text-gilded">
                  {dish.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{dish.description}</p>
                {/* Accent line on hover */}
                <span className="mt-4 block h-px w-0 bg-accent/50 transition-all duration-500 ease-out group-hover:w-12" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
