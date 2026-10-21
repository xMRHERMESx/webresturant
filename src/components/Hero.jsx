import { useCallback, useRef } from 'react'
import { ArrowDown } from './icons.jsx'
import SmartImage from './SmartImage.jsx'
import useScrollScrubVideo from '../hooks/useScrollScrubVideo.js'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'
import './Hero.css'

// Existing Pinecrest hero photograph: the backdrop while the film loads, and the
// fallback whenever the film cannot be used (reduced motion, decode failure).
const HERO_IMG =
  'https://images.pexels.com/photos/32401756/pexels-photo-32401756.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'

// The supplied film (10.08s, 1280x720, 24fps) re-encoded for scrubbing: same
// footage and framing, but with a keyframe every 6 frames and fast-start
// metadata, so a seek decodes at most five frames. Transcode command in AGENTS.md.
const FILM = {
  wide: '/media/hero-720.mp4',
  compact: '/media/hero-540.mp4',
}

// Chosen once at mount so only one encode is ever downloaded.
function pickFilmSource() {
  if (typeof window === 'undefined') return FILM.wide
  const narrow = window.matchMedia('(max-width: 900px)').matches
  const metered = navigator.connection?.saveData === true
  return narrow || metered ? FILM.compact : FILM.wide
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)

export default function Hero() {
  const trackRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const cueRef = useRef(null)

  const reducedMotion = usePrefersReducedMotion()
  const scrub = !reducedMotion

  // Last values written to the DOM, so only genuine changes cost a style
  // recalculation: through most of a scrub the copy is already fully faded and
  // the cue already hidden, and re-setting an identical style string is wasted work.
  const writtenRef = useRef({ copy: null, cue: null })

  // Progress is written straight onto the nodes: no React state, so scrubbing
  // never re-renders the page. Both directions are the same pure function of
  // scroll position, so the copy fades and returns symmetrically.
  const handleProgress = useCallback((progress) => {
    const content = contentRef.current
    if (content) {
      const t = clamp01((progress - 0.06) / 0.34)
      const eased = t * t * (3 - 2 * t) // smoothstep — no abrupt hide
      const opacity = 1 - eased
      const opacityValue = opacity === 1 ? '' : opacity.toFixed(3)
      const transformValue = opacity === 1 ? '' : `translate3d(0, ${(-14 * eased).toFixed(1)}px, 0)`
      const pointerValue = opacity < 0.2 ? 'none' : ''
      const copyState = `${opacityValue}|${transformValue}|${pointerValue}`
      if (writtenRef.current.copy !== copyState) {
        writtenRef.current.copy = copyState
        content.style.opacity = opacityValue
        content.style.transform = transformValue
        content.style.pointerEvents = pointerValue
      }
    }
    const cue = cueRef.current
    if (cue) {
      const cueValue = clamp01(1 - progress / 0.08).toFixed(3)
      if (writtenRef.current.cue !== cueValue) {
        writtenRef.current.cue = cueValue
        cue.style.opacity = cueValue
      }
    }
  }, [])

  const { status } = useScrollScrubVideo({
    trackRef,
    videoRef,
    enabled: scrub,
    onProgress: handleProgress,
  })

  const failed = scrub && status === 'error'
  const ready = status === 'ready'
  const still = !scrub || failed // plain hero: no film, no scrub track

  return (
    <section id="home" ref={trackRef} className={`hero-track${still ? ' is-static' : ''}${ready ? ' is-ready' : ''}`}>
      <div className="hero-sticky">
        <SmartImage
          src={HERO_IMG}
          alt="Pinecrest Golf Club fairway at sunrise with mature trees and golden light"
          className="hero-img"
          fallbackClass="hero-img"
          loading="eager"
        />

        {!failed && (
          <video
            ref={videoRef}
            className="hero-video"
            src={pickFilmSource()}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
          />
        )}

        <div className="hero-overlay" />
        <div className="hero-scrim" />

        <div className="hero-content" ref={contentRef}>
          <p className="hero-eyebrow eyebrow">Welcome to</p>
          <h1 className="hero-title">PINECREST</h1>
          <h2 className="hero-subtitle">GOLF CLUB</h2>
          <p className="hero-tagline">Where Tradition Meets Excellence</p>
          <a href="#about" className="btn btn-primary hero-cta">Discover the Experience</a>
        </div>

        <div className={`hero-loading${ready || failed ? ' is-hidden' : ''}`} aria-hidden="true">
          <span className="hero-loading-bar" />
          <span className="hero-loading-text">Preparing the experience</span>
        </div>

        <a href="#about" className="hero-scroll" ref={cueRef} aria-label="Scroll to about section">
          <span className="scroll-text">SCROLL</span>
          <ArrowDown size={16} color="var(--cream)" />
        </a>
      </div>
    </section>
  )
}
