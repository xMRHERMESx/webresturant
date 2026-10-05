'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { img, processSteps } from '@/lib/data'

export default function ExtraordinaryPizza() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section id="story" ref={ref} className="relative py-32 lg:py-40 overflow-hidden bg-beige/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-terracotta/6 organic-1 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/30 font-sans">03 / 07</span>
          <span className="w-8 h-px bg-charcoal/15" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-sans">The Process</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div style={{ y: imageY }} className="lg:col-span-7 relative aspect-[4/5] max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 organic-3 overflow-hidden shadow-2xl"
            >
              <motion.img
                style={{ scale: imageScale }}
                src={img.chef}
                alt="Chef preparing pizza dough"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6 lg:-ml-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif font-light text-heading text-charcoal mb-8"
            >
              Extraordinary<br />Pizza
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-xl text-charcoal/60 mb-12 leading-relaxed"
            >
              We start with the finest ingredients,<br />
              respect tradition, and let time do its work.<br />
              Because better food creates<br />
              a brighter world.
            </motion.p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="border-l border-terracotta/20 pl-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-terracotta mb-1">{step.label}</p>
                  <p className="font-serif text-lg text-charcoal">{step.description}</p>
                  <p className="text-xs text-charcoal/40 mt-1">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
