import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Recipes & Meal Ideas',
  description:
    'Practical, dietitian-approved recipes from Jackie Wilson RD — gut-friendly, low FODMAP, diabetes-friendly, and family meals. Evidence-based eating made enjoyable.',
}

// ─── HOW TO CONNECT JACKIE'S INSTAGRAM ────────────────────────────────────────
// 1. Jackie goes to https://behold.so and creates a FREE account
// 2. Clicks "Connect Instagram" and logs in with her Instagram account
//    (her account must be set to Public — check Settings > Account Privacy)
// 3. Creates a new Feed, customises the layout if desired
// 4. Copies the Feed ID from the Behold dashboard (looks like: aBcD1234EfGh)
// 5. In Vercel: Settings → Environment Variables → Add:
//       Name:  NEXT_PUBLIC_BEHOLD_FEED_ID
//       Value: (paste the Feed ID)
//    → Save and Redeploy
// The live Instagram feed will appear automatically — no code changes needed.
// ─────────────────────────────────────────────────────────────────────────────

const BEHOLD_FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID ?? ''

const recipeCategories = [
  {
    label: 'Low FODMAP',
    description: 'Gut-friendly recipes following the Low FODMAP approach — flavourful and IBS-safe.',
    bg: 'var(--sage-pale)',
    accent: 'var(--sage)',
  },
  {
    label: 'Diabetes-Friendly',
    description: 'Balanced meals designed to support stable blood glucose.',
    bg: 'var(--stone-pale)',
    accent: 'var(--charcoal-mid)',
  },
  {
    label: 'Family Meals',
    description: 'Quick, nutritious dinners the whole family will actually eat.',
    bg: 'var(--terracotta-pale)',
    accent: 'var(--terracotta)',
  },
  {
    label: 'Quick & Simple',
    description: 'Healthy meals that take 30 minutes or less — for real, busy lives.',
    bg: 'var(--gold-pale)',
    accent: 'var(--gold)',
  },
]

export default function RecipesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-10 md:pt-16 md:pb-16" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--sage)' }}>
                Recipes & Meal Ideas
              </p>
              <h1 className="text-4xl sm:text-5xl font-serif mb-5 text-balance" style={{ color: 'var(--charcoal)' }}>
                Practical Recipes from a Specialist Dietitian
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--charcoal-mid)' }}>
                Evidence-based eating doesn't have to be complicated or joyless. Jackie shares
                practical, approachable recipes built around her specialist areas — gut health,
                diabetes, and family nutrition.
              </p>
              <a
                href="https://instagram.com/jgwdietetics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--sage)' }}
              >
                Follow @jgwdietetics on Instagram
                <ArrowRight className="w-4 h-4" />
              </a>
            </FadeIn>

            <FadeIn delay={0.15} className="grid grid-cols-2 gap-3">
              {recipeCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="rounded-xl p-5"
                  style={{ backgroundColor: cat.bg }}
                >
                  <p className="text-sm font-semibold mb-1.5" style={{ color: cat.accent }}>{cat.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
                    {cat.description}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Instagram feed */}
      <InstagramFeed
        feedId={BEHOLD_FEED_ID}
        instagramHandle="jgwdietetics"
        title="All Recipes"
        subtitle="Every recipe Jackie has shared — scroll to browse, or follow on Instagram for new ideas every week."
      />

      {/* Jackie's philosophy */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--sage)' }}>
              Jackie's Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Food Should Be Enjoyed, Not Feared
            </h2>
            <p className="text-lg leading-relaxed mb-5" style={{ color: 'var(--charcoal-mid)' }}>
              One of the most common things Jackie hears is: <em>"I don't know what I'm allowed to eat any more."</em> Her
              recipes answer exactly that — showing that eating well for your condition doesn't mean giving
              up the food you love. It means understanding it.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--charcoal-mid)' }}>
              All recipes draw on 30+ years of clinical experience and a genuine passion for cooking.
              They're practical, family-tested, and grounded in the same evidence-based principles Jackie
              brings to every consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://instagram.com/jgwdietetics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                Follow on Instagram
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold"
                style={{ border: '1.5px solid var(--sage)', color: 'var(--sage)' }}
              >
                Book a Personalised Meal Plan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
