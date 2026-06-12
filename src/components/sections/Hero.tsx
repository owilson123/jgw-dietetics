'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const specialisms = [
  { label: 'IBS & Digestive Health', icon: '🌿' },
  { label: 'Low FODMAP Programme', icon: '🥗' },
  { label: 'Type 1 & 2 Diabetes', icon: '💙' },
  { label: 'Lifestyle Nutrition', icon: '✨' },
  { label: 'Family Nutrition', icon: '🏡' },
]

const credentials = [
  { abbr: 'HCPC', full: 'Registered Dietitian' },
  { abbr: 'BDA', full: 'British Dietetic Association' },
  { abbr: 'NHS', full: 'Specialist Experience' },
]

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--off-white)', minHeight: 'calc(100vh - 96px)' }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--sage-pale) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, var(--terracotta-pale) 0%, transparent 40%)`,
          opacity: 0.6,
        }}
      />

      <div className="container-wide relative z-10 py-16 lg:py-24 xl:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ── Left: Main Content (3 cols) ── */}
          <div className="lg:col-span-3">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
              style={{
                backgroundColor: 'var(--sage-pale)',
                color: 'var(--sage)',
                border: '1px solid rgba(74, 103, 65, 0.25)',
                letterSpacing: '0.12em',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--sage)' }} />
              Specialist Registered Dietitian · South West England
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif leading-[1.04] text-balance mb-6"
              style={{
                color: 'var(--charcoal)',
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              }}
            >
              Evidence-Based{' '}
              <span className="italic" style={{ color: 'var(--sage)' }}>Nutrition Support</span>
              <br />That Fits Real Life
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: 'var(--charcoal-mid)' }}
            >
              Helping you improve digestive health, manage diabetes, and build a healthier
              relationship with food — through truly personalised dietetic support.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:07770769322"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: 'var(--charcoal)',
                  border: '1.5px solid var(--sage-pale)',
                  backgroundColor: 'white',
                }}
              >
                <Phone className="w-4 h-4" style={{ color: 'var(--sage)' }} />
                07770 769322
              </a>
            </motion.div>

            {/* Credential chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {credentials.map((c) => (
                <div
                  key={c.abbr}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--sage-pale)',
                  }}
                >
                  <span
                    className="text-xs font-bold px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: 'var(--sage)', color: 'white' }}
                  >
                    {c.abbr}
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--charcoal-mid)' }}>{c.full}</span>
                </div>
              ))}
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--sage-pale)',
                }}
              >
                <span className="text-xs font-bold" style={{ color: 'var(--terracotta)' }}>30+</span>
                <span className="text-xs font-medium" style={{ color: 'var(--charcoal-mid)' }}>Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Specialisms Panel (2 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: '1px solid var(--sage-pale)' }}>
              {/* Panel header */}
              <div
                className="px-7 py-6"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase opacity-70 text-white mb-1">
                  Areas of Expertise
                </p>
                <p className="text-white font-serif text-xl">
                  Specialist support across six key areas
                </p>
              </div>

              {/* Specialism list */}
              <div className="bg-white">
                {specialisms.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-4 px-7 py-4 transition-colors hover:bg-stone-50"
                    style={{
                      borderBottom: i < specialisms.length - 1 ? '1px solid var(--sage-pale)' : 'none',
                    }}
                  >
                    <span className="text-xl flex-shrink-0 w-7">{s.icon}</span>
                    <span className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>{s.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto flex-shrink-0 opacity-30" />
                  </motion.div>
                ))}

                {/* Bottom CTA */}
                <div className="px-7 py-5" style={{ backgroundColor: 'var(--off-white)' }}>
                  <p className="text-xs mb-3" style={{ color: 'var(--charcoal-mid)' }}>
                    Not sure where to start?
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center py-3 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: 'var(--sage)' }}
                  >
                    Book a Free 15-Minute Discovery Call →
                  </Link>
                </div>
              </div>
            </div>

            {/* Below panel — social proof */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-4 flex gap-3"
            >
              <div
                className="flex-1 rounded-xl px-5 py-4 text-center"
                style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
              >
                <p className="text-2xl font-serif font-bold mb-0.5" style={{ color: 'var(--sage)' }}>30+</p>
                <p className="text-xs" style={{ color: 'var(--charcoal-mid)' }}>Years experience</p>
              </div>
              <div
                className="flex-1 rounded-xl px-5 py-4 text-center"
                style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
              >
                <div className="flex justify-center mb-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5" fill="var(--gold)" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs" style={{ color: 'var(--charcoal-mid)' }}>5-star rated</p>
              </div>
              <div
                className="flex-1 rounded-xl px-5 py-4 text-center"
                style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
              >
                <p className="text-2xl font-serif font-bold mb-0.5" style={{ color: 'var(--terracotta)' }}>NHS</p>
                <p className="text-xs" style={{ color: 'var(--charcoal-mid)' }}>Specialist level</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
