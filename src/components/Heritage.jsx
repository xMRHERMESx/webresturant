import Reveal from './Reveal.jsx'
import {
  IconCourse,
  IconTrophy,
  IconDining,
  IconCommunity,
  IconEvents,
  IconGuest,
} from './icons.jsx'
import './Heritage.css'

const ITEMS = [
  { icon: IconCourse, title: 'Pristine Course', desc: 'Meticulously maintained grounds create an unparalleled playing experience.' },
  { icon: IconTrophy, title: 'Championship Heritage', desc: 'Host to prestigious tournaments and a history of excellence on the green.' },
  { icon: IconDining, title: 'Exceptional Dining', desc: 'Savor seasonal, locally sourced cuisine in an elegant setting with a view.' },
  { icon: IconCommunity, title: 'Member Community', desc: 'Build lasting connections in a welcoming and vibrant community.' },
  { icon: IconEvents, title: 'Events & Gatherings', desc: 'From private events to member gatherings, we create unforgettable experiences.' },
  { icon: IconGuest, title: 'Guest Welcome', desc: 'We invite you to experience the Pinecrest difference as our valued guest.' },
]

export default function Heritage() {
  return (
    <section className="heritage section">
      <div className="container">
        <Reveal className="heritage-head">
          <p className="eyebrow">The Pinecrest Difference</p>
          <h2 className="heritage-title">More Than Just a Golf Club</h2>
        </Reveal>
        <div className="heritage-grid">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} className="heritage-item" delay={i * 80}>
                <span className="heritage-icon"><Icon size={32} color="var(--gold-light)" /></span>
                <h3 className="heritage-item-title">{item.title}</h3>
                <p className="heritage-item-desc">{item.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
