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
    <section id="reservation" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-terracotta/8 organic-1 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-terracotta mb-4"
          >
            Reservations
          </motion.p>
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
            className="font-serif text-xl text-charcoal/60"
          >
            Book your table and become part of the story.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-charcoal/95 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2 block">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent border-b border-cream/20 text-cream font-serif text-lg py-2 focus:outline-none focus:border-warm-orange transition-colors [color-scheme:dark]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2 block">Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent border-b border-cream/20 text-cream font-serif text-lg py-2 focus:outline-none focus:border-warm-orange transition-colors cursor-pointer [color-scheme:dark]"
              >
                <option value="" className="bg-charcoal">Select time</option>
                {times.map((t) => (
                  <option key={t} value={t} className="bg-charcoal">{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-2 block">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent border-b border-cream/20 text-cream font-serif text-lg py-2 focus:outline-none focus:border-warm-orange transition-colors cursor-pointer [color-scheme:dark]"
              >
                <option value="" className="bg-charcoal">Select guests</option>
                {guestOptions.map((g) => (
                  <option key={g} value={g} className="bg-charcoal">{g}</option>
                ))}
              </select>
            </div>
            <button className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-terracotta text-cream text-xs uppercase tracking-[0.15em] hover:bg-warm-orange transition-colors duration-300">
              Reserve a Table
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
