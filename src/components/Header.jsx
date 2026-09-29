import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assetUrl } from '../lib/assets.js'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={assetUrl('logo.png')}
            alt=""
            width="44"
            height="44"
            decoding="async"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-xl font-semibold text-ink">Al Shifa Clinic</span>
            <span className="font-sans text-xs text-ink-soft">
              Cupping Therapy &middot; Al Hijama
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={close}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-cream'
                    : 'text-ink-soft hover:bg-sage hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 rounded-full bg-accent px-5 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-line md:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
          />
        </button>
      </div>

      <nav
        id="primary-nav"
        aria-label="Primary mobile"
        hidden={!open}
        className="border-t border-line bg-cream md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={close}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 font-sans text-base font-medium ${
                    isActive ? 'bg-primary text-cream' : 'text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={close}
              className="mt-2 mb-2 block rounded-lg bg-accent px-3 py-3 text-center font-sans text-base font-semibold text-white"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
