import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'About Jackie Wilson',
  description:
    'Meet Jackie Wilson — Registered Dietitian with 30+ years of NHS and private experience, specialising in IBS, gut health, diabetes, and specialist dietetic care in the South West.',
}

const timeline = [
  {
    year: 'Early 1990s',
    title: 'Qualified as a Registered Dietitian',
    description:
      'Jackie completed her graduate qualification in Nutrition and Dietetics — the only legally recognised nutrition qualification in the UK.',
  },
  {
    year: '1993–Present',
    title: 'NHS Specialist Dietitian',
    description:
      'Building specialist expertise in gastroenterology and diabetes, working alongside consultants and GP practices across the South West.',
  },
  {
    year: '2000s',
    title: 'IBS & FODMAP Specialist',
    description:
      'As the evidence base for Low FODMAP therapy developed, Jackie became one of the UK\'s most experienced practitioners of this approach.',
  },
  {
    year: '2010s',
    title: 'Founded JGW Dietetics',
    description:
      'Launched her private practice to offer the specialist NHS-quality expertise directly to individuals who needed flexible, personal support.',
  },
  {
    year: 'Today',
    title: '30+ Years and Still Passionate',
    description:
      'Jackie continues to combine NHS specialist work with her private practice — bringing the full depth of her experience to every client.',
  },
]

const values = [
  {
    title: 'Evidence First',
    description: 'Every recommendation is grounded in current, peer-reviewed research. No trends, no fads.',
  },
  {
    title: 'Practical Always',
    description: 'Brilliant advice that\'s impossible to follow is useless. Jackie makes it achievable.',
  },
  {
    title: 'Genuinely Personal',
    description: 'Two people with the same diagnosis may need completely different support. Jackie recognises this.',
  },
  {
    title: 'Warmly Human',
    description: 'Food is personal, emotional, and cultural. Jackie meets you where you are.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-16 pb-16"
        style={{ backgroundColor: 'var(--off-white)' }}
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--sage)' }}>
                About Jackie
              </p>
              <h1 className="text-5xl sm:text-6xl font-serif mb-6 text-balance" style={{ color: 'var(--charcoal)' }}>
                Three Decades of Helping People Feel Better
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--charcoal-mid)' }}>
                Jackie Wilson is a Specialist Registered Dietitian with over 30 years of clinical experience
                in the NHS and private practice. She brings rare depth of expertise to every consultation,
                alongside a genuinely warm and practical approach.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['HCPC Registered', 'BDA Member', 'NHS Specialist', '30+ Years Experience'].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: 'var(--sage-pale)', color: 'var(--sage)' }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {c}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[300px]">
                  <div
                    className="rounded-2xl overflow-hidden shadow-xl"
                    style={{ border: '1px solid var(--sage-pale)' }}
                  >
                    {/* Photo centred on a sage-pale bg so it never needs to stretch */}
                    <div
                      className="flex items-end justify-center pt-10 px-10"
                      style={{ backgroundColor: 'var(--sage-pale)' }}
                    >
                      <Image
                        src="/images/jackie-wilson.jpg"
                        alt="Jackie Wilson — Specialist Registered Dietitian"
                        width={225}
                        height={300}
                        className="rounded-t-xl shadow-md"
                        style={{ width: '200px', height: 'auto' }}
                        priority
                      />
                    </div>
                    <div className="px-6 py-5" style={{ backgroundColor: 'var(--sage)' }}>
                      <p className="text-white font-serif text-xl">Jackie Wilson RD</p>
                      <p className="text-white/70 text-xs tracking-wider uppercase mt-0.5">
                        Specialist Registered Dietitian · 30+ Years
                      </p>
                    </div>
                  </div>
                  {/* Decorative offset shadow */}
                  <div
                    className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-2xl -z-10"
                    style={{ backgroundColor: 'var(--sage-pale)' }}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-narrow">
          <FadeIn>
            <h2 className="text-4xl font-serif mb-8" style={{ color: 'var(--charcoal)' }}>
              The Person Behind the Practice
            </h2>
          </FadeIn>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
            <FadeIn>
              <p>
                Jackie didn't become a dietitian by accident. From early in her career, she was drawn to the
                complexity of how nutrition affects people's lives — not just their bodies, but their confidence,
                their relationships with food, their quality of life.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                Over 30 years working within the NHS, she developed specialist expertise in two areas that are
                often poorly understood and inadequately supported: gut health and IBS, and diabetes management.
                She has seen the transformation that the right guidance can bring — and the frustration people
                experience when they don't get it.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                "I still get the same satisfaction I had on day one," she says. "When a client tells me they
                feel better, that they understand their body, that they can finally eat without fear — that
                never gets old."
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                As a parent herself, Jackie understands the complexity of family nutrition — the competing
                tastes, the time pressures, the challenge of helping teenagers develop healthy habits. Her
                advice is always grounded in real life, not ideal conditions.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>
                She still practises part-time for the NHS, ensuring she remains at the cutting edge of
                clinical dietetics — and bringing that expertise directly to her private clients.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-wide">
          <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
              Career Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif" style={{ color: 'var(--charcoal)' }}>
              30 Years of Expertise
            </h2>
          </FadeIn>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-7 top-0 bottom-0 w-px"
              style={{ backgroundColor: 'var(--sage-pale)' }}
            />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className="flex gap-8 relative">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-center leading-tight z-10"
                      style={{ backgroundColor: 'var(--sage)', color: 'white' }}
                    >
                      {item.year.split('–')[0].replace(/Early |s/, '')}
                    </div>
                    <div className="pt-3 pb-2">
                      <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: 'var(--sage)' }}>
                        {item.year}
                      </p>
                      <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container-wide">
          <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
              Approach & Values
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif" style={{ color: 'var(--charcoal)' }}>
              How Jackie Works
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div
                  className="h-full rounded-2xl p-8"
                  style={{ backgroundColor: 'var(--off-white)', border: '1px solid var(--sage-pale)' }}
                >
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center" style={{ backgroundColor: 'var(--sage-pale)' }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--sage)' }} />
                  </div>
                  <h3 className="text-lg font-serif mb-3" style={{ color: 'var(--charcoal)' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
