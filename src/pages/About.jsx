import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection.jsx'
import PageBanner, { PhotoVisual } from '../components/PageBanner.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { assetUrl } from '../lib/assets.js'

// PLACEHOLDER FIGURES — edit these before the site goes live.
const YEARS_OF_EXPERIENCE = 30
const HAPPY_CLIENTS = 5000
const THERAPIES_OFFERED = 11

const STATS = [
  { value: YEARS_OF_EXPERIENCE, suffix: '+', label: 'Years of Experience' },
  { value: HAPPY_CLIENTS, suffix: '+', label: 'Happy Clients' },
  { value: THERAPIES_OFFERED, suffix: '+', label: 'Therapies Offered' },
]

const TEAM = [
  {
    file: 'man.png',
    name: 'ISSA HUSSAIN',
    role: 'Cupping Therapist',
    years: 16,
    alt: 'Issa Hussain, Cupping Therapist at Al Shifa Clinic',
    credentials: ['B.E.M.S', 'Cupping Therapist', 'Occupational Health and Safety Management'],
  },
  {
    file: 'woman.png',
    name: 'Female Therapist',
    role: 'Dedicated therapist for our female clients.',
    years: 30,
    alt: 'Female cupping therapist at Al Shifa Clinic',
    credentials: [],
  },
]

function IconHome(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M3 9.5 12 2.5l9 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10.2V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <circle cx="12" cy="7" r="4" />
      <path d="M4.5 21v-1a7 7 0 0 1 7-7h1a7 7 0 0 1 7 7v1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path
        d="M12 2.8 19.5 6v5.8c0 4.5-3.2 8.2-7.5 9.4-4.3-1.2-7.5-4.9-7.5-9.4V6L12 2.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m9.2 12.2 2 2 3.6-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconHeart(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path
        d="M12 20.4s-7.3-4.5-7.3-9.7A4.1 4.1 0 0 1 12 7.5a4.1 4.1 0 0 1 7.3 3.2c0 5.2-7.3 9.7-7.3 9.7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const PROMISES = [
  {
    Icon: IconHome,
    title: 'Home Service Available for Ladies',
    body: 'If travelling is difficult, we can arrange a therapist to visit you at home.',
  },
  {
    Icon: IconUser,
    title: 'Female Therapist for Female Clients',
    body: 'Ladies are seen by a dedicated female therapist, in clinic or at home.',
  },
  {
    Icon: IconShield,
    title: 'Clean & Sterile Equipment',
    body: 'Fresh single-use consumables and a clean cup set for every single session.',
  },
  {
    Icon: IconHeart,
    title: 'Personal Care & Attention',
    body: 'Time reserved for you, with every step explained before we begin.',
  },
]

function Counter({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value, reduceMotion])

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-semibold text-cream sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 font-sans text-sm tracking-wide text-cream/75">{label}</p>
    </div>
  )
}

export default function About() {
  const reduceMotion = useReducedMotion()
  const hoverLift = reduceMotion ? undefined : { y: -8 }

  return (
    <>
      {/* 1. Page banner */}
      <PageBanner
        title="About Al Shifa Clinic"
        subtitle="Hijama and modern cupping therapies in Hyderabad, practised with sterile equipment and unhurried appointments."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
        visual={
          <PhotoVisual
            file="man.png"
            alt="Issa Hussain, Cupping Therapist at Al Shifa Clinic"
          />
        }
      />

      {/* 2. Intro */}
      <AnimatedSection as="section" className="border-b border-line bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            Traditional Hijama, practised with care
          </h2>

          <div className="mt-6 space-y-5 font-sans text-base leading-relaxed text-ink-soft">
            <p>
              Al Hijama is a traditional therapy that has been practised for centuries across
              many parts of the world. At Al Shifa Clinic in Hyderabad we combine
              that traditional practice with modern hygiene standards, so the treatment stays
              faithful to its roots while the setting stays clean and professional.
            </p>
            <p>
              Hygiene is the part we are most careful about. Every session begins with fresh,
              single-use consumables and a clean cup set prepared for that client alone, and the
              room is tidied between appointments. Nothing used for one person is ever carried
              over to the next.
            </p>
            <p>
              We would rather you felt comfortable than hurried. Time is reserved for your
              appointment so the therapist can explain each step, answer your questions and check
              in with you as the session goes on. If a therapy does not seem right for you, we
              will say so and talk through the alternatives.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Team */}
      <AnimatedSection as="section" className="border-b border-line bg-cream-2/50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
              The people who look after you
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">
              Both our therapists work to the same hygiene standard and the same unhurried
              approach.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
            {TEAM.map((member) => (
              <li key={member.file}>
                <motion.article
                  className="h-full overflow-hidden rounded-2xl border border-line bg-cream text-center shadow-sm"
                  whileHover={hoverLift}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <div className="overflow-hidden bg-sage">
                    <SmartImage
                      src={assetUrl(member.file)}
                      alt={member.alt}
                      wrapperClassName="aspect-[4/5] w-full"
                      className="h-full w-full object-cover"
                      label="Photo coming soon"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold tracking-wide text-ink uppercase">
                      {member.name}
                    </h3>
                    {member.years ? (
                      <p className="mt-2 font-sans text-sm font-semibold text-primary">
                        {member.years} years of experience
                      </p>
                    ) : null}
                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                      {member.role}
                    </p>

                    {member.credentials.length > 0 ? (
                      <ul className="mt-4 flex flex-wrap justify-center gap-2">
                        {member.credentials.map((credential) => (
                          <li
                            key={credential}
                            className="rounded-full border border-line bg-cream-2/70 px-3 py-1.5 font-sans text-xs text-ink-soft"
                          >
                            {credential}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* 4. Our Promise */}
      <AnimatedSection as="section" className="border-b border-line bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Our Promise
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
              What you can expect from us
            </h2>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map(({ Icon, title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-line bg-cream-2/60 p-6 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-cream">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* 5. Info callout */}
      <AnimatedSection as="section" className="border-b border-line bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div
            role="note"
            className="rounded-2xl border-l-4 border-accent border-y border-r border-line bg-sage px-6 py-6 text-center sm:px-10"
          >
            <p className="font-sans text-base leading-relaxed font-medium text-ink sm:text-lg">
              Timings will be given on call. Charges excluded. Thank you for understanding.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 6. Counter strip */}
      <AnimatedSection as="section" className="bg-primary py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="sr-only">Al Shifa Clinic at a glance</h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {STATS.map((stat) => (
              <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 7. CTA */}
      <AnimatedSection as="section" className="bg-primary-700 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-cream sm:text-4xl">
            Ready to feel better naturally?
          </h2>
          <p className="mt-4 font-sans text-base text-cream/80 sm:text-lg">
            Book your session today and we will find a slot that suits you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-sans text-base font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Book Your Session
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}
