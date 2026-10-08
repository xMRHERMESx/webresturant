import { ArrowDown } from './icons.jsx'
import SmartImage from './SmartImage.jsx'
import './Hero.css'

const HERO_IMG =
  'https://images.pexels.com/photos/32401756/pexels-photo-32401756.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <SmartImage
        src={HERO_IMG}
        alt="Pinecrest Golf Club fairway at sunrise with mature trees and golden light"
        className="hero-img"
        fallbackClass="hero-img"
        loading="eager"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow eyebrow">Welcome to</p>
        <h1 className="hero-title">PINECREST</h1>
        <h2 className="hero-subtitle">GOLF CLUB</h2>
        <p className="hero-tagline">Where Tradition Meets Excellence</p>
        <a href="#about" className="btn btn-primary hero-cta">Discover the Experience</a>
      </div>
      <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
        <span className="scroll-text">SCROLL</span>
        <ArrowDown size={16} color="var(--cream)" />
      </a>
    </section>
  )
}
