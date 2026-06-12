'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const reasons = [
  {
    number: '01',
    title: 'Specialist, Not Generalist',
    description:
      'With over 30 years of NHS experience and a private practice focused on gut health and diabetes, Jackie brings specialist-level expertise you won\'t find in a general nutritional consultation.',
  },
  {
    number: '02',
    title: 'Practical, Not Prescriptive',
    description:
      'Jackie understands real life — busy schedules, family meals, eating out, and the emotional side of food. Her advice is always achievable, not just clinically correct.',
  },
  {
    number: '03',
    title: 'Evidence-Based, Always',
    description:
      'Every recommendation Jackie makes is grounded in current, peer-reviewed research. No fads, no trends — just what the science actually says, explained clearly.',
  },
  {
    number: '04',
    title: 'Genuinely Personalised',
    description:
      'There\'s no one-size-fits-all approach here. Jackie takes the time to understand your unique history, symptoms, lifestyle, and goals before recommending anything.',
  },
]

export function WhyJackie() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Visual */}
          <FadeIn direction="right">
            <div className="relative lg:pb-10">
              {/* Quote card */}
              <div
                className="rounded-3xl p-8 lg:p-12"
                style={{ backgroundColor: 'var(--sage)', color: 'white' }}
              >
                <div className="text-4xl font-serif leading-none mb-5 opacity-40">"</div>
                <blockquote className="text-base sm:text-xl lg:text-2xl font-serif leading-relaxed italic mb-8">
                  I still get the same satisfaction I had on day one when a client tells me they feel better,
                  that they understand their body, that they can finally eat without fear.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-serif"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Jackie Wilson RD</p>
                    <p className="text-xs opacity-70">Registered Dietitian · 30+ Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Stat — floats on desktop, flows below on mobile */}
              <div
                className="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 bg-white rounded-2xl p-5 shadow-xl self-start"
              >
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-3xl font-serif font-bold" style={{ color: 'var(--terracotta)' }}>100%</span>
                </div>
                <p className="text-xs text-gray-500">of clients would<br/>recommend Jackie</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Reasons */}
          <div>
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
                Why Work With Jackie
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif mb-12 text-balance" style={{ color: 'var(--charcoal)' }}>
                The Difference Expert Dietetic Support Makes
              </h2>
            </FadeIn>

            <div className="space-y-8">
              {reasons.map((r, i) => (
                <FadeIn key={r.number} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div
                      className="text-sm font-bold flex-shrink-0 w-8 mt-1"
                      style={{ color: 'var(--sage-light)' }}
                    >
                      {r.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                        {r.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
                        {r.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5} className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: 'var(--sage)' }}
              >
                Learn more about Jackie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
