import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'JGW Dietetics privacy policy — how we handle and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-16 pb-16">
      <div className="container-narrow">
        <h1 className="text-5xl font-serif mb-8" style={{ color: 'var(--charcoal)' }}>Privacy Policy</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-base leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
          <p>
            JGW Dietetics is committed to protecting and respecting your privacy. This policy sets out how we
            collect and use personal information about you in accordance with the UK GDPR and Data Protection Act 2018.
          </p>
          <h2 className="text-2xl font-serif" style={{ color: 'var(--charcoal)' }}>What information we collect</h2>
          <p>
            We may collect your name, contact details, and health information when you make an enquiry or book a consultation.
            This information is used solely to provide the dietetic services you have requested.
          </p>
          <h2 className="text-2xl font-serif" style={{ color: 'var(--charcoal)' }}>How we use your information</h2>
          <p>
            Your personal information is used to provide dietetic consultations, respond to enquiries, and maintain clinical records
            as required by our professional regulatory bodies.
          </p>
          <h2 className="text-2xl font-serif" style={{ color: 'var(--charcoal)' }}>Your rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data at any time. To exercise these rights,
            please contact us at info@jgw-dietetics.co.uk.
          </p>
          <p className="text-sm" style={{ color: 'var(--stone)' }}>Last updated: January 2025</p>
        </div>
      </div>
    </div>
  )
}
