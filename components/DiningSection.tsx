'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { img } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function DiningSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  const verticalWords = ['Share', 'Taste', 'Connect', 'Belong']

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-powder-blue/6 organic-3 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/30 font-sans">05 / 07</span>
          <span className="w-8 h-px bg-charcoal/15" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-sans">Community</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <motion.div style={{ y: imageY }} className="lg:col-span-8 relative aspect-[16/10]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 organic-4 overflow-hidden shadow-2xl"
            >
              <motion.img
                style={{ scale: imageScale }}
                src={img.dining}
                alt="Friends sharing pizza at a table"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <div className="lg:col-span-4 lg:pl-4 flex flex-col justify-end pb-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-heading text-charcoal mb-6"
            >
              A Table<br />for Better<br />Company
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-lg text-charcoal/60 mb-8 leading-relaxed"
            >
              Great pizza tastes even better when shared.
            </motion.p>
            <motion.a
              href="#menu"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-charcoal hover:text-terracotta transition-colors"
            >
              <span className="relative">
                Explore the Menu
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-500 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-10">
        {verticalWords.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-charcoal/25 [writing-mode:vertical-rl]"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
