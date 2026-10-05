'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { img, ingredients } from '@/lib/data'

export default function IngredientExplorer() {
  const [active, setActive] = useState<number | null>(null)
  const [bakeLevel, setBakeLevel] = useState(1)
  const bakeLevels = ['Soft', 'Classic', 'Crispy', 'Well Done']

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-terracotta mb-4"
          >
            The Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-light text-heading text-charcoal"
          >
            Build Your Pizza
          </motion.h2>
        </div>

        <div className="relative max-w-[600px] mx-auto aspect-square">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-8 organic-1 overflow-hidden shadow-xl"
          >
            <img
              src={img.margherita}
              alt="Margherita pizza"
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: active !== null ? 'scale(1.05)' : 'scale(1)' }}
            />
          </motion.div>

          {ingredients.map((ing, i) => {
            const radius = 48
            const rad = (ing.angle * Math.PI) / 180
            const x = 50 + radius * Math.cos(rad)
            const y = 50 + radius * Math.sin(rad)
            return (
              <motion.button
                key={ing.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-label={`Ingredient: ${ing.name}`}
              >
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  active === i ? 'bg-terracotta text-cream shadow-lg scale-110' : 'bg-cream/90 backdrop-blur-sm text-charcoal shadow-md'
                }`}>
                  <div className={`w-2 h-2 rounded-full transition-colors ${active === i ? 'bg-cream' : 'bg-terracotta'}`} />
                  <span className="text-[10px] uppercase tracking-[0.15em] whitespace-nowrap">{ing.name}</span>
                </div>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] text-charcoal/60 whitespace-nowrap"
                  >
                    {ing.description}
                  </motion.p>
                )}
              </motion.button>
            )
          })}
        </div>

        <div className="max-w-md mx-auto mt-16">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-charcoal/50 mb-6">Bake Level</p>
          <div className="flex items-center justify-between gap-2">
            {bakeLevels.map((level, i) => (
              <button
                key={level}
                onClick={() => setBakeLevel(i)}
                className={`flex-1 py-2 text-[10px] uppercase tracking-[0.1em] rounded-full transition-all duration-300 ${
                  bakeLevel === i ? 'bg-charcoal text-cream' : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
