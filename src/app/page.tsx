import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyJackie } from '@/components/sections/WhyJackie'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { PricingSnapshot } from '@/components/sections/PricingSnapshot'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

// Set your Behold.so feed ID here once Jackie has connected her Instagram
const BEHOLD_FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID ?? ''

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyJackie />
      <TestimonialsSection />
      <HowItWorks />
      <PricingSnapshot />
      <InstagramFeed feedId={BEHOLD_FEED_ID} instagramHandle="jgwdietetics" />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
