'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About Jackie' },
  { href: '/services', label: 'Services' },
  { href: '/programmes', label: 'Programmes & Pricing' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100' : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-xl font-serif tracking-tight"
            style={{ color: 'var(--sage)' }}
          >
            JGW Dietetics
          </span>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--charcoal-mid)' }}>
            Jackie Wilson RD
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-sage-600 ${
                pathname === link.href
                  ? 'text-sage-700 font-semibold'
                  : 'text-charcoal/80 hover:text-charcoal'
              }`}
              style={{
                color: pathname === link.href ? 'var(--sage)' : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:07770769322"
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--charcoal-mid)' }}
          >
            <Phone className="w-4 h-4" />
            07770 769322
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: 'var(--sage)' }}
          >
            Book Free Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X className="w-6 h-6" style={{ color: 'var(--charcoal)' }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: 'var(--charcoal)' }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-stone-100 shadow-lg"
          >
            <nav className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium py-2 border-b border-stone-50"
                  style={{ color: pathname === link.href ? 'var(--sage)' : 'var(--charcoal)' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 py-3 rounded-full text-center text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                Book Free Discovery Call
              </Link>
              <a
                href="tel:07770769322"
                className="flex items-center justify-center gap-2 text-sm font-medium"
                style={{ color: 'var(--charcoal-mid)' }}
              >
                <Phone className="w-4 h-4" />
                07770 769322
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
