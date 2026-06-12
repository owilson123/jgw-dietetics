import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Nutrition Resources',
  description:
    'Free nutrition resources from Jackie Wilson RD — IBS guides, FODMAP information, diabetes education, recipes, and evidence-based nutrition articles.',
}

const categories = [
  {
    title: 'IBS & Gut Health',
    description: 'Evidence-based guidance on managing IBS, understanding food triggers, and improving digestive health.',
    icon: '🌿',
    colour: 'var(--sage-pale)',
    accent: 'var(--sage)',
    articles: [
      { title: 'Understanding IBS: A Complete Guide', time: '8 min read' },
      { title: 'The Low FODMAP Diet Explained', time: '10 min read' },
      { title: '5 Common IBS Trigger Foods (and What to Eat Instead)', time: '5 min read' },
      { title: 'Managing IBS at Work and Socially', time: '6 min read' },
    ],
  },
  {
    title: 'Diabetes Nutrition',
    description: 'Practical nutrition guidance for managing Type 1 and Type 2 diabetes through diet.',
    icon: '💙',
    colour: '#edf4f8',
    accent: 'var(--eucalyptus)',
    articles: [
      { title: 'Carbohydrate Counting for Type 1 Diabetes', time: '9 min read' },
      { title: 'The Glycaemic Index: What It Really Means', time: '7 min read' },
      { title: 'Managing Blood Sugar Through Food Choices', time: '8 min read' },
      { title: 'Exercise and Blood Glucose: A Dietitian\'s Guide', time: '6 min read' },
    ],
  },
  {
    title: 'Healthy Eating',
    description: 'Practical, jargon-free guidance on building a healthier relationship with food.',
    icon: '✨',
    colour: 'var(--terracotta-pale)',
    accent: 'var(--terracotta)',
    articles: [
      { title: 'Building Balanced Meals: The Simple Truth', time: '5 min read' },
      { title: 'How to Eat Mindfully Without Dieting', time: '7 min read' },
      { title: 'Family Nutrition: Feeding Fussy Eaters', time: '8 min read' },
      { title: 'Reading Food Labels: What Actually Matters', time: '6 min read' },
    ],
  },
  {
    title: 'Recipes',
    description: 'Nutritious, practical recipes that taste great and support your health goals.',
    icon: '🥗',
    colour: 'var(--gold-pale)',
    accent: 'var(--gold)',
    articles: [
      { title: 'Low FODMAP Meal Prep for the Week', time: '12 min read' },
      { title: 'Quick Gut-Friendly Lunches', time: '5 min read' },
      { title: 'Diabetic-Friendly Family Dinners', time: '10 min read' },
      { title: 'High-Iron Meals for Energy', time: '7 min read' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-16" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--sage)' }}>
              Free Resources
            </p>
            <h1 className="text-5xl sm:text-6xl font-serif mb-6 text-balance" style={{ color: 'var(--charcoal)' }}>
              Evidence-Based Nutrition Knowledge
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
              Free articles, guides, and recipes from Jackie — practical nutrition knowledge based on
              current evidence and 30+ years of clinical experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-wide">
          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <FadeIn key={cat.title} delay={ci * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid var(--sage-pale)' }}
                >
                  {/* Category header */}
                  <div className="p-8" style={{ backgroundColor: cat.colour }}>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{cat.icon}</span>
                      <div>
                        <h2 className="text-2xl font-serif" style={{ color: 'var(--charcoal)' }}>
                          {cat.title}
                        </h2>
                        <p className="text-sm mt-1" style={{ color: 'var(--charcoal-mid)' }}>
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Articles grid */}
                  <div className="p-8 bg-white grid sm:grid-cols-2 gap-4">
                    {cat.articles.map((article) => (
                      <div
                        key={article.title}
                        className="flex items-start justify-between gap-4 p-4 rounded-xl cursor-pointer group transition-all hover:shadow-sm"
                        style={{ backgroundColor: 'var(--off-white)', border: '1px solid var(--sage-pale)' }}
                      >
                        <div>
                          <p className="text-sm font-semibold mb-1 group-hover:underline" style={{ color: 'var(--charcoal)' }}>
                            {article.title}
                          </p>
                          <p className="text-xs" style={{ color: 'var(--charcoal-mid)' }}>{article.time}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" style={{ color: cat.accent }} />
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <p className="text-base mb-4" style={{ color: 'var(--charcoal-mid)' }}>
              Want personalised guidance rather than general articles?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white"
              style={{ backgroundColor: 'var(--sage)' }}
            >
              Book a Free Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
