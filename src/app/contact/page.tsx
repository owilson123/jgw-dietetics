import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ContactForm } from '@/components/sections/ContactForm'
import { FAQSection } from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Book a free discovery call or consultation with Jackie Wilson RD. Available online, by phone, and in person across the South West.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-16" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--sage)' }}>
                Get in Touch
              </p>
              <h1 className="text-5xl sm:text-6xl font-serif mb-6 text-balance" style={{ color: 'var(--charcoal)' }}>
                Let's Talk About Your Health Goals
              </h1>
              <p className="text-xl leading-relaxed mb-10" style={{ color: 'var(--charcoal-mid)' }}>
                The first step is a free 15-minute discovery call. No obligation — just a conversation
                about where you are and how Jackie can help.
              </p>

              {/* Contact details */}
              <div className="space-y-5 mb-10">
                {[
                  { icon: Phone, label: '07770 769322', href: 'tel:07770769322', sub: 'Call or text' },
                  { icon: Mail, label: 'info@jgw-dietetics.co.uk', href: 'mailto:info@jgw-dietetics.co.uk', sub: 'Email' },
                  { icon: MapPin, label: 'Clevedon, North Somerset', href: null, sub: 'South West England' },
                  { icon: Clock, label: 'Including evenings & weekends', href: null, sub: 'Flexible availability' },
                ].map(({ icon: Icon, label, href, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--sage-pale)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--sage)' }} />
                    </div>
                    <div>
                      {href ? (
                        <a
                          href={href}
                          className="text-base font-semibold hover:underline"
                          style={{ color: 'var(--charcoal)' }}
                        >
                          {label}
                        </a>
                      ) : (
                        <p className="text-base font-semibold" style={{ color: 'var(--charcoal)' }}>{label}</p>
                      )}
                      <p className="text-sm" style={{ color: 'var(--charcoal-mid)' }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: 'var(--sage-pale)', border: '1px solid rgba(74,103,65,0.15)' }}
              >
                <h3 className="font-semibold mb-4" style={{ color: 'var(--sage)' }}>
                  What to expect from your discovery call:
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'A warm, relaxed 15-minute conversation',
                    'Discussion of your health goals and concerns',
                    'An honest overview of how Jackie can help',
                    'Recommendation of the most suitable service',
                    'Absolutely no pressure to commit',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--charcoal-mid)' }}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.2} direction="left">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
