'use client'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    document.body.dataset.cursor = 'custom'

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, input, select, [data-cursor-hover]'))
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      delete document.body.dataset.cursor
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="custom-cursor"
      style={{
        left: pos.x,
        top: pos.y,
        width: hovering ? '36px' : '8px',
        height: hovering ? '36px' : '8px',
      }}
    />
  )
}
