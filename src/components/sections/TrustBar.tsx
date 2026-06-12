'use client'

import { FadeIn } from '@/components/ui/FadeIn'

const items = [
  {
    label: 'HCPC Registered',
    sub: 'Health & Care Professions Council',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="var(--sage-pale)"/>
        <path d="M12 20l5 5 11-10" stroke="var(--sage)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'BDA Member',
    sub: 'British Dietetic Association',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="var(--sage-pale)"/>
        <path d="M20 10l2.5 6h6.5l-5 4 2 6.5L20 23l-6 3.5 2-6.5-5-4H17.5L20 10z" stroke="var(--sage)" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: '30+ Years Experience',
    sub: 'NHS & private practice',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="var(--sage-pale)"/>
        <circle cx="20" cy="20" r="9" stroke="var(--sage)" strokeWidth="1.8"/>
        <path d="M20 13v7l4.5 4.5" stroke="var(--sage)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'NHS Specialist',
    sub: 'Consultant-level expertise',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="var(--sage-pale)"/>
        <rect x="12" y="12" width="16" height="16" rx="2" stroke="var(--sage)" strokeWidth="1.8"/>
        <path d="M20 15v10M15 20h10" stroke="var(--sage)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Free Discovery Call',
    sub: 'No obligation, no pressure',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect width="40" height="40" rx="10" fill="var(--sage-pale)"/>
        <path d="M14 13h12a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 3v-3h-4a2 2 0 01-2-2v-8a2 2 0 012-2z" stroke="var(--sage)" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function TrustBar() {
  return (
    <section
      className="py-10 border-y"
      style={{ borderColor: 'var(--sage-pale)', backgroundColor: 'white' }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.07} direction="up">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--charcoal)' }}>
                    {item.label}
                  </p>
                  <p className="text-xs mt-0.5 leading-tight" style={{ color: 'var(--stone)' }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
