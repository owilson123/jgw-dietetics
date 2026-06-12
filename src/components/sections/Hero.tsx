'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const credentials = [
  'HCPC Registered Dietitian',
  '30+ Years NHS Experience',
  'BDA Member',
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--off-white)' }}
    >
      {/* Background organic shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, var(--sage-pale) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle, var(--terracotta-pale) 0%, transparent 70%)`,
        }}
      />

      <div className="container-wide relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                backgroundColor: 'var(--sage-pale)',
                color: 'var(--sage)',
                border: '1px solid rgba(74, 103, 65, 0.2)',
              }}
            >
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'var(--sage)' }} />
              Registered Dietitian · South West England
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.05] text-balance mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Evidence-Based Nutrition Support That Fits{' '}
              <em className="not-italic" style={{ color: 'var(--sage)' }}>Real Life</em>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: 'var(--charcoal-mid)' }}
            >
              Helping you improve digestive health, manage diabetes, and build a healthier
              relationship with food through personalised dietetic support.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: 'var(--sage)',
                  border: '2px solid var(--sage)',
                  backgroundColor: 'transparent',
                }}
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--charcoal-mid)' }}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--sage)' }} />
                  {c}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Portrait placeholder with elegant styling */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main portrait frame */}
              <div
                className="relative rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-[4/5]"
                style={{ backgroundColor: 'var(--sage-pale)' }}
              >
                {/* Placeholder visual until portrait is added */}
                <div
                  className="w-full h-full flex flex-col items-center justify-end p-8"
                  style={{
                    background: `linear-gradient(160deg, var(--sage-pale) 0%, var(--eucalyptus) 100%)`,
                  }}
                >
                  {/* Silhouette representation */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg viewBox="0 0 200 280" className="w-48 h-auto" fill="white">
                      <circle cx="100" cy="70" r="40" />
                      <ellipse cx="100" cy="200" rx="65" ry="80" />
                    </svg>
                  </div>
                  <div
                    className="relative z-10 text-center text-white"
                  >
                    <p className="text-sm font-medium opacity-80">Jackie Wilson</p>
                    <p className="text-xs opacity-60">Registered Dietitian</p>
                  </div>
                </div>

                {/* Floating credential card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-8 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-[160px]"
                >
                  <p className="text-2xl font-serif font-bold" style={{ color: 'var(--sage)' }}>30+</p>
                  <p className="text-xs text-gray-500 leading-tight">Years of clinical experience</p>
                </motion.div>

                {/* Floating reviews card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute top-8 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-[160px]"
                >
                  <div className="flex mb-1">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3 h-3" fill="var(--gold)" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 leading-tight">Trusted by hundreds of clients</p>
                </motion.div>
              </div>

              {/* Decorative element */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 -z-10"
                style={{ backgroundColor: 'var(--terracotta)' }}
              />
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-15 -z-10"
                style={{ backgroundColor: 'var(--gold)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(74, 103, 65, 0.4)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ backgroundColor: 'var(--sage)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
