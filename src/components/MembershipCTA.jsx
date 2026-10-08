import Reveal from './Reveal.jsx'
import './MembershipCTA.css'

export default function MembershipCTA() {
  return (
    <section id="membership" className="mcta section">
      <div className="container">
        <Reveal className="mcta-inner">
          <p className="eyebrow mcta-eyebrow">Membership</p>
          <h2 className="mcta-title">Become Part of the Pinecrest Legacy</h2>
          <p className="mcta-desc">
            Discover membership designed around exceptional golf, meaningful connections,
            and timeless hospitality.
          </p>
          <div className="mcta-actions">
            <a href="#contact" className="btn btn-primary">Request Membership Information</a>
            <a href="#contact" className="btn btn-outline">Contact the Club</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
