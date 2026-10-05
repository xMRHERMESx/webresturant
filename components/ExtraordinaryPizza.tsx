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
    <section id="story" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-terracotta/8 organic-1 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div style={{ y: imageY }} className="relative aspect-[4/5] max-w-[500px] mx-auto lg:order-1">
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

          <div className="lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] text-terracotta mb-6"
            >
              The Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-heading text-charcoal mb-8"
            >
              Extraordinary<br />Pizza
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-xl text-charcoal/70 mb-12 leading-relaxed"
            >
              We start with the finest ingredients,<br />
              respect tradition, and let time do its work.<br />
              Because better food creates<br />
              a brighter world.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="border-l border-charcoal/10 pl-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-terracotta mb-1">{step.label}</p>
                  <p className="font-serif text-lg text-charcoal">{step.description}</p>
                  <p className="text-xs text-charcoal/50 mt-1">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
