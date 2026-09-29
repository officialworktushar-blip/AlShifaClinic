import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection.jsx'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function NotFound() {
  return (
    <AnimatedSection as="section" className="bg-gradient-to-b from-sage to-cream py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-sans text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          Error 404
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-ink sm:text-5xl">
          This page does not exist
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
          The page you were looking for has moved or the address is incomplete. Use the links
          below to get back to the clinic website.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full border border-primary px-6 py-3 font-sans text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-primary px-8 py-3 font-sans text-sm font-semibold text-cream transition-colors hover:bg-primary-700"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}
