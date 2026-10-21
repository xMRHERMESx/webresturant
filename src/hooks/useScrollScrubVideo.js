import { useEffect, useRef, useState } from 'react'

// Keep the final seek inside the timeline the decoder can actually render:
// seeking to exactly `duration` can show nothing at all.
const END_EPSILON = 0.05

// Sub-frame differences are not worth a seek. At 24fps one frame is ~0.042s.
const MIN_TIME_DELTA = 1 / 60

// If the film never produces valid metadata we stop waiting and degrade to the
// still image instead of leaving a spinner on screen.
const READY_TIMEOUT_MS = 10000

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)

/**
 * Scroll-scrubbed video.
 *
 * The film never plays: `currentTime` is derived purely from the reader's
 * position inside the scroll track, so the timeline advances with downward
 * scrolling, reverses with upward scrolling, and holds still when they stop.
 *
 * Performance shape:
 *   scroll event -> mark work pending -> requestAnimationFrame -> seek
 * The scroll listener does no measuring and touches no React state, so a
 * scrub costs no re-renders. Progress is written straight onto the node by the
 * caller's `onProgress` callback.
 *
 * Returns `{ status }`: 'loading' | 'ready' | 'error'.
 */
export default function useScrollScrubVideo({ trackRef, videoRef, enabled, onProgress }) {
  const [status, setStatus] = useState('loading')
  // Lets the readiness effect ask the scrub loop for one update as soon as the
  // film becomes seekable (honours scrolling done while it was loading).
  const tickRef = useRef(null)
  const progressRef = useRef(onProgress)
  progressRef.current = onProgress

  // ---- readiness ----------------------------------------------------------
  useEffect(() => {
    if (!enabled) return
    const video = videoRef.current
    if (!video) {
      setStatus('error')
      return
    }

    let settled = false
    const timer = setTimeout(() => {
      if (!settled) {
        settled = true
        setStatus('error')
      }
    }, READY_TIMEOUT_MS)

    const usableDuration = () => Number.isFinite(video.duration) && video.duration > 0

    const settle = (next) => {
      settled = true
      clearTimeout(timer)
      setStatus(next)
      if (next === 'ready') tickRef.current?.()
    }

    const onReady = () => {
      if (usableDuration()) settle('ready')
    }
    const onError = () => settle('error')

    video.addEventListener('loadedmetadata', onReady)
    video.addEventListener('loadeddata', onReady)
    video.addEventListener('canplay', onReady)
    video.addEventListener('error', onError)

    // Already buffered (warm cache / fast local file).
    if (usableDuration() && video.readyState >= 2) settle('ready')

    return () => {
      clearTimeout(timer)
      video.removeEventListener('loadedmetadata', onReady)
      video.removeEventListener('loadeddata', onReady)
      video.removeEventListener('canplay', onReady)
      video.removeEventListener('error', onError)
    }
  }, [enabled, videoRef])

  // ---- scrub loop ---------------------------------------------------------
  useEffect(() => {
    if (!enabled) return
    const track = trackRef.current
    const video = videoRef.current
    if (!track || !video) return

    let rafId = 0
    let trackTop = 0
    let scrubDistance = 1
    let desiredTime = -1 // newest target the scroll position asks for
    let soughtTime = -1 // target of the seek we last handed to the decoder
    let reported = -1

    // Measured only on mount/resize — never inside a scroll handler.
    const measure = () => {
      const rect = track.getBoundingClientRect()
      trackTop = rect.top + window.scrollY
      // Only the distance the sticky viewport is actually pinned for counts:
      // total track height minus the viewport it holds.
      scrubDistance = Math.max(rect.height - window.innerHeight, 1)
    }

    const readProgress = () => clamp01((window.scrollY - trackTop) / scrubDistance)

    const seekTo = (progress) => {
      const duration = video.duration
      if (!Number.isFinite(duration) || duration <= 0) return // metadata not in yet
      const time = Math.min(progress * duration, Math.max(duration - END_EPSILON, 0))
      desiredTime = time
      if (time === soughtTime) return
      if (Math.abs(time - video.currentTime) < MIN_TIME_DELTA) {
        soughtTime = time
        return
      }
      soughtTime = time
      try {
        video.currentTime = time
      } catch {
        /* seeking unsupported — the still fallback stays visible */
      }
    }

    // Seeking is asynchronous, so the frame on screen can lag the latest scroll
    // position. Converge as soon as the seek lands rather than smoothing it out
    // (smoothing would visibly detach the film from the scroll wheel).
    const onSeeked = () => {
      if (desiredTime < 0 || desiredTime === soughtTime) return
      try {
        video.currentTime = desiredTime
        soughtTime = desiredTime
      } catch {
        /* ignore */
      }
    }

    const tick = () => {
      rafId = 0
      const progress = readProgress()
      if (progress !== reported) {
        reported = progress
        progressRef.current?.(progress)
      }
      seekTo(progress)
    }
    tickRef.current = tick

    // One frame of work per burst of scroll events.
    const requestTick = () => {
      if (!rafId) rafId = requestAnimationFrame(tick)
    }
    const onResize = () => {
      measure()
      requestTick()
    }

    measure()
    tick() // sets the entry frame, including a restored mid-hero scroll position

    window.addEventListener('scroll', requestTick, { passive: true })
    window.addEventListener('resize', onResize)
    video.addEventListener('seeked', onSeeked)

    let observer = null
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(onResize)
      observer.observe(track)
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = 0
      tickRef.current = null
      window.removeEventListener('scroll', requestTick)
      window.removeEventListener('resize', onResize)
      video.removeEventListener('seeked', onSeeked)
      observer?.disconnect()
    }
  }, [enabled, trackRef, videoRef])

  return { status, failed: status === 'error' }
}
