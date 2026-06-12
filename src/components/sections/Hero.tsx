'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'

const specialisms = [
  'IBS & Digestive Health',
  'Low FODMAP Programme',
  'Type 1 & 2 Diabetes',
  'Brain Injury Rehabilitation',
  'GLP-1 Medication Support',
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
      style={{ backgroundColor: 'var(--off-white)' }}
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

      <div className="container-wide relative z-10 py-10 sm:py-14 lg:py-20 xl:py-28">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">

          {/* ── Main Content ── */}
          <div className="lg:col-span-3">

            {/* Mobile-only: compact photo + name strip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 mb-6 lg:hidden"
            >
              <div
                className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 flex items-end justify-center"
                style={{ backgroundColor: 'var(--sage-pale)' }}
              >
                <Image
                  src="/images/jackie-wilson.jpg"
                  alt="Jackie Wilson RD"
                  width={56}
                  height={75}
                  className="object-cover object-top w-full"
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>Jackie Wilson RD</p>
                <p className="text-xs" style={{ color: 'var(--charcoal-mid)' }}>Specialist Registered Dietitian · 30+ Years</p>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 sm:mb-8"
              style={{
                backgroundColor: 'var(--sage-pale)',
                color: 'var(--sage)',
                border: '1px solid rgba(58, 95, 74, 0.25)',
                letterSpacing: '0.08em',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--sage)' }} />
              <span className="hidden sm:inline">SPECIALIST REGISTERED DIETITIAN · SOUTH WEST ENGLAND</span>
              <span className="sm:hidden">REGISTERED DIETITIAN · SOUTH WEST</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif leading-[1.06] text-balance mb-5 sm:mb-6"
              style={{
                color: 'var(--charcoal)',
                fontSize: 'clamp(2rem, 6vw, 4.2rem)',
              }}
            >
              Evidence-Based{' '}
              <span className="italic" style={{ color: 'var(--sage)' }}>Dietetic Care</span>
              {' '}That Fits Real Life
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
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
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
                style={{ backgroundColor: 'var(--sage)', minHeight: '52px' }}
              >
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
              <a
                href="tel:07770769322"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
                style={{
                  color: 'var(--charcoal)',
                  border: '1.5px solid rgba(58, 95, 74, 0.3)',
                  backgroundColor: 'white',
                  minHeight: '52px',
                }}
              >
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--sage)' }} />
                07770 769322
              </a>
            </motion.div>

            {/* Credential chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {credentials.map((c) => (
                <div
                  key={c.abbr}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs"
                  style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
                >
                  <span
                    className="font-bold px-1.5 py-0.5 rounded text-[10px]"
                    style={{ backgroundColor: 'var(--sage)', color: 'white' }}
                  >
                    {c.abbr}
                  </span>
                  <span className="font-medium" style={{ color: 'var(--charcoal-mid)' }}>{c.full}</span>
                </div>
              ))}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs"
                style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
              >
                <span className="font-bold" style={{ color: 'var(--terracotta)' }}>30+</span>
                <span className="font-medium" style={{ color: 'var(--charcoal-mid)' }}>Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* ── Profile Card — desktop only ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-2 justify-end"
          >
            <div className="w-full max-w-[300px]">
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ border: '1px solid var(--sage-pale)', backgroundColor: 'white' }}
              >
                {/* Photo */}
                <div
                  className="flex items-end justify-center pt-8 px-8"
                  style={{ backgroundColor: 'var(--sage-pale)' }}
                >
                  <Image
                    src="/images/jackie-wilson.jpg"
                    alt="Jackie Wilson — Registered Dietitian"
                    width={225}
                    height={300}
                    className="rounded-t-xl object-cover object-top shadow-md"
                    style={{ width: '180px', height: 'auto' }}
                    priority
                  />
                </div>

                {/* Name plate */}
                <div className="px-6 py-4" style={{ backgroundColor: 'var(--sage)' }}>
                  <p className="text-white font-serif text-lg leading-tight">Jackie Wilson</p>
                  <p className="text-white/70 text-[11px] tracking-wider uppercase mt-0.5">
                    Registered Dietitian · 30+ Years
                  </p>
                </div>

                {/* Specialisms */}
                <div className="bg-white">
                  {specialisms.map((s, i) => (
                    <div
                      key={s}
                      className="flex items-center gap-3 px-5 py-2.5 text-sm"
                      style={{ borderBottom: i < specialisms.length - 1 ? '1px solid var(--sage-pale)' : 'none' }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--sage)' }} />
                      <span style={{ color: 'var(--charcoal-mid)' }}>{s}</span>
                    </div>
                  ))}
                  <div className="p-4" style={{ backgroundColor: 'var(--off-white)' }}>
                    <Link
                      href="/contact"
                      className="block text-center py-2.5 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: 'var(--sage)' }}
                    >
                      Book a Free Discovery Call →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stat strip */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { val: '30+', label: 'Years exp.', color: 'var(--sage)' },
                  { val: '★★★★★', label: '5-star rated', color: 'var(--gold)', small: true },
                  { val: 'NHS', label: 'Specialist', color: 'var(--terracotta)' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl px-2 py-3 text-center"
                    style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
                  >
                    <p
                      className="font-serif font-bold mb-0.5"
                      style={{ color: s.color, fontSize: s.small ? '0.65rem' : '1.1rem', lineHeight: s.small ? '1.8' : undefined }}
                    >
                      {s.val}
                    </p>
                    <p className="text-[10px]" style={{ color: 'var(--charcoal-mid)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
