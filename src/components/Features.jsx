import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { CircleArrow } from './icons.jsx'
import './Features.css'

const CARDS = [
  {
    title: 'World-Class Course',
    desc: '18 holes of immaculately maintained greens, challenging bunkers, and breathtaking natural beauty.',
    img: 'https://images.pexels.com/photos/33904920/pexels-photo-33904920.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Golfers playing on a lush green golf course with sand traps',
  },
  {
    title: 'Membership Experience',
    desc: 'Enjoy exclusive access to amenities, events, and a community of passionate golfers.',
    img: 'https://images.pexels.com/photos/31803613/pexels-photo-31803613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Golf course fairway with a clubhouse and lush greenery',
  },
  {
    title: 'Exceptional Hospitality',
    desc: 'From our dining room to our pro shop, every detail is designed to exceed your expectations.',
    img: 'https://images.pexels.com/photos/33948377/pexels-photo-33948377.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Elegant restaurant interior with warm ambient lighting and wooden tables',
  },
]

export default function Features() {
  return (
    <section id="course" className="features section">
      <div className="container">
        <div className="features-grid">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} className="feature-card" delay={i * 120}>
              <div className="feature-img-wrap">
                <SmartImage src={card.img} alt={card.alt} className="feature-img" />
              </div>
              <div className="feature-body">
                <h3 className="feature-title">{card.title}</h3>
                <span className="feature-divider" aria-hidden="true" />
                <p className="feature-desc">{card.desc}</p>
                <a href="#experience" className="feature-arrow" aria-label={`Learn more about ${card.title}`}>
                  <CircleArrow size={40} color="var(--gold)" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
