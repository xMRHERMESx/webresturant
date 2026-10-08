import Reveal from './Reveal.jsx'
import { PineTree } from './icons.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <Reveal className="about-inner">
          <p className="eyebrow about-eyebrow">About Pinecrest</p>
          <h2 className="about-title">A Legacy of Excellence</h2>
          <div className="divider" aria-hidden="true">
            <span className="divider-line" />
            <PineTree size={20} color="var(--gold)" />
            <span className="divider-line" />
          </div>
          <p className="about-body">
            Since 1967, Pinecrest Golf Club has been a sanctuary for those who cherish the
            game of golf, exceptional hospitality, and the timeless beauty of nature.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
