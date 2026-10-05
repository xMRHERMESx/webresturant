'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Reservation() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')

  const times = ['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']
  const guestOptions = ['1 Person', '2 People', '3 People', '4 People', '5 People', '6+ People']

  return (
    <section id="reservation" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-terracotta/6 organic-1 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/30 font-sans">07 / 07</span>
            <span className="w-8 h-px bg-charcoal/15" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-sans">Reservations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-light text-heading text-charcoal mb-6"
          >
            Let&apos;s Create<br />A Brighter Table.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl text-charcoal/50"
          >
            Book your table and become part of the story.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 border-t border-b border-charcoal/10">
            <div className="px-6 py-6 lg:border-r border-charcoal/10">
              <label className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 mb-3 block">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-charcoal font-serif text-xl py-1 focus:outline-none transition-colors [color-scheme:light]"
              />
            </div>
            <div className="px-6 py-6 lg:border-r border-charcoal/10">
              <label className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 mb-3 block">Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent text-charcoal font-serif text-xl py-1 focus:outline-none cursor-pointer transition-colors [color-scheme:light]"
              >
                <option value="">Select time</option>
                {times.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="px-6 py-6 lg:border-r border-charcoal/10">
              <label className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 mb-3 block">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-charcoal font-serif text-xl py-1 focus:outline-none cursor-pointer transition-colors [color-scheme:light]"
              >
                <option value="">Select guests</option>
                {guestOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center px-6 py-6">
              <button className="group inline-flex items-center justify-center gap-2 w-full py-4 bg-charcoal text-cream text-[11px] uppercase tracking-[0.2em] hover:bg-terracotta transition-colors duration-500">
                Reserve a Table
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
