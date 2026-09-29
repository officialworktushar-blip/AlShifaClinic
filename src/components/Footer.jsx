import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/assets.js'

const YEAR = new Date().getFullYear()
const PHONE = '919700007498'
const PHONE_DISPLAY = '+91 97000 07498'
const EMAIL = 'alshifacuppinghijama@gmail.com'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-accent">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-accent">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-accent">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-accent">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-primary text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={assetUrl('logo.png')}
                alt=""
                width="44"
                height="44"
                loading="lazy"
                decoding="async"
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-semibold">Al Shifa Clinic</span>
                <span className="font-sans text-xs text-cream/70">
                  Cupping Therapy &middot; Al Hijama
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-cream/80">
              Traditional Al Hijama and modern cupping therapies practised with sterile
              equipment and hygienic procedure at Falaknuma Palace, Madina Colony Area,
              Hyderabad.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-heading text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-sans text-sm text-cream/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="font-sans text-sm text-cream/80 transition-colors hover:text-accent"
                >
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-lg font-semibold">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 font-sans text-sm text-cream/80">
                <IconPin />
                <span>
                  Falaknuma Palace, Madina Colony Area
                  <br />
                  Hyderabad, Telangana 500053, India
                </span>
              </li>
              <li className="flex gap-3 font-sans text-sm">
                <IconPhone />
                <a href={`tel:+${PHONE}`} className="text-cream/80 hover:text-accent">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3 font-sans text-sm">
                <IconMail />
                <a href={`mailto:${EMAIL}`} className="break-all text-cream/80 hover:text-accent">
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3 font-sans text-sm text-cream/60">
                <IconClock />
                <span>Opening hours to be added</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-cream/60">
            &copy; {YEAR} Al Shifa Clinic &ndash; Al Hijama.
            All rights reserved.
          </p>
          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-cream/60 transition-colors hover:text-accent"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </footer>
  )
}
