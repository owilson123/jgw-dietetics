'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { steps } from '@/lib/data'

export function HowItWorks() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--charcoal)' }}>
      <div className="container-wide">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--eucalyptus)' }}>
            Simple Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif mb-5 text-white">
            Getting Started is Easy
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--stone)' }}>
            From first contact to lasting change — a clear, supported journey every step of the way.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
              <div className="relative">
                {/* Connector line for desktop */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(100%+1rem)] w-[calc(100%-4rem)] h-px opacity-20"
                    style={{ backgroundColor: 'var(--eucalyptus)' }}
                  />
                )}
                <div
                  className="text-5xl font-serif font-bold mb-4 leading-none"
                  style={{ color: 'rgba(122, 158, 126, 0.4)' }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: 'var(--sage)' }}
          >
            Book Your Free Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
