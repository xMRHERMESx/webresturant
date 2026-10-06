import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroImage } from '../data/content'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] min-h-[680px] flex items-end overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gourmet dish on a dark plate with warm cinematic lighting"
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        {/* Cinematic overlays — directional, not uniform */}
        <div className="absolute inset-0 bg-gradient-to-r from-ebony via-ebony/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ebony via-ebony/10 to-ebony/30" />
      </div>

      {/* Content — bottom-left aligned for editorial feel */}
      <div className="relative z-10 container-lux section-padding w-full pb-28 md:pb-32 lg:pb-36">
        <div className="max-w-2xl">
          <p
            className="eyebrow-accent mb-8 animate-fade-in"
            style={{ animationDelay: '0.15s', opacity: 0 }}
          >
            The Art of Great Taste
          </p>
          <h1
            className="font-serif font-light text-hero text-cream text-balance animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            Where Every Dish
            <br />
            <span className="italic font-normal text-gilded">Tells a Story.</span>
          </h1>
          <p
            className="mt-8 max-w-md text-secondary-text text-base leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            Discover carefully crafted dishes, seasonal ingredients and unforgettable moments created around the table.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-5 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <Button href="#menu" variant="primary" withArrow>Explore the Menu</Button>
            <Button href="#reservation" variant="secondary">Reserve a Table</Button>
          </div>
        </div>
      </div>

      {/* Metadata bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[rgba(255,255,255,0.06)]">
        <div className="container-lux section-padding flex items-center justify-between py-5 text-[0.65rem] uppercase tracking-[0.25em] text-muted">
          <div className="flex items-center gap-3">
            <span className="text-secondary-text">Open Daily</span>
            <span className="text-gilded">12:00 — 23:30</span>
          </div>
          <div className="hidden sm:block text-secondary-text">Tehran / Iran</div>
          <div className="flex items-center gap-2">
            <button aria-label="Previous slide" className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] text-secondary-text transition-colors hover:border-accent hover:text-accent">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button aria-label="Next slide" className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] text-secondary-text transition-colors hover:border-accent hover:text-accent">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
