import { useState } from 'react'

/**
 * Image with graceful gradient fallback if the source fails to load.
 * The fallback uses forest-green tones so the layout stays visually valid.
 */
export default function SmartImage({ src, alt, className = '', fallbackClass = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`smart-img-fallback ${fallbackClass} ${className}`}
        role="img"
        aria-label={alt}
        style={{
          background:
            'linear-gradient(135deg, #163d30 0%, #0f3026 45%, #1d211e 100%)',
        }}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
    />
  )
}
