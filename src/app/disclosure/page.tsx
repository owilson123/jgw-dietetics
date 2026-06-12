import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclosure & Privacy Policy',
  description: 'JGW Dietetics disclosure, professional standards, and privacy policy.',
}

export default function DisclosurePage() {
  return (
    <div className="pt-16 pb-20" style={{ backgroundColor: 'var(--off-white)' }}>
      <div className="container-narrow">

        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
            Legal & Professional Standards
          </p>
          <h1 className="text-5xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
            Disclosure & Privacy Policy
          </h1>
          <p className="text-base" style={{ color: 'var(--charcoal-mid)' }}>
            Last updated: October 2019
          </p>
        </div>

        <div className="space-y-12">

          {/* Disclosure */}
          <div
            className="rounded-2xl p-8 lg:p-10"
            style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
          >
            <h2 className="text-2xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Disclosure
            </h2>
            <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                  Professional Registration & Standards
                </h3>
                <p>
                  Jackie Wilson is a Specialist Registered Dietitian regulated by the Health and Care Professions
                  Council (HCPC) and a member of the British Dietetic Association (BDA). She is committed to the
                  ethical principles of the RDs4DisclosureUK pledge, including a commitment not to provide
                  misleading information or make unjustifiable product claims.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                  Sponsorship & Advertising
                </h3>
                <p>
                  Any freebies, samples, or payment received in connection with posts or product reviews will be
                  clearly disclosed. This site follows IAB (Internet Advertising Bureau) guidelines for sponsorship
                  and advertising. Sponsored content on social media is identified with #ad or #spon. There are
                  currently no advertisements on this website.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                  Recipes
                </h3>
                <p>
                  Recipes on this site are labelled by dietary classification (e.g. gluten-free, low FODMAP) as a
                  guide only. Always verify ingredients independently and follow the personal advice provided to you
                  by your dietitian or doctor.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                  Website Information Disclaimer
                </h3>
                <p>
                  The information on this website is aimed at the adult general public and should not be used as a
                  substitute for personally tailored advice from a qualified healthcare professional. If you have a
                  medical condition or specific dietary needs, please seek individual guidance from your GP or
                  dietitian.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                  Employment
                </h3>
                <p>
                  Jackie Wilson works part-time for the NHS alongside her private practice. The views and opinions
                  expressed on this website are solely her own and do not represent those of her NHS employer.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div
            className="rounded-2xl p-8 lg:p-10"
            style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
          >
            <h2 className="text-2xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Privacy Policy
            </h2>
            <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                  How We Use Your Data
                </h3>
                <p>
                  Personal information is collected only with your consent and is used solely for the purpose of
                  providing dietetic services. Data is held securely using encrypted electronic systems and standard
                  operating procedures in compliance with the UK GDPR and Data Protection Act 2018.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                  Sharing Your Data
                </h3>
                <p>
                  We will not distribute, sell, or lease your personal information to third parties without your
                  explicit permission, except where required by law.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                  Your Rights
                </h3>
                <p>
                  You have the right to request a copy of the personal data held about you, to request corrections,
                  or to withdraw your consent at any time. To exercise any of these rights, please contact Jackie
                  Wilson directly at{' '}
                  <a href="mailto:info@jgw-dietetics.co.uk" className="underline underline-offset-2" style={{ color: 'var(--sage)' }}>
                    info@jgw-dietetics.co.uk
                  </a>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
