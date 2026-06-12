'use client'

import { FadeIn } from '@/components/ui/FadeIn'

const items = [
  {
    label: 'HCPC Registered',
    sub: 'Health & Care Professions Council',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'BDA Member',
    sub: 'British Dietetic Association',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <path d="M16 4L20 12H28L22 18L24 26L16 22L8 26L10 18L4 12H12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: '30+ Years Experience',
    sub: 'NHS & private practice',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 9v7l4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'NHS Specialist',
    sub: 'Consultant-level expertise',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <path d="M16 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6z" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 11h6M16 8v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M11 19c1-3 9-3 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Free Discovery Call',
    sub: 'No obligation consultation',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <path d="M8 6h16a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 22v4M20 22v4M8 26h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function TrustBar() {
  return (
    <section className="py-12 border-y" style={{ borderColor: 'var(--sage-pale)', backgroundColor: 'white' }}>
      <div className="container-wide">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08} direction="up">
              <div className="flex flex-col items-center text-center gap-3">
                <div style={{ color: 'var(--sage)' }}>{item.icon}</div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>{item.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--charcoal-mid)' }}>{item.sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
