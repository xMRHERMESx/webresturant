'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { img } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function PrivateDining() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section id="private-dining" ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden bg-espresso">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream-light to-transparent z-20 pointer-events-none" />

      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={img.privateDining} alt="Private dining room" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-espresso/75" />
      </motion.div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-cream/15" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-warm-orange font-sans">Private Dining</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-light text-heading text-cream mb-8"
          >
            Your Table.<br />Your Story.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl text-cream/60 mb-12 leading-relaxed"
          >
            Private dinners, celebrations, and unforgettable evenings. Curated by our team, crafted around you.
          </motion.p>
          <motion.a
            href="#reservation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-cream/30 text-cream text-[11px] uppercase tracking-[0.2em] hover:bg-cream hover:text-espresso transition-all duration-500"
          >
            Explore Private Dining
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
