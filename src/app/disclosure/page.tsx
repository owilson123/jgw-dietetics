import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclosure',
  description: 'JGW Dietetics disclosure and professional standards information.',
}

export default function DisclosurePage() {
  return (
    <div className="pt-16 pb-16">
      <div className="container-narrow">
        <h1 className="text-5xl font-serif mb-8" style={{ color: 'var(--charcoal)' }}>Disclosure</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
          <p>
            Jackie Wilson is a Specialist Registered Dietitian registered with the Health and Care Professions
            Council (HCPC) and a member of the British Dietetic Association (BDA).
          </p>
          <p>
            All nutrition and dietary advice provided by JGW Dietetics is evidence-based and in accordance with
            current clinical guidelines. Jackie holds professional indemnity insurance.
          </p>
          <p>
            Any links to external resources on this website are provided for information only and do not constitute
            an endorsement of those resources.
          </p>
          <p className="text-sm" style={{ color: 'var(--stone)' }}>Last updated: January 2025</p>
        </div>
      </div>
    </div>
  )
}
