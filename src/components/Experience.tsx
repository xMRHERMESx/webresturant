import { experienceImages } from '../data/content'
import SectionHeader from './ui/SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    title: 'Private Dining',
    desc: 'Celebrate in an intimate environment designed for unforgettable evenings.',
    image: experienceImages[0],
  },
  {
    title: "Chef's Table",
    desc: 'A front-row experience into the creativity of our kitchen.',
    image: experienceImages[1],
  },
  {
    title: 'Special Events',
    desc: 'Private celebrations, corporate dinners and unforgettable gatherings.',
    image: experienceImages[2],
  },
]

export default function Experience() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="experience" className="section-padding py-28 md:py-36 lg:py-44">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        <SectionHeader
          eyebrow="Beyond the Plate"
          title="More Than A Meal"
          description="Three ways to experience Noir Epicurean — each crafted to be unforgettable."
        />

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              className="group relative overflow-hidden rounded-[2px] h-[440px]"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ebony via-ebony/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-serif text-sm font-light text-accent/70">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-2xl font-light text-cream">{exp.title}</h3>
                <p className="mt-2 text-sm text-secondary-text leading-relaxed max-w-xs opacity-80 transition-opacity duration-500 group-hover:opacity-100">{exp.desc}</p>
                <span className="mt-5 block h-px w-0 bg-accent/50 transition-all duration-500 ease-out group-hover:w-16" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
