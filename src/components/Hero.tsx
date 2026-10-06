import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroImage } from '../data/content'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gourmet dish on a dark plate with warm cinematic lighting"
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ebony via-ebony/70 to-ebony/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ebony via-transparent to-ebony/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lux section-padding w-full">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            The Art of Great Taste
          </p>
          <h1 className="font-serif text-hero text-cream text-balance animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Where Every Dish
            <br />
            Tells a Story.
          </h1>
          <p className="mt-7 max-w-md text-secondary-text text-lg leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Discover carefully crafted dishes, seasonal ingredients and unforgettable moments created around the table.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <Button href="#menu" variant="primary" withArrow>Explore the Menu</Button>
            <Button href="#reservation" variant="secondary">Reserve a Table</Button>
          </div>
        </div>
      </div>

      {/* Metadata bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-ebony/40 backdrop-blur-sm">
        <div className="container-lux section-padding flex items-center justify-between py-5 text-xs uppercase tracking-[0.2em] text-muted">
          <div className="flex items-center gap-2">
            <span className="text-secondary-text">Open Daily</span>
            <span className="text-gilded">12:00 — 23:30</span>
          </div>
          <div className="hidden sm:block text-secondary-text">Tehran / Iran</div>
          <div className="flex items-center gap-3">
            <button aria-label="Previous slide" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary-text transition-colors hover:border-accent hover:text-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button aria-label="Next slide" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary-text transition-colors hover:border-accent hover:text-accent">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
