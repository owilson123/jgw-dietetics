'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const services = [
  'IBS & Gut Health',
  'Low FODMAP Programme',
  'Type 1 Diabetes',
  'Type 2 Diabetes / Prediabetes',
  'Lifestyle Nutrition Coaching',
  'Family Nutrition',
  'Not sure yet',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with real API call / Formspree / Resend
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: 'var(--sage-pale)' }}
        >
          <CheckCircle2 className="w-8 h-8" style={{ color: 'var(--sage)' }} />
        </div>
        <h3 className="text-2xl font-serif mb-3" style={{ color: 'var(--charcoal)' }}>
          Message Received
        </h3>
        <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
          Thank you for getting in touch. Jackie will respond within 1–2 working days to arrange your free discovery call.
        </p>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl p-8 lg:p-10"
      style={{ backgroundColor: 'white', border: '1px solid var(--sage-pale)' }}
    >
      <h2 className="text-2xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>
        Send an Enquiry
      </h2>
      <p className="text-sm mb-8" style={{ color: 'var(--charcoal-mid)' }}>
        Jackie responds within 1–2 working days.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>
              First Name *
            </label>
            <input
              type="text"
              required
              placeholder="Jane"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
              style={{
                border: '1px solid var(--sage-pale)',
                backgroundColor: 'var(--off-white)',
                color: 'var(--charcoal)',
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>
              Last Name *
            </label>
            <input
              type="text"
              required
              placeholder="Smith"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
              style={{
                border: '1px solid var(--sage-pale)',
                backgroundColor: 'var(--off-white)',
                color: 'var(--charcoal)',
              }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
            style={{
              border: '1px solid var(--sage-pale)',
              backgroundColor: 'var(--off-white)',
              color: 'var(--charcoal)',
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="07XXX XXXXXX"
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
            style={{
              border: '1px solid var(--sage-pale)',
              backgroundColor: 'var(--off-white)',
              color: 'var(--charcoal)',
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>
            Area of Interest
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 appearance-none"
            style={{
              border: '1px solid var(--sage-pale)',
              backgroundColor: 'var(--off-white)',
              color: 'var(--charcoal)',
            }}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>
            Tell Jackie about your goals
          </label>
          <textarea
            rows={4}
            placeholder="Please share a brief overview of your health goals or concerns..."
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 resize-none"
            style={{
              border: '1px solid var(--sage-pale)',
              backgroundColor: 'var(--off-white)',
              color: 'var(--charcoal)',
            }}
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            id="privacy"
            className="mt-1 flex-shrink-0"
          />
          <label htmlFor="privacy" className="text-xs leading-relaxed" style={{ color: 'var(--charcoal-mid)' }}>
            I agree to my details being stored to respond to this enquiry. View the{' '}
            <a href="/privacy" className="underline" style={{ color: 'var(--sage)' }}>privacy policy</a>.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-70"
          style={{ backgroundColor: 'var(--sage)' }}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            <>
              Send Enquiry
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
