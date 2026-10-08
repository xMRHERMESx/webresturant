import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import './Experience.css'

const IMG =
  'https://images.pexels.com/photos/9736758/pexels-photo-9736758.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-grid">
        <Reveal className="experience-img-wrap">
          <SmartImage
            src={IMG}
            alt="Panoramic view of the Pinecrest golf course with rolling fairways"
            className="experience-img"
            loading="lazy"
          />
        </Reveal>
        <div className="experience-text">
          <Reveal className="experience-text-inner">
            <p className="eyebrow">Your Journey Begins Here</p>
            <h2 className="experience-title">Experience Pinecrest</h2>
            <p className="experience-desc">
              Whether you're a member or a guest, Pinecrest Golf Club offers an unforgettable
              experience on and off the course.
            </p>
            <a href="#contact" className="btn btn-outline-dark experience-cta">Plan Your Visit</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
