'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { programmes } from '@/lib/data'

const snapshot = programmes.filter((p) => ['discovery', 'ibs-programme', 'initial'].includes(p.id))

export function PricingSnapshot() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-wide">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
            Investment in Your Health
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif mb-5" style={{ color: 'var(--charcoal)' }}>
            Transparent, Fair Pricing
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
            From a free discovery call to a comprehensive coaching programme — there's an option for every starting point.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {snapshot.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div
                className={`h-full rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  p.highlight ? 'text-white' : ''
                }`}
                style={{
                  backgroundColor: p.highlight ? 'var(--sage)' : 'var(--off-white)',
                  border: p.highlight ? 'none' : '1px solid var(--sage-pale)',
                  position: 'relative',
                }}
              >
                {p.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--terracotta)' }}
                  >
                    {p.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className="text-xl font-serif mb-1"
                    style={{ color: p.highlight ? 'white' : 'var(--charcoal)' }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : 'var(--charcoal-mid)' }}
                  >
                    {p.tagline}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl font-serif font-bold"
                      style={{ color: p.highlight ? 'white' : 'var(--charcoal)' }}
                    >
                      {p.price}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: p.highlight ? 'rgba(255,255,255,0.6)' : 'var(--charcoal-mid)' }}
                    >
                      · {p.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {p.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
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

                <Link
                  href="/contact"
                  className="block text-center py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: p.highlight ? 'white' : 'var(--sage)',
                    color: p.highlight ? 'var(--sage)' : 'white',
                  }}
                >
                  {p.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="text-center">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
            style={{ color: 'var(--sage)' }}
          >
            View all programmes and pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
