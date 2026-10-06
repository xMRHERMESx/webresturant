import { galleryImages } from '../data/content'
import SectionHeader from './ui/SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

const spanClass: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  normal: '',
}

export default function Gallery() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="gallery" className="section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        <SectionHeader
          eyebrow="Moments Captured"
          title="The Gallery"
          description="A glimpse into the world behind the plate — our kitchen, our room, our craft."
        />

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-lg ${spanClass[img.span] ?? ''}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ebony/20 transition-opacity duration-500 group-hover:opacity-0" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-xs uppercase tracking-wider text-cream/0 transition-all duration-500 group-hover:text-cream/80">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
