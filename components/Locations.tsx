'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { locations } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState(0)
  const location = locations[activeLocation]

  return (
    <section id="locations" className="relative py-32 lg:py-40 overflow-hidden bg-cream-light">
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
              <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/30 font-sans">06 / 07</span>
              <span className="w-8 h-px bg-charcoal/15" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-sans">Find Us</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-heading text-charcoal"
            >
              Same Pizza.<br />Different Stories.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-charcoal/40 max-w-xs mt-4 lg:mt-0 lg:text-right"
          >
            Three cities. One philosophy. Find your nearest table.
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-8 mb-16 border-b border-charcoal/8 pb-6">
          {locations.map((loc, i) => (
            <button
              key={loc.city}
              onClick={() => setActiveLocation(i)}
              className={`group relative text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeLocation === i ? 'text-charcoal' : 'text-charcoal/30 hover:text-charcoal/60'
              }`}
            >
              {loc.city}
              {activeLocation === i && (
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

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative aspect-[16/10]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 organic-window overflow-hidden shadow-2xl"
              >
                <img src={location.image} alt={`${location.city} restaurant`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-serif text-4xl text-charcoal mb-3">{location.city}</h3>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3 h-3 text-terracotta" />
                  <p className="text-sm text-charcoal/60">{location.address}</p>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 mb-8 ml-5">{location.hours}</p>

                <div className="space-y-4 mb-8">
                  {location.rooms.map((room) => (
                    <div key={room.name} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-20 h-16 overflow-hidden organic-2 shadow-md flex-shrink-0">
                        <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                      <div>
                        <p className="font-serif text-base text-charcoal group-hover:translate-x-1 transition-transform duration-300">{room.name}</p>
                        <p className="text-xs text-charcoal/40">{room.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#reservation" className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-charcoal hover:text-terracotta transition-colors">
                  <span className="relative">
                    View Location
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-500 group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
