'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About Jackie' },
  { href: '/services', label: 'Services' },
  { href: '/programmes', label: 'Pricing' },
  { href: '/success-stories', label: 'Testimonials' },
  { href: '/disclosure', label: 'Disclosure & Privacy' },
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
    <>
      {/* Top contact ribbon */}
      <div
        className="hidden lg:block w-full"
        style={{ backgroundColor: 'var(--charcoal)', color: 'var(--stone)' }}
      >
        <div className="container-wide flex items-center justify-between py-2.5 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: 'var(--eucalyptus)' }} />
              HCPC Registered Dietitian
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: 'var(--eucalyptus)' }} />
              BDA Member
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: 'var(--eucalyptus)' }} />
              30+ Years NHS Experience
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:07770769322"
              className="flex items-center gap-1.5 transition-colors hover:text-white font-medium"
            >
              <Phone className="w-3 h-3" />
              07770 769322
            </a>
            <a
              href="mailto:info@jgw-dietetics.co.uk"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="w-3 h-3" />
              info@jgw-dietetics.co.uk
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
            : 'bg-white border-b'
        }`}
        style={{ borderColor: scrolled ? 'transparent' : 'var(--sage-pale)' }}
      >
        <div className="container-wide flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-2xl font-serif tracking-tight" style={{ color: 'var(--sage)' }}>
              JGW Dietetics
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase mt-0.5" style={{ color: 'var(--stone)' }}>
              Jackie Wilson · Registered Dietitian
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: pathname === link.href ? 'var(--sage)' : 'var(--charcoal-mid)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--sage)',
                    width: pathname === link.href ? '100%' : '0%',
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:07770769322"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-sage-50"
              style={{ color: 'var(--sage)', backgroundColor: 'var(--sage-pale)' }}
            >
              <Phone className="w-3.5 h-3.5" />
              07770 769322
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-md hover:-translate-y-px"
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
              <X className="w-5 h-5" style={{ color: 'var(--charcoal)' }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: 'var(--charcoal)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: 'var(--sage-pale)', backgroundColor: 'white' }}
            >
              <nav className="container-wide py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium py-3 px-3 rounded-lg transition-colors"
                    style={{
                      color: pathname === link.href ? 'var(--sage)' : 'var(--charcoal)',
                      backgroundColor: pathname === link.href ? 'var(--sage-pale)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t flex flex-col gap-3" style={{ borderColor: 'var(--sage-pale)' }}>
                  <a
                    href="tel:07770769322"
                    className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-semibold"
                    style={{ color: 'var(--sage)', backgroundColor: 'var(--sage-pale)' }}
                  >
                    <Phone className="w-4 h-4" />
                    07770 769322
                  </a>
                  <Link
                    href="/contact"
                    className="py-3 rounded-lg text-center text-sm font-semibold text-white"
                    style={{ backgroundColor: 'var(--sage)' }}
                  >
                    Book Free Discovery Call
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
