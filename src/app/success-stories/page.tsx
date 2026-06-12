import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { testimonials } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Success Stories',
  description:
    'Read what clients say about their experience with Jackie Wilson RD — real results for IBS, gut health, diabetes management, and dietetic support.',
}

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-10 md:pt-16 md:pb-16" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--sage)' }}>
              Client Testimonials
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 text-balance" style={{ color: 'var(--charcoal)' }}>
              Real Results for Real People
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
              The greatest measure of Jackie's work is in the lives of the people she's helped.
              These are their stories.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 border-y" style={{ borderColor: 'var(--sage-pale)', backgroundColor: 'white' }}>
        <div className="container-wide">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {[
              { stat: '30+', label: 'Years helping clients' },
              { stat: '100%', label: 'Would recommend Jackie' },
              { stat: '12+', label: 'Five-star testimonials' },
            ].map((s) => (
              <FadeIn key={s.stat}>
                <div>
                  <p className="text-4xl font-serif mb-1" style={{ color: 'var(--sage)' }}>{s.stat}</p>
                  <p className="text-sm" style={{ color: 'var(--charcoal-mid)' }}>{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.08}>
                <div
                  className="h-full rounded-2xl p-8 flex flex-col"
                  style={{ backgroundColor: 'var(--off-white)', border: '1px solid var(--sage-pale)' }}
                >
                  {/* Result badge */}
                  <div
                    className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                    style={{ backgroundColor: 'var(--sage-pale)', color: 'var(--sage)' }}
                  >
                    •  {t.result}
                  </div>

                  <Quote className="w-5 h-5 mb-4 opacity-25" style={{ color: 'var(--sage)' }} />

                  <blockquote
                    className="text-base leading-relaxed flex-1 mb-6"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    "{t.quote}"
                  </blockquote>

                  {/* Stars */}
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-4 h-4" fill="var(--gold)" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--sage-pale)' }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif font-bold flex-shrink-0"
                      style={{ backgroundColor: 'var(--sage)', color: 'white' }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>
                        {t.name}{t.age ? `, ${t.age}` : ''}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--charcoal-mid)' }}>{t.condition}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Add your story CTA */}
      <section className="py-16" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
              Your Story Could Be Next
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--charcoal-mid)' }}>
              Hundreds of people have improved their health and quality of life with Jackie's support.
              Take the first step today.
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

      <FinalCTA />
    </>
  )
}
