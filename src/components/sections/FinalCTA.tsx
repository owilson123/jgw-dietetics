'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export function FinalCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--sage)' }}>
      <div className="container-narrow text-center text-white">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-6 opacity-70">
            Ready to Start?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 text-balance leading-tight">
            Take the First Step Towards Better Health
          </h2>
          <p className="text-lg leading-relaxed mb-10 opacity-85 max-w-xl mx-auto">
            A 15-minute free discovery call costs nothing and could change everything.
            Let's talk about your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white transition-all hover:opacity-95 hover:shadow-xl hover:-translate-y-0.5"
              style={{ color: 'var(--sage)' }}
            >
              Book Free Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:07770769322"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-white/10"
              style={{ border: '2px solid rgba(255,255,255,0.4)', color: 'white' }}
            >
              <Phone className="w-4 h-4" />
              07770 769322
            </a>
          </div>

          <p className="text-sm opacity-60">
            Available for online consultations evenings & weekends
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
