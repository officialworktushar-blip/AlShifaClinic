import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection.jsx'
import PageBanner, { PinVisual } from '../components/PageBanner.jsx'

const PHONE = '919700007498'
const PHONE_DISPLAY = '+91 9700007498'
const EMAIL = 'alshifacuppinghijama@gmail.com'
const INSTAGRAM = 'https://www.instagram.com/issa_hussain7498/'
const FACEBOOK = 'https://www.facebook.com/alshifacuppingtherapyalhijama/'

// Kept in sync with the therapy names used on the Services page.
const SERVICES = [
  'Hijama (Wet/Blood Cupping Therapy)',
  'Fire Cupping Therapy',
  'Hijama Without Head Shave',
  'Cupping Massage Therapy',
  'Dry Cupping Therapy',
  'Bamboo Cupping Therapy',
  'Horn Cupping Therapy',
  'Rotating Cupping Therapy',
  'Silicone Cupping Therapy',
  'Weight Loss Therapies',
  'Magnetic Cupping Therapy',
]

const THERAPISTS = [
  { value: 'any', label: 'Any' },
  { value: 'female', label: 'Female Therapist' },
]

const FAQS = [
  {
    q: 'Is Hijama painful?',
    a: 'It is not pain-free, but it is very manageable. Hijama uses a light scratch on the skin before the cups go on, so most people describe it as a deep, dull pull rather than sharp pain. We go slowly, check in with you throughout, and you can ask us to ease off or stop at any point.',
  },
  {
    q: 'Is it hygienic and safe?',
    a: 'Hygiene is the part we are most careful about. Every session uses fresh, single-use consumables and a clean cup set prepared for you alone, and the room is tidied between appointments. Nothing used for one person is ever carried over to the next.',
  },
  {
    q: 'Do you have female therapists?',
    a: 'Yes. A dedicated female therapist is available for our female clients, both at the clinic and for home service.',
  },
  {
    q: 'Do you provide home service?',
    a: 'Yes, home service is available for ladies. If travelling is difficult, let us know when you call and we will arrange a therapist to visit you at home.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'The easiest way is to fill in the enquiry form on this page, which opens WhatsApp with your details ready to send. You can also call us directly or message us on WhatsApp and we will find a slot that suits you.',
  },
  {
    q: 'What are the charges?',
    a: 'Timings and charges are discussed on call, so the answer depends on the therapy you choose and how long it takes. Get in touch and we will tell you plainly before you book anything.',
  },
]

const EMPTY_FORM = {
  name: '',
  phone: '',
  service: '',
  therapist: 'any',
  message: '',
}

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
    </svg>
  )
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path
        d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5v4h3v7h4v-7h3l1-4h-4V7.5A1.5 1.5 0 0 1 13.5 6H15V3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 21s7-7.4 7-12a7 7 0 1 0-14 0c0 4.6 7 12 7 12Z" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.1 13.9c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.9-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1-1.4-1-2.6 0-1.3.6-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.3.3c-.1.1-.2.2 0 .4.1.2.6 1.1 1.4 1.8 1 .9 1.8 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l2 1c.2.1.4.2.4.3.1.1.1.6-.1 1.1Z" />
    </svg>
  )
}

