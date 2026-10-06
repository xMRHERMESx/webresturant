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
    <section id="experience" className="section-padding py-24 md:py-32 lg:py-40">
      <div ref={ref} className={`container-lux ${visible ? 'reveal visible' : 'reveal'}`}>
        <SectionHeader
          eyebrow="Beyond the Plate"
          title="More Than A Meal"
          description="Three ways to experience Noir Epicurean — each crafted to be unforgettable."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              className="group relative overflow-hidden rounded-lg h-96"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ebony via-ebony/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="font-serif text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-2 font-serif text-2xl text-cream">{exp.title}</h3>
                <p className="mt-2 text-sm text-secondary-text leading-relaxed max-w-xs">{exp.desc}</p>
                <span className="mt-4 inline-block h-px w-0 bg-accent transition-all duration-500 group-hover:w-12" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
