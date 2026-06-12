'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'

const specialisms = [
  'IBS & Digestive Health',
  'Low FODMAP Programme',
  'Type 1 & 2 Diabetes',
  'Lifestyle Nutrition',
  'Family Nutrition',
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
      style={{ backgroundColor: 'var(--off-white)', minHeight: 'calc(100vh - 100px)' }}
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 60%, var(--sage-pale) 0%, transparent 45%),
                            radial-gradient(circle at 85% 15%, var(--terracotta-pale) 0%, transparent 40%)`,
          opacity: 0.65,
        }}
      />

      <div className="container-wide relative z-10 py-16 lg:py-20 xl:py-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-10 items-center">

          {/* ── Left: Main Content (3 cols) ── */}
          <div className="lg:col-span-3">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
              style={{
                backgroundColor: 'var(--sage-pale)',
                color: 'var(--sage)',
                border: '1px solid rgba(74, 103, 65, 0.25)',
                letterSpacing: '0.1em',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--sage)' }} />
              SPECIALIST REGISTERED DIETITIAN · SOUTH WEST ENGLAND
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif leading-[1.04] text-balance mb-6"
              style={{
                color: 'var(--charcoal)',
                fontSize: 'clamp(2.6rem, 4.5vw, 4.2rem)',
              }}
            >
              Evidence-Based{' '}
              <span className="italic" style={{ color: 'var(--sage)' }}>Nutrition Support</span>
              <br className="hidden sm:block" />
              {' '}That Fits Real Life
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--charcoal-mid)' }}
            >
              Helping you improve digestive health, manage diabetes, and build a healthier
              relationship with food through truly personalised dietetic support.
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
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
                  border: '1.5px solid rgba(74,103,65,0.3)',
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
              className="flex flex-wrap gap-2.5"
            >
              {credentials.map((c) => (
                <div
                  key={c.abbr}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg"
                  style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
                >
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: 'var(--sage)', color: 'white' }}
                  >
                    {c.abbr}
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--charcoal-mid)' }}>{c.full}</span>
                </div>
              ))}
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg"
                style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
              >
                <span className="text-xs font-bold" style={{ color: 'var(--terracotta)' }}>30+</span>
                <span className="text-xs font-medium" style={{ color: 'var(--charcoal-mid)' }}>Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Jackie's Photo + Panel (2 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Portrait card */}
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ border: '1px solid var(--sage-pale)' }}
            >
              {/* Photo */}
              <div className="relative bg-sage-pale" style={{ backgroundColor: 'var(--sage-pale)' }}>
                <Image
                  src="/images/jackie-wilson.jpg"
                  alt="Jackie Wilson — Registered Dietitian"
                  width={225}
                  height={300}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: '340px' }}
                  priority
                />
              </div>

              {/* Name plate */}
              <div
                className="px-6 py-5"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                <p className="text-white font-serif text-xl mb-0.5">Jackie Wilson</p>
                <p className="text-white/70 text-xs tracking-wider uppercase">Registered Dietitian RD · 30+ Years</p>
              </div>

              {/* Specialisms list */}
              <div className="bg-white">
                {specialisms.map((s, i) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 px-6 py-3 text-sm"
                    style={{
                      borderBottom: i < specialisms.length - 1 ? '1px solid var(--sage-pale)' : 'none',
                    }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--sage)' }} />
                    <span style={{ color: 'var(--charcoal-mid)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { val: '30+', label: 'Years experience', color: 'var(--sage)' },
                { val: '★★★★★', label: '5-star rated', color: 'var(--gold)', small: true },
                { val: 'NHS', label: 'Specialist level', color: 'var(--terracotta)' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl px-3 py-4 text-center"
                  style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
                >
                  <p
                    className="font-serif font-bold mb-0.5"
                    style={{
                      color: s.color,
                      fontSize: s.small ? '0.75rem' : '1.25rem',
                      lineHeight: s.small ? '1.6' : undefined,
                    }}
                  >
                    {s.val}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--charcoal-mid)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
