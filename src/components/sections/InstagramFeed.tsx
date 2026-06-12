'use client'

import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

// Inline Instagram SVG — lucide-react doesn't include this icon
function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

interface InstagramFeedProps {
  feedId?: string
  instagramHandle?: string
  title?: string
  subtitle?: string
  showViewMore?: boolean
}

function PlaceholderGrid({ handle }: { handle?: string }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl flex items-center justify-center"
            style={{
              backgroundColor: i % 3 === 0 ? 'var(--sage-pale)' : i % 3 === 1 ? 'var(--terracotta-pale)' : 'var(--stone-pale)',
            }}
          >
            <InstagramIcon className="w-6 h-6 opacity-20" style={{ color: 'var(--sage)' }} />
          </div>
        ))}
      </div>
      <div
        className="rounded-xl p-6 text-sm leading-relaxed"
        style={{ backgroundColor: 'var(--sage-pale)', border: '1px solid rgba(58,95,74,0.15)' }}
      >
        <p className="font-semibold mb-1" style={{ color: 'var(--sage)' }}>
          Instagram feed coming soon
        </p>
        <p style={{ color: 'var(--charcoal-mid)' }}>
          Follow Jackie{handle ? ` @${handle}` : ''} on Instagram for recipes, nutrition tips, and dietetic insights.
        </p>
        {handle && (
          <a
            href={`https://instagram.com/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold"
            style={{ color: 'var(--sage)' }}
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            @{handle}
          </a>
        )}
      </div>
    </div>
  )
}

function BeholdFeed({ feedId }: { feedId: string }) {
  return (
    <>
      <Script src="https://w.behold.so/widget.js" type="module" strategy="lazyOnload" />
      {/* @ts-expect-error: behold-widget is a Behold.so custom element */}
      <behold-widget feed-id={feedId} />
    </>
  )
}

export function InstagramFeed({
  feedId,
  instagramHandle = 'jgwdietetics',
  title = "From Jackie's Kitchen",
  subtitle = "Practical recipes, everyday meal ideas, and nutrition inspiration — straight from Jackie's Instagram.",
  showViewMore = true,
}: InstagramFeedProps) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--off-white)' }}>
      <div className="container-wide">

        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <InstagramIcon className="w-4 h-4" style={{ color: 'var(--sage)' }} />
              <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: 'var(--sage)' }}>
                {instagramHandle ? `@${instagramHandle}` : 'Instagram'}
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif leading-tight" style={{ color: 'var(--charcoal)' }}>
              {title}
            </h2>
            <p className="text-sm mt-2 max-w-lg" style={{ color: 'var(--charcoal-mid)' }}>
              {subtitle}
            </p>
          </div>

          {showViewMore && instagramHandle && (
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold flex-shrink-0 transition-all hover:gap-3"
              style={{ color: 'var(--sage)' }}
            >
              Follow on Instagram
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </FadeIn>

        <FadeIn delay={0.1}>
          {feedId ? <BeholdFeed feedId={feedId} /> : <PlaceholderGrid handle={instagramHandle} />}
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--sage)' }}
          >
            View All Recipes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
