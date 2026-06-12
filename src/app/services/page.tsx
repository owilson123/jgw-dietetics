import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Dietetic Services',
  description:
    'Specialist dietetic services from Jackie Wilson RD — IBS & gut health, Low FODMAP programme, Type 1 & 2 diabetes, lifestyle nutrition coaching, and family nutrition.',
}

const colourMap: Record<string, { bg: string; accent: string }> = {
  sage:       { bg: 'var(--sage-pale)',        accent: 'var(--sage)' },
  eucalyptus: { bg: '#edf4ee',                  accent: 'var(--eucalyptus)' },
  stone:      { bg: 'var(--stone-pale)',        accent: 'var(--stone)' },
  terracotta: { bg: 'var(--terracotta-pale)',   accent: 'var(--terracotta)' },
  gold:       { bg: 'var(--gold-pale)',         accent: 'var(--gold)' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--sage)' }}>
              Areas of Expertise
            </p>
            <h1 className="text-5xl sm:text-6xl font-serif mb-6 text-balance" style={{ color: 'var(--charcoal)' }}>
              Specialist Support for Your Specific Needs
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--charcoal-mid)' }}>
              Whether you're managing a complex digestive condition, living with diabetes, or simply
              wanting expert guidance on your diet — Jackie provides specialist support tailored to you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white"
              style={{ backgroundColor: 'var(--sage)' }}
            >
              Book a Free Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-wide">
          <div className="space-y-8">
            {services.map((service, i) => {
              const colours = colourMap[service.colour] ?? colourMap.sage
              return (
                <FadeIn key={service.slug} delay={i * 0.08}>
                  <div
                    className="rounded-2xl overflow-hidden grid lg:grid-cols-5"
                    style={{ border: '1px solid var(--sage-pale)' }}
                  >
                    {/* Left accent */}
                    <div
                      className="lg:col-span-2 p-10 flex flex-col justify-center min-h-[280px]"
                      style={{ backgroundColor: colours.bg }}
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h2 className="text-3xl font-serif mb-3" style={{ color: 'var(--charcoal)' }}>
                        {service.title}
                      </h2>
                      <p className="text-base font-medium mb-6" style={{ color: colours.accent }}>
                        {service.tagline}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                        style={{ color: colours.accent }}
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Right content */}
                    <div className="lg:col-span-3 p-10 bg-white">
                      <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--charcoal-mid)' }}>
                        {service.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--charcoal)' }}>
                            Common Concerns
                          </h4>
                          <ul className="space-y-2">
                            {service.symptoms.slice(0, 4).map((s) => (
                              <li key={s} className="flex items-start gap-2 text-sm" style={{ color: 'var(--charcoal-mid)' }}>
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: colours.accent }} />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--charcoal)' }}>
                            Typical Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {service.outcomes.slice(0, 4).map((o) => (
                              <li key={o} className="flex items-start gap-2 text-sm" style={{ color: 'var(--charcoal-mid)' }}>
                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colours.accent }} />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
