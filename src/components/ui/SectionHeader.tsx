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
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="font-serif text-display text-cream text-balance">{title}</h2>
      {description && (
        <p className="mt-5 text-secondary-text text-base leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  )
}
