'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { services } from '@/lib/data'

const colourMap: Record<string, { bg: string; border: string; accent: string; tag: string }> = {
  sage:       { bg: 'white',  border: 'var(--sage-pale)',      accent: 'var(--sage)',       tag: 'var(--sage-pale)' },
  eucalyptus: { bg: 'white',  border: '#d8ece0',               accent: 'var(--eucalyptus)', tag: '#edf4ee' },
  stone:      { bg: 'white',  border: 'var(--stone-pale)',     accent: 'var(--charcoal-mid)',tag: 'var(--stone-pale)' },
  terracotta: { bg: 'white',  border: 'var(--terracotta-pale)',accent: 'var(--terracotta)', tag: 'var(--terracotta-pale)' },
  gold:       { bg: 'white',  border: '#f0e6c4',               accent: '#a8822a',           tag: 'var(--gold-pale)' },
}

export function ServicesOverview() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--off-white)' }}>
      <div className="container-wide">

        <FadeIn className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--sage)' }}>
                Areas of Expertise
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif leading-tight" style={{ color: 'var(--charcoal)' }}>
                Specialist Support for<br />Your Specific Needs
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold flex-shrink-0 transition-all hover:gap-3"
              style={{ color: 'var(--sage)' }}
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const c = colourMap[service.colour] ?? colourMap.sage
            return (
              <FadeIn key={service.slug} delay={i * 0.07}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                  style={{
                    backgroundColor: c.bg,
                    border: `1px solid ${c.border}`,
                  }}
                >
                  {/* Icon + label */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: c.tag }}
                    >
                      {service.icon}
                    </div>
                    <div
                      className="opacity-0 group-hover:opacity-100 transition-all duration-200 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: c.tag }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" style={{ color: c.accent }} />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--charcoal-mid)' }}>
                    {service.tagline}
                  </p>

                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: c.accent }}
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
