import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LocalBusinessSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jgw-dietetics.co.uk'),
  title: {
    default: 'JGW Dietetics | Registered Dietitian | IBS, Diabetes & Nutrition Support',
    template: '%s | JGW Dietetics',
  },
  description:
    'Jackie Wilson is a Registered Dietitian with 30+ years of NHS and private experience, specialising in IBS, Low FODMAP, Type 1 & 2 Diabetes, and lifestyle nutrition in the South West.',
  keywords: [
    'Dietitian Bristol',
    'Dietitian Clevedon',
    'IBS Dietitian',
    'Low FODMAP Dietitian',
    'Diabetes Dietitian',
    'Private Dietitian South West',
    'Gut Health Dietitian',
    'Registered Dietitian UK',
    'HCPC Dietitian',
    'BDA Dietitian',
  ],
  authors: [{ name: 'Jackie Wilson RD' }],
  creator: 'JGW Dietetics',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.jgw-dietetics.co.uk',
    siteName: 'JGW Dietetics',
    title: 'JGW Dietetics | Expert Dietitian | IBS, Diabetes & Nutrition',
    description:
      'Evidence-based nutrition support for IBS, gut health, diabetes, and lifestyle change. 30+ years NHS experience. South West UK.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JGW Dietetics — Jackie Wilson Registered Dietitian',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JGW Dietetics | Registered Dietitian',
    description: 'Evidence-based nutrition support for IBS, gut health and diabetes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap"
          rel="stylesheet"
        />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
