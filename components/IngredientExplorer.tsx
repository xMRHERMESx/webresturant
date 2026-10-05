'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { img, ingredients } from '@/lib/data'

export default function IngredientExplorer() {
  const [active, setActive] = useState<number | null>(null)
  const [bakeLevel, setBakeLevel] = useState(1)
  const bakeLevels = ['Soft', 'Classic', 'Crispy', 'Well Done']

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/30 font-sans">02 / 07</span>
              <span className="w-8 h-px bg-charcoal/15" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-sans">The Experience</span>
            </motion.div>
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-charcoal/40 max-w-xs mt-4 lg:mt-0 lg:text-right"
          >
            Hover to explore. Each ingredient tells a story.
          </motion.p>
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
                <div className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
                  active === i ? 'bg-charcoal text-cream scale-110' : 'bg-cream/90 backdrop-blur-sm text-charcoal'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors ${active === i ? 'bg-cream' : 'bg-terracotta'}`} />
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

        <div className="max-w-lg mx-auto mt-20">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal/40 font-sans">Bake Level</span>
            <span className="font-serif text-lg text-charcoal">{bakeLevels[bakeLevel]}</span>
          </div>
          <div className="relative h-px bg-charcoal/10">
            <div
              className="absolute h-px bg-terracotta transition-all duration-500"
              style={{ width: `${(bakeLevel / (bakeLevels.length - 1)) * 100}%` }}
            />
            <div className="flex items-center justify-between -translate-y-1/2 absolute inset-x-0 top-1/2">
              {bakeLevels.map((level, i) => (
                <button
                  key={level}
                  onClick={() => setBakeLevel(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    bakeLevel === i ? 'bg-terracotta scale-125' : 'bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                  aria-label={level}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
