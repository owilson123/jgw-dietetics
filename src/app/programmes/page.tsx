import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight, Phone } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { programmes } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Programmes & Pricing',
  description:
    'Transparent pricing for all of Jackie Wilson\'s dietetic services — from a free discovery call to comprehensive IBS and diabetes coaching programmes.',
}

export default function ProgrammesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--sage)' }}>
              Investment in Your Health
            </p>
            <h1 className="text-5xl sm:text-6xl font-serif mb-6 text-balance" style={{ color: 'var(--charcoal)' }}>
              Transparent Pricing, No Surprises
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
              From a free discovery call to a structured coaching programme — all options are outlined clearly below.
              Many clients find that a structured programme delivers the best outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing grid */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.08}>
                <div
                  className={`h-full rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden relative ${p.highlight ? 'ring-2' : ''}`}
                  style={{
                    backgroundColor: p.highlight ? 'var(--sage)' : 'white',
                    border: p.highlight ? 'none' : '1px solid var(--sage-pale)',
                    ...(p.highlight ? { '--tw-ring-color': 'var(--sage)' } as React.CSSProperties : {}),
                  }}
                >
                  {p.badge && (
                    <div
                      className="text-center py-2 text-xs font-bold text-white tracking-wider uppercase"
                      style={{ backgroundColor: 'var(--terracotta)' }}
                    >
                      {p.badge}
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-1">
                    {/* Header */}
                    <div className="mb-8">
                      <h2
                        className="text-2xl font-serif mb-1"
                        style={{ color: p.highlight ? 'white' : 'var(--charcoal)' }}
                      >
                        {p.name}
                      </h2>
                      <p
                        className="text-sm mb-6"
                        style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : 'var(--charcoal-mid)' }}
                      >
                        {p.tagline}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-4xl font-serif font-bold"
                          style={{ color: p.highlight ? 'white' : 'var(--charcoal)' }}
                        >
                          {p.price}
                        </span>
                      </div>
                      <p
                        className="text-sm mt-1"
                        style={{ color: p.highlight ? 'rgba(255,255,255,0.6)' : 'var(--charcoal-mid)' }}
                      >
                        {p.duration}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-8"
                      style={{ color: p.highlight ? 'rgba(255,255,255,0.8)' : 'var(--charcoal-mid)' }}
                    >
                      {p.description}
                    </p>

                    {/* Includes */}
                    <ul className="space-y-3 flex-1 mb-8">
                      {p.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <Check
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: p.highlight ? 'rgba(255,255,255,0.8)' : 'var(--sage)' }}
                          />
                          <span style={{ color: p.highlight ? 'rgba(255,255,255,0.85)' : 'var(--charcoal-mid)' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="block text-center py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                      style={{
                        backgroundColor: p.highlight ? 'white' : 'var(--sage)',
                        color: p.highlight ? 'var(--sage)' : 'white',
                      }}
                    >
                      {p.cta}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-narrow">
          <FadeIn>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
            >
              <h3 className="text-xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
                A Few Things to Know
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--charcoal-mid)' }}>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} />
                  All consultations are available via video call, telephone, or in person — including evenings and weekends.
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} />
                  No GP referral required — you can self-refer directly.
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} />
                  Many health insurance policies cover dietitian consultations — check with your provider.
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} />
                  Not sure which option is right for you? The free discovery call is the best place to start.
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6" style={{ borderTop: '1px solid var(--sage-pale)' }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: 'var(--sage)' }}
                >
                  Book Free Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:07770769322"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                  style={{ border: '2px solid var(--sage)', color: 'var(--sage)' }}
                >
                  <Phone className="w-4 h-4" />
                  07770 769322
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
