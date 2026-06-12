'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '@/components/ui/FadeIn'
import { faqs } from '@/lib/data'

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--off-white)' }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
              Common Questions
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--charcoal-mid)' }}>
              Everything you need to know before booking your first appointment.
              Don't see your question?{' '}
              <a href="/contact" className="underline underline-offset-2" style={{ color: 'var(--sage)' }}>
                Get in touch
              </a>{' '}
              — Jackie is happy to help.
            </p>

            {/* Quick contact card */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'var(--sage-pale)', border: '1px solid rgba(74,103,65,0.15)' }}
            >
              <p className="font-semibold mb-1" style={{ color: 'var(--sage)' }}>Still have questions?</p>
              <p className="text-sm mb-4" style={{ color: 'var(--charcoal-mid)' }}>
                Book a free 15-minute discovery call and Jackie will answer everything.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                Book Free Call
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden transition-all"
                  style={{ border: `1px solid ${open === i ? 'var(--sage)' : 'var(--sage-pale)'}` }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--sage)' }}
                    />
                  </button>

                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p
                          className="px-5 pb-5 text-sm leading-relaxed"
                          style={{ color: 'var(--charcoal-mid)' }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
