import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyJackie } from '@/components/sections/WhyJackie'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { PricingSnapshot } from '@/components/sections/PricingSnapshot'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

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
      <FAQSection />
      <FinalCTA />
    </>
  )
}
