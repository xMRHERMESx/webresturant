interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-xl'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-accent/40" />
          <p className="eyebrow-accent">{eyebrow}</p>
        </div>
      )}
      <h2 className="font-serif font-light text-display text-cream text-balance">{title}</h2>
      {description && (
        <p className="mt-6 text-secondary-text text-sm leading-relaxed text-balance max-w-lg mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
