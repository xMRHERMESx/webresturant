'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { img, ingredients } from '@/lib/data'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta/10 organic-1 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-powder-blue/10 organic-3 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div style={{ y: textY }} className="lg:col-span-5 order-2 lg:order-1">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.p variants={item} className="text-xs uppercase tracking-[0.25em] text-terracotta mb-6">
                Handcrafted Pizza • Made with Purpose
              </motion.p>
              <motion.h1 variants={item} className="font-serif font-light text-display text-charcoal mb-6">
                A Brighter<br />Table
              </motion.h1>
              <motion.p variants={item} className="font-serif text-2xl text-charcoal/70 mb-8 italic">
                Extraordinary pizza.<br />Meaningful moments.
              </motion.p>
              <motion.div variants={item} className="flex flex-wrap items-center gap-6">
                <a href="#reservation" className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-terracotta text-cream text-xs uppercase tracking-[0.15em] hover:bg-charcoal transition-colors duration-300">
                  Reserve a Table
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#story" className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-charcoal/60 hover:text-charcoal transition-colors">
                  Explore Our Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: imageY, scale: imageScale }} className="lg:col-span-7 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square max-w-[600px] mx-auto"
            >
              <div className="absolute inset-0 organic-1 overflow-hidden shadow-2xl">
                <img src={img.heroPizza} alt="Artisanal Neapolitan pizza" className="w-full h-full object-cover" loading="eager" />
              </div>

              {ingredients.map((ing, i) => {
                const radius = 50
                const rad = (ing.angle * Math.PI) / 180
                const x = 50 + radius * Math.cos(rad)
                const y = 50 + radius * Math.sin(rad)
                return (
                  <motion.div
                    key={ing.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.15, duration: 0.5 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 hidden lg:block"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="flex items-center gap-2 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                      <div className="w-2 h-2 rounded-full bg-terracotta" />
                      <span className="text-[10px] uppercase tracking-[0.15em] text-charcoal">{ing.name}</span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-24 right-12 font-serif italic text-charcoal/20 text-xl hidden lg:block"
      >
        Good Pizza, Better Company
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40">Scroll to Explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-charcoal/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
