'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { services } from '@/lib/data'

const colourMap: Record<string, { bg: string; accent: string }> = {
  sage:       { bg: 'var(--sage-pale)',        accent: 'var(--sage)' },
  eucalyptus: { bg: '#edf4ee',                  accent: 'var(--eucalyptus)' },
  stone:      { bg: 'var(--stone-pale)',        accent: 'var(--stone)' },
  terracotta: { bg: 'var(--terracotta-pale)',   accent: 'var(--terracotta)' },
  gold:       { bg: 'var(--gold-pale)',         accent: 'var(--gold)' },
}

export function ServicesOverview() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--off-white)' }}>
      <div className="container-wide">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
            Areas of Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif mb-5" style={{ color: 'var(--charcoal)' }}>
            Specialist Support for Your Specific Needs
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
            Every person is different. Jackie provides specialist dietetic support across a range of conditions — always personalised, always evidence-based.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colours = colourMap[service.colour] ?? colourMap.sage
            return (
              <FadeIn key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: colours.bg }}
                >
                  <div
                    className="text-3xl mb-4 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'white' }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--charcoal-mid)' }}>
                    {service.tagline}
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    style={{ color: colours.accent }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.5} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: 'var(--sage)' }}
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
