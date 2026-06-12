import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  Services: [
    { href: '/services/ibs-gut-health', label: 'IBS & Gut Health' },
    { href: '/services/low-fodmap', label: 'Low FODMAP Programme' },
    { href: '/services/type-1-diabetes', label: 'Type 1 Diabetes' },
    { href: '/services/type-2-diabetes', label: 'Type 2 Diabetes' },
    { href: '/services/lifestyle-nutrition', label: 'Lifestyle Nutrition' },
    { href: '/services/family-nutrition', label: 'Family Nutrition' },
  ],
  Information: [
    { href: '/about', label: 'About Jackie' },
    { href: '/programmes', label: 'Programmes & Pricing' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ],
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--charcoal)' }} className="text-white">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="text-xl font-serif block" style={{ color: 'var(--sage-pale)' }}>
                JGW Dietetics
              </span>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--stone)' }}>
                Jackie Wilson RD
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--stone)' }}>
              Evidence-based dietetic support for IBS, gut health, diabetes, and lifestyle change.
              30+ years NHS and private practice experience.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              >
                {/* Instagram */}
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              >
                {/* Facebook */}
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              >
                {/* LinkedIn */}
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-5" style={{ color: 'var(--eucalyptus)' }}>
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: 'var(--stone)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-5" style={{ color: 'var(--eucalyptus)' }}>
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:07770769322"
                  className="flex items-start gap-3 text-sm group"
                  style={{ color: 'var(--stone)' }}
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">07770 769322</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jgw-dietetics.co.uk"
                  className="flex items-start gap-3 text-sm group"
                  style={{ color: 'var(--stone)' }}
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">info@jgw-dietetics.co.uk</span>
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--stone)' }}
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Clevedon, North Somerset<br />South West England</span>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--sage)' }}
            >
              Book Free Discovery Call
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--stone)' }}
        >
          <p>© {new Date().getFullYear()} JGW Dietetics. Jackie Wilson is registered with the HCPC and BDA.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/disclosure" className="hover:text-white transition-colors">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
