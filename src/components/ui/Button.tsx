import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  withArrow?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  withArrow = false,
}: ButtonProps) {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : 'btn-ghost'

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={`group ${base} ${className}`} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={`group ${base} ${className}`} onClick={onClick}>
      {content}
    </button>
  )
}
