'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { img } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function FireSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.5, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-espresso">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={img.oven} alt="Wood-fired oven" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-espresso/50" />
      </motion.div>

      <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-warm-orange/15 rounded-full blur-[120px]" />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-beige/30 via-espresso/50 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream via-cream/50 to-transparent z-20 pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/30 font-sans">04 / 07</span>
            <span className="w-8 h-px bg-cream/15" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-warm-orange font-sans">450°C · 60 Seconds</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-light text-heading text-cream mb-8"
          >
            Fire<br />Brings It<br />To Life
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl text-cream/60 mb-12"
          >
            Real fire. Real flavor. Always.
          </motion.p>
          <motion.a
            href="#menu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-cream/30 text-cream text-[11px] uppercase tracking-[0.2em] hover:bg-cream hover:text-espresso transition-all duration-500"
          >
            Watch the Process
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block z-10"
      >
        <div className="relative w-36 h-36">
          <div className="absolute inset-0 rounded-full border border-cream/20 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-warm-orange" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-serif text-5xl font-light text-cream">60s</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-cream/50 mt-1">Perfect</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-cream/50">To Fire</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
