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

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  const headingLines = ['A Brighter', 'Table']

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta/8 organic-1 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-powder-blue/8 organic-3 blur-3xl" />
      </div>

      <motion.div style={{ y: imageY }} className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%]">
        <motion.div
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ scale: imageScale }}
          className="absolute inset-0"
        >
          <img src={img.heroPizza} alt="Artisanal Neapolitan pizza" className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent lg:via-cream/40"
        />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute top-0 left-6 lg:left-12 flex items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/30 font-sans">01 / 07</span>
          <span className="w-8 h-px bg-charcoal/15" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/30 font-sans">A Brighter Table</span>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl pt-12 lg:pt-0">
          <motion.p variants={item} className="text-[10px] uppercase tracking-[0.3em] text-terracotta mb-8 font-sans flex items-center gap-3">
            Handcrafted Pizza
            <span className="w-4 h-px bg-terracotta/40" />
            Fire · Time · Craft
          </motion.p>

          <h1 className="font-serif font-light text-display text-charcoal mb-8">
            {headingLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={item} className="font-serif text-2xl text-charcoal/60 mb-10 italic">
            Extraordinary pizza.<br />Meaningful moments.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-8">
            <a href="#reservation" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-cream text-[11px] uppercase tracking-[0.2em] hover:bg-terracotta transition-colors duration-500">
              Reserve a Table
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>
            <a href="#story" className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-charcoal/50 hover:text-charcoal transition-colors">
              <span className="relative">
                Explore Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal transition-all duration-500 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-12">
            {ingredients.map((ing, i) => (
              <span key={ing.name} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-terracotta" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-charcoal/40">{ing.name}</span>
                {i < ingredients.length - 1 && <span className="text-charcoal/15 ml-2">·</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 right-12 font-serif italic text-charcoal/15 text-2xl hidden lg:block"
      >
        Good Food. Better Company.
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal/30">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-3 h-3 text-charcoal/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
