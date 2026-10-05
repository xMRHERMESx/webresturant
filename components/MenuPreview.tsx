'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuCategories } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(0)
  const category = menuCategories[activeCategory]

  return (
    <section id="menu" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-terracotta mb-4"
          >
            The Menu
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-light text-heading text-charcoal mb-12"
          >
            Our Selection
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-6 py-2 text-xs uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${
                activeCategory === i ? 'bg-charcoal text-cream' : 'text-charcoal/50 hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {category.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden organic-2 mb-4 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <p className="font-serif text-2xl text-cream">{item.price}</p>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-1">{item.name}</h3>
                <p className="text-xs text-charcoal/50 leading-relaxed">{item.description}</p>
                <p className="font-serif text-lg text-terracotta mt-2 lg:hidden">{item.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-16">
          <a
            href="#reservation"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-charcoal hover:text-terracotta transition-colors"
          >
            View Full Menu
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
