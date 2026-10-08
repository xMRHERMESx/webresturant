// SVG icon set — gold line icons for the heritage grid + UI

export function PineTree({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2 L7 9 H9.5 L5.5 15 H9 L4.5 21 H19.5 L15 15 H18.5 L14.5 9 H17 L12 2 Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <line x1="12" y1="21" x2="12" y2="23" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowDown({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4 V20 M6 14 L12 20 L18 14" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRight({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12 H20 M14 6 L20 12 L14 18" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CircleArrow({ size = 38, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke={color} strokeWidth="1" />
      <path d="M14 20 H26 M21 15 L26 20 L21 25" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Heritage grid icons
export function IconCourse({ size = 30, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M5 24 C5 18 10 14 16 14 C22 14 27 18 27 24" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 14 V8 M16 8 L13 11 M16 8 L19 11" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 24 H27" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function IconTrophy({ size = 30, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M10 6 H22 V12 C22 16 19 19 16 19 C13 19 10 16 10 12 Z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M10 8 H6 V10 C6 13 8 14 10 14 M22 8 H26 V10 C26 13 24 14 22 14" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 19 V23 M12 27 H20 M13 27 C13 25 14 23 16 23 C18 23 19 25 19 27" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconDining({ size = 30, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M9 5 V14 M9 5 C7.5 5 6.5 7 6.5 10 C6.5 12 7.5 14 9 14" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 5 V27 M21 5 C23 5 24.5 8 24.5 12 C24.5 15 23 17 21 17" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14 V27" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function IconCommunity({ size = 30, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="3.5" stroke={color} strokeWidth="1.3" />
      <circle cx="22" cy="13" r="3" stroke={color} strokeWidth="1.3" />
      <path d="M5 25 C5 21 8 19 11 19 C14 19 17 21 17 25 M18 25 C18 22 20 20 22 20 C25 20 27 22 27 25" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function IconEvents({ size = 30, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="20" height="18" rx="2" stroke={color} strokeWidth="1.3" />
      <path d="M6 13 H26 M11 5 V10 M21 5 V10" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 18 H20 M12 21 H17" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function IconGuest({ size = 30, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 5 L26 9 V16 C26 22 22 26 16 28 C10 26 6 22 6 16 V9 Z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M11 16 L15 20 L21 13" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
