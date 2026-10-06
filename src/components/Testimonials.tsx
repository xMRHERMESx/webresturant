import { useState } from 'react'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const { ref, visible } = useScrollReveal()

  return (
    <section className="bg-obsidian section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux max-w-3xl text-center ${visible ? 'reveal visible' : 'reveal'}`}>
        <Quote className="mx-auto h-12 w-12 text-accent/30" />

        <div className="mt-8 min-h-[200px]">
          <blockquote className="font-serif text-2xl md:text-3xl text-cream leading-relaxed text-balance">
            "{testimonials[active].quote}"
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-1">
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gilded text-gilded" />
            ))}
          </div>

          <p className="mt-4 font-sans text-sm uppercase tracking-wider text-cream">
            {testimonials[active].name}
          </p>
          <p className="text-sm text-muted">{testimonials[active].role}</p>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