function ContactCard({ Icon, label, value, href, external }) {
  const reduceMotion = useReducedMotion()
  const hoverLift = reduceMotion ? undefined : { y: -6 }

  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-cream">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-sans text-xs tracking-wide text-ink-soft uppercase">
          {label}
        </span>
        <span className="mt-1 block font-sans text-sm break-words text-ink">{value}</span>
      </span>
    </>
  )

  const className =
    'flex items-start gap-4 rounded-2xl border border-line bg-cream-2/60 p-5 transition-colors'

  if (!href) {
    return (
      <div className={className}>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-cream">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block font-sans text-xs tracking-wide text-ink-soft uppercase">
            {label}
          </span>
          <span className="mt-1 block font-sans text-sm text-ink">{value}</span>
        </span>
      </div>
    )
  }

  return (
    <motion.a
      href={href}
      whileHover={hoverLift}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${className} hover:border-primary`}
    >
      {inner}
    </motion.a>
  )
}

function FaqItem({ id, item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-cream">
      <h3>
        <button
          type="button"
          id={`faq-btn-${id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-base font-medium text-ink transition-colors hover:bg-cream-2/70"
        >
          <span>{item.q}</span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 text-xl leading-none text-primary"
          >
            +
          </motion.span>
        </button>
      </h3>

      <div id={`faq-panel-${id}`} role="region" aria-labelledby={`faq-btn-${id}`}>
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 font-sans text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block font-sans text-sm font-medium text-ink">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      <AnimatePresence>
        {error ? (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 font-sans text-xs text-brand-red"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

const inputClass =
  'w-full rounded-xl border border-line bg-cream px-4 py-3 font-sans text-sm text-ink outline-none transition-colors focus:border-primary'

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }))
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const validate = () => {
    const next = {}

    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '')))
      next.phone = 'Enter a valid 10-digit mobile number.'

    return next
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)

    if (Object.keys(found).length > 0) return

    const therapist = THERAPISTS.find((t) => t.value === form.therapist)?.label ?? 'Any'
    const lines = [
      'Hello Al Shifa Clinic,',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: +91 ${form.phone.replace(/\D/g, '').slice(-10)}`,
      form.service ? `Service: ${form.service}` : null,
      `Preferred Therapist: ${therapist}`,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
    ].filter(Boolean)

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setForm(EMPTY_FORM)
    setErrors({})
    setSent(true)
  }

  return (
    <>
      {/* 1. Page banner */}
      <PageBanner
        title="Get in Touch"
        subtitle="Call, message or send an enquiry and we will find a slot that suits you."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
        visual={<PinVisual />}
      />

      {/* 2. Two columns */}
      <AnimatedSection className="border-b border-line bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left — contact info */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
                Contact details
              </h2>

              <ul className="mt-6 space-y-4">
                <li>
                  <ContactCard
                    Icon={IconPhone}
                    label="Phone"
                    value={PHONE_DISPLAY}
                    href={`tel:+${PHONE}`}
                  />
                </li>
                <li>
                  <ContactCard
                    Icon={IconMail}
                    label="Email"
                    value={EMAIL}
                    href={`mailto:${EMAIL}`}
                  />
                </li>
                <li>
                  <ContactCard
                    Icon={IconInstagram}
                    label="Instagram"
                    value="@issa_hussain7498"
                    href={INSTAGRAM}
                    external
                  />
                </li>
                <li>
                  <ContactCard
                    Icon={IconFacebook}
                    label="Facebook"
                    value="Al Shifa Clinic Al Hijama"
                    href={FACEBOOK}
                    external
                  />
                </li>
                <li>
                  <ContactCard
                    Icon={IconPin}
                    label="Location"
                    value="Hyderabad, Telangana, India"
                  />
                </li>
                <li>
                  <ContactCard
                    Icon={IconClock}
                    label="Note"
                    value="Timings will be given on call."
                  />
                </li>
              </ul>
            </div>

            {/* Right — enquiry form */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
                Send an enquiry
              </h2>
              <p className="mt-2 font-sans text-sm text-ink-soft">
                Fill this in and we will open WhatsApp with your message ready to send.
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
                <Field id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputClass}
                  />
                </Field>

                <Field id="phone" label="Phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={inputClass}
                    placeholder="10-digit mobile number"
                  />
                </Field>

                <Field id="service" label="Service">
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={update('service')}
                    className={inputClass}
                  >
                    <option value="">Select a therapy (optional)</option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="therapist" label="Preferred Therapist">
                  <select
                    id="therapist"
                    name="therapist"
                    value={form.therapist}
                    onChange={update('therapist')}
                    className={inputClass}
                  >
                    {THERAPISTS.map((therapist) => (
                      <option key={therapist.value} value={therapist.value}>
                        {therapist.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="message" label="Message (optional)">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className={`${inputClass} resize-y`}
                    placeholder="Anything you would like us to know before your visit."
                  />
                </Field>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-sans text-base font-semibold text-cream transition-colors hover:bg-primary-700"
                >
                  <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                  Send via WhatsApp
                </button>

                <AnimatePresence>
                  {sent ? (
                    <motion.div
                      key="success"
                      role="status"
                      initial={{ opacity: 0, scale: 0.94, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="rounded-2xl border border-primary/30 bg-sage px-5 py-4 text-center"
                    >
                      <p className="font-sans text-sm font-medium text-ink">
                        WhatsApp should have opened in a new tab with your message ready.
                      </p>
                      <p className="mt-1 font-sans text-xs text-ink-soft">
                        Just hit send there and we will get back to you.
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Map */}
      <AnimatedSection className="border-b border-line bg-cream-2/50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-center font-sans text-sm font-semibold tracking-[0.18em] text-accent uppercase">
            Find us
          </p>
          <h2 className="mt-3 text-center font-heading text-2xl font-semibold text-ink sm:text-3xl">
            Hyderabad, Telangana
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-line shadow-md">
            {/* data-todo: replace this placeholder map with the exact clinic address
                embed URL (Falaknuma Palace, Madina Colony Area, Hyderabad 500053). */}
            <iframe
              title="Map showing Al Shifa Clinic location in Hyderabad, Telangana"
              src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
              className="h-80 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Banner */}
      <AnimatedSection className="border-b border-line bg-accent py-10">
        <p className="mx-auto max-w-3xl px-4 text-center font-heading text-xl font-semibold text-white sm:px-6 sm:text-2xl">
          Home service available for ladies.
        </p>
      </AnimatedSection>

      {/* 5. FAQ */}
      <AnimatedSection className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <p className="font-sans text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              FAQ
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
              Questions people ask us
            </h2>
          </div>

          <FaqAccordion />
        </div>
      </AnimatedSection>
    </>
  )
}

function FaqAccordion() {
  const [open, setOpen] = useState(0)

  return (
    <div className="mt-10 space-y-3">
      {FAQS.map((item, index) => (
        <FaqItem
          key={item.q}
          id={index}
          item={item}
          isOpen={open === index}
          onToggle={() => setOpen(open === index ? -1 : index)}
        />
      ))}
    </div>
  )
}
