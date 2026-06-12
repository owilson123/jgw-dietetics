import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { services } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
  }
}

const colourMap: Record<string, { bg: string; accent: string; light: string }> = {
  sage:       { bg: 'var(--sage-pale)',       accent: 'var(--sage)',       light: 'var(--sage-pale)' },
  eucalyptus: { bg: '#edf4ee',                 accent: 'var(--eucalyptus)', light: '#edf4ee' },
  stone:      { bg: 'var(--stone-pale)',       accent: 'var(--stone)',      light: 'var(--stone-pale)' },
  terracotta: { bg: 'var(--terracotta-pale)',  accent: 'var(--terracotta)', light: 'var(--terracotta-pale)' },
  gold:       { bg: 'var(--gold-pale)',        accent: 'var(--gold)',       light: 'var(--gold-pale)' },
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const colours = colourMap[service.colour] ?? colourMap.sage
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-16" style={{ backgroundColor: colours.bg }}>
        <div className="container-wide">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium mb-8 opacity-70 hover:opacity-100 transition-opacity"
              style={{ color: colours.accent }}
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: colours.light }}>
                <ServiceIcon name={service.icon} className="w-7 h-7" style={{ color: colours.accent }} />
              </div>
              <h1 className="text-5xl sm:text-6xl font-serif mb-5 text-balance" style={{ color: 'var(--charcoal)' }}>
                {service.title}
              </h1>
              <p className="text-xl font-medium mb-6" style={{ color: colours.accent }}>
                {service.tagline}
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--charcoal-mid)' }}>
                {service.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white"
                style={{ backgroundColor: colours.accent }}
              >
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'white', border: `1px solid ${colours.accent}20` }}
              >
                <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--charcoal)' }}>
                  Common Concerns We Address
                </h3>
                <ul className="space-y-4">
                  {service.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: colours.accent }}
                      />
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How Jackie helps */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-narrow">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: colours.accent }}>
              Jackie's Approach
            </p>
            <h2 className="text-4xl font-serif mb-8" style={{ color: 'var(--charcoal)' }}>
              How Jackie Helps
            </h2>
            <p className="text-lg leading-relaxed mb-12" style={{ color: 'var(--charcoal-mid)' }}>
              {service.howHelps}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="text-2xl font-serif mb-8" style={{ color: 'var(--charcoal)' }}>
              What You Can Expect to Achieve
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 p-5 rounded-xl"
                  style={{ backgroundColor: colours.bg }}
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colours.accent }} />
                  <p className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>{outcome}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ backgroundColor: colours.bg }}
      >
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif mb-5" style={{ color: 'var(--charcoal)' }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--charcoal-mid)' }}>
              Book a free 15-minute discovery call to discuss how Jackie can help with {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white"
                style={{ backgroundColor: colours.accent }}
              >
                Book Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold"
                style={{ border: `2px solid ${colours.accent}`, color: colours.accent }}
              >
                View Programmes & Pricing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-wide">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-serif" style={{ color: 'var(--charcoal)' }}>
              Other Services
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s, i) => {
              const c = colourMap[s.colour] ?? colourMap.sage
              return (
                <FadeIn key={s.slug} delay={i * 0.1}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block h-full rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ backgroundColor: c.bg }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'white' }}>
                      <ServiceIcon name={s.icon} className="w-5 h-5" style={{ color: c.accent }} />
                    </div>
                    <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>{s.title}</h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--charcoal-mid)' }}>{s.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all" style={{ color: c.accent }}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
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
