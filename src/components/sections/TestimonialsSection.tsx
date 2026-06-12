'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { testimonials } from '@/lib/data'

const featured = testimonials.filter((t) => t.featured)

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--charcoal)' }}>
      <div className="container-wide">

        <FadeIn className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--eucalyptus)' }}>
                Client Outcomes
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif text-white leading-tight">
                Real Results for<br />Real People
              </h2>
            </div>
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-sm font-semibold flex-shrink-0 transition-all hover:gap-3"
              style={{ color: 'var(--eucalyptus)' }}
            >
              All testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <div
                className="h-full rounded-xl p-7 flex flex-col"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-4 h-4" fill="var(--gold)" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-base leading-relaxed flex-1 mb-6 font-medium" style={{ color: 'rgba(255,255,255,0.88)' }}>
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-serif font-bold flex-shrink-0"
                      style={{ backgroundColor: 'var(--sage)', color: 'white' }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.name}{t.age ? `, ${t.age}` : ''}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--stone)' }}>{t.condition}</p>
                    </div>
                  </div>

                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0"
                    style={{ backgroundColor: 'rgba(122,158,126,0.2)', color: 'var(--eucalyptus)' }}
                  >
                    ✓ {t.result}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
