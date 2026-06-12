'use client'

import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'

export function MobileCTABar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
      style={{ backgroundColor: 'white', borderColor: 'var(--sage-pale)' }}
    >
      <a
        href="tel:07770769322"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold border-r active:bg-gray-50 transition-colors"
        style={{ color: 'var(--sage)', borderColor: 'var(--sage-pale)' }}
      >
        <Phone className="w-4 h-4" />
        Call Jackie
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white active:opacity-90 transition-opacity"
        style={{ backgroundColor: 'var(--sage)' }}
      >
        <Calendar className="w-4 h-4" />
        Book Free Call
      </Link>
    </div>
  )
}
