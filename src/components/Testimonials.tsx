import { useState } from 'react'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const { ref, visible } = useScrollReveal()

  return (
    <section className="bg-obsidian section-padding py-28 md:py-36 lg:py-44">
      <div ref={ref} className={`container-lux max-w-3xl text-center ${visible ? 'reveal visible' : 'reveal'}`}>
        <Quote className="mx-auto h-10 w-10 text-accent/20" strokeWidth={1} />

        <div className="mt-10 min-h-[180px]">
          <blockquote className="font-serif text-2xl md:text-3xl font-light text-cream leading-relaxed text-balance italic">
            {testimonials[active].quote}
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-1">
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gilded text-gilded" />
            ))}
          </div>

          <p className="mt-5 font-sans text-sm font-medium text-cream">
            {testimonials[active].name}
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted mt-1">{testimonials[active].role}</p>
        </div>

        {/* Dots */}
        <div className="mt-12 flex items-center justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                active === i ? 'w-10 bg-accent' : 'w-1.5 bg-[rgba(255,255,255,0.1)] hover:bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
