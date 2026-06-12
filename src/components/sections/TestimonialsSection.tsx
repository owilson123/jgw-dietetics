'use client'

import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { testimonials } from '@/lib/data'

const featured = testimonials.filter((t) => t.featured)

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--off-white)' }}>
      <div className="container-wide">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
            Success Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif mb-5" style={{ color: 'var(--charcoal)' }}>
            Real Results for Real People
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
            Hear from the people whose lives have changed through Jackie's guidance.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <div
                className="h-full rounded-2xl p-8 flex flex-col"
                style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
              >
                {/* Result badge */}
                <div
                  className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-semibold mb-6"
                  style={{ backgroundColor: 'var(--sage-pale)', color: 'var(--sage)' }}
                >
                  ✓ {t.result}
                </div>

                <Quote className="w-6 h-6 mb-4 opacity-30" style={{ color: 'var(--sage)' }} />

                <blockquote className="text-base leading-relaxed flex-1 mb-6 font-medium" style={{ color: 'var(--charcoal)' }}>
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--sage-pale)' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif font-bold flex-shrink-0"
                    style={{ backgroundColor: 'var(--sage-pale)', color: 'var(--sage)' }}
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

        <FadeIn delay={0.5} className="text-center mt-12">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
            style={{ color: 'var(--sage)' }}
          >
            Read all success stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
