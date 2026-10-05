'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuCategories } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(0)
  const category = menuCategories[activeCategory]

  return (
    <section id="menu" className="relative py-32 lg:py-40 overflow-hidden bg-cream-light">
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
              <span className="w-8 h-px bg-charcoal/15" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-sans">The Menu</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-heading text-charcoal"
            >
              Our Selection
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-charcoal/40 max-w-xs mt-4 lg:mt-0 lg:text-right"
          >
            Six categories. Crafted with intention. Served with warmth.
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-6 mb-20 border-b border-charcoal/8 pb-6">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`group relative text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeCategory === i ? 'text-charcoal' : 'text-charcoal/30 hover:text-charcoal/60'
              }`}
            >
              {cat.name}
              {activeCategory === i && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-[25px] left-0 right-0 h-px bg-terracotta origin-left"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-16 lg:space-y-24"
          >
            {category.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden organic-2 shadow-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                  </div>
                </div>

                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/30 font-sans">
                    {String(i + 1).padStart(2, '0')} — {category.name}
                  </span>
                  <h3 className="font-serif text-3xl lg:text-4xl text-charcoal mt-3 mb-4 group-hover:translate-x-1.5 transition-transform duration-500">
                    {item.name}
                  </h3>
                  <p className="text-sm text-charcoal/50 leading-relaxed mb-6">{item.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-2xl text-terracotta">{item.price}</span>
                    <span className="w-12 h-px bg-charcoal/10 group-hover:w-20 group-hover:bg-terracotta/40 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-24 text-center">
          <a
            href="#reservation"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-charcoal hover:text-terracotta transition-colors"
          >
            <span className="relative">
              View Full Menu
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-500 group-hover:w-full" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
