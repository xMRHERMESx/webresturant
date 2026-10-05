'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { locations } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState(0)
  const location = locations[activeLocation]

  return (
    <section id="locations" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-terracotta mb-4"
          >
            Find Us
          </motion.p>
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

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {locations.map((loc, i) => (
            <button
              key={loc.city}
              onClick={() => setActiveLocation(i)}
              className={`px-6 py-2 text-xs uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${
                activeLocation === i ? 'bg-charcoal text-cream' : 'text-charcoal/50 hover:text-charcoal'
              }`}
            >
              {loc.city}
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
                className="absolute inset-0 organic-4 overflow-hidden shadow-2xl"
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
                <h3 className="font-serif text-3xl text-charcoal mb-2">{location.city}</h3>
                <p className="text-sm text-charcoal/60 mb-1">{location.address}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-8">{location.hours}</p>

                <div className="space-y-4 mb-8">
                  {location.rooms.map((room) => (
                    <div key={room.name} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-20 h-16 overflow-hidden organic-2 shadow-md flex-shrink-0">
                        <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                      <div>
                        <p className="font-serif text-base text-charcoal">{room.name}</p>
                        <p className="text-xs text-charcoal/50">{room.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#reservation" className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-charcoal hover:text-terracotta transition-colors">
                  View Location
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
