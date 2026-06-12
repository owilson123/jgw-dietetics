import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Shield } from 'lucide-react'
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
      <section className="pt-10 pb-10 md:pt-16 md:pb-16" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--sage)' }}>
                Get in Touch
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 text-balance" style={{ color: 'var(--charcoal)' }}>
                Let's Talk About Your Health Goals
              </h1>
              <p className="text-xl leading-relaxed mb-10" style={{ color: 'var(--charcoal-mid)' }}>
                The first step is a free 20-minute discovery call. No obligation — just a conversation
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
                    'A warm, relaxed 20-minute conversation',
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

      {/* GDPR / Data Protection Notice */}
      <section className="py-12" style={{ backgroundColor: 'white', borderTop: '1px solid var(--sage-pale)' }}>
        <div className="container-wide">
          <FadeIn>
            <div
              className="rounded-2xl p-7 lg:p-8"
              style={{ backgroundColor: 'var(--off-white)', border: '1px solid var(--sage-pale)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--sage-pale)' }}
                >
                  <Shield className="w-4 h-4" style={{ color: 'var(--sage)' }} />
                </div>
                <h2 className="text-lg font-serif" style={{ color: 'var(--charcoal)' }}>
                  Data Protection & Your Privacy
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>

                <div>
                  <p className="font-semibold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--charcoal)' }}>
                    How we use your data
                  </p>
                  <p>
                    In compliance with the General Data Protection Regulation (GDPR), we will keep your
                    contact details for no longer than one year following our last correspondence, or until
                    you request us to delete them.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--charcoal)' }}>
                    Who your information is shared with
                  </p>
                  <p>
                    We will not distribute, sell or lease your personal information to third parties unless
                    we have your strict permission or are required by law to do so.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--charcoal)' }}>
                    Security measures
                  </p>
                  <p>
                    We are committed to ensuring your information is secure. We have put in place encrypted
                    electronic systems and managerial procedures to safeguard and secure the information
                    we collect.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--charcoal)' }}>
                    Your rights
                  </p>
                  <p>
                    You may request to access, correct, or be deleted from our files at any time by
                    contacting Jackie at{' '}
                    <a
                      href="mailto:info@jgw-dietetics.co.uk"
                      className="underline underline-offset-2"
                      style={{ color: 'var(--sage)' }}
                    >
                      info@jgw-dietetics.co.uk
                    </a>
                    . To unsubscribe from any communications, reply to any email asking to be removed.
                    For further details see our{' '}
                    <Link
                      href="/disclosure"
                      className="underline underline-offset-2"
                      style={{ color: 'var(--sage)' }}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
