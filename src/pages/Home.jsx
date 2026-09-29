import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { assetUrl } from '../lib/assets.js'

const PHONE = '919700007498'
const PHONE_DISPLAY = '+91 97000 07498'

const REVIEWS = [
  {
    file: 'SaveInta.com_AQM3kUn7p7SuFKBwMRktFuG5Kk7B0h0NPI9buuTUT9Veiocm0qdH6X3co-nVr59DEKKsptdulxLTVMV7bL_g4eNV_F2pG8E00SqQQD0.webm',
    quote:
      'The clinic is spotless and the appointment ran exactly on time. Everything was explained before we started.',
    name: 'Sana M.',
  },
  {
    file: 'SaveInta.com_AQO0JNUoYVcYmRPiB1YPbZVSTXBThAxmC6WL1rmLC5lhbZVLWq51NzKaTw_TI7ne0bC9GPb3yfHyEmQ47RkanxLX3tcmwW4zTknvhZw.webm',
    quote:
      'Very patient with first-time questions. The room felt private and calm, and the aftercare advice was clear.',
    name: 'Imran K.',
  },
  {
    file: 'SaveInta.com_AQOj5a0Sa_1CfE8F7M8I3_MwMy293P49cZP78VNXlucUs9Y-_ycVTGjfu1-MhWl5e2yDeziNWlDjN0xLNZn1hCk-_6cnPcKOHDd6rK8.webm',
    quote:
      'Booked for my mother and the whole thing was handled gently. Hygiene was clearly a priority for them.',
    name: 'Fatima R.',
  },
  {
    file: 'SaveInta.com_AQP6yNDxdRjFp-ol33UlJ9gJzf6d2cqIFA_LOWoB9SbYSVuErFmtmlmaX44xUB0v-Lje821IUVuDzgmveTNZIwX6oe3bZkJga6EPWeQ.webm',
    quote:
      'Straightforward pricing and no pressure to add extra sessions. Easy to reach on WhatsApp too.',
    name: 'Abdul H.',
  },
  {
    file: 'SaveInta.com_AQPEqEOac7b6ErdaTg5A_lzkHwObr_WE4zw8yHvatfuhNB33WUrZTWc2eVTo9e9z4XRdEybxm5bCvgWik0ZIeCEI78bX05D509OYrDc.webm',
    quote:
      'A dedicated female therapist was available for my sister, which made the whole visit far easier for her.',
    name: 'Nusrat A.',
  },
  {
    file: 'SaveInta.com_AQPxxKhPKVlFuJgrYcUGytv6U7X52RrD-JF6OH7AIljBZvs8_LVg1Fh7k3-B3XMPzwKe7QG0lfAXdCbgVzOoiwdHF8YLRjHbRcZqEFg.webm',
    quote:
      'We have been coming here for over a year now. Consistent, hygienic, and never rushed.',
    name: 'Yusuf A.',
  },
].map((review) => ({ ...review, src: assetUrl('reviews', review.file) }))

const WHY = [
  {
    title: 'Sterile, single-use equipment',
    body: 'Every session uses fresh, single-use consumables and a clean cup set, so nothing is carried over between clients.',
  },
  {
    title: 'Unhurried appointments',
    body: 'Time is reserved for your session so the therapist can explain each step and answer questions without rushing you.',
  },
  {
    title: 'Ladies by appointment',
    body: 'A dedicated female therapist is available, and home service can be arranged for ladies who prefer it.',
  },
  {
    title: 'Honest, practical advice',
    body: 'We explain what a therapy involves, what to expect afterwards, and recommend it only when it genuinely suits you.',
  },
]

const POPULAR_SERVICES = [
  {
    name: 'Hijama (Wet Cupping)',
    file: 'HIJAMA WET BLOOD CUPPING THERAPHY.png',
    blurb: 'Traditional Al Hijama with sterile disposable cups and a calm, private setting.',
  },
  {
    name: 'Fire Cupping',
    file: 'FIRE CUPPING THERAPY.png',
    blurb: 'Traditional fire-cupping using a heat-safe method, performed with steady hands.',
  },
  {
    name: 'Dry Cupping',
    file: 'DRY CUPPING THERAPY.png',
    blurb: 'A non-invasive form often used for relaxation and general wellbeing.',
  },
  {
    name: 'Cupping Massage',
    file: 'CUPPING MASSAGE THERAPY.png',
    blurb: 'Slow cupping combined with massage for a deeper, more comfortable session.',
  },
  {
    name: 'Hijama Without Head Shave',
    file: 'HIJAMA WITHOUT HEAD SHAVE.png',
    blurb: 'For clients who prefer a session that does not involve shaving the head.',
  },
  {
    name: 'Bamboo Cupping',
    file: 'BAMBOO CUPPING THERAPY.png',
    blurb: 'An age-old method using bamboo cups and a simple, natural setup.',
  },
]

const CONDITIONS = [
  { label: 'Body Pains', file: 'body pains.png' },
  { label: 'Headaches', file: 'Headaches.png' },
  { label: 'Migraine', file: 'Migrane.png' },
  { label: 'Sinus', file: 'sinus.png' },
  { label: 'Muscle Pain', file: 'muscle pain.png' },
  { label: 'Heel Pain', file: 'heel pain.png' },
  { label: 'Psoriasis', file: 'psoriasis.png' },
  { label: 'Eczema', file: 'eczema.png' },
  { label: 'Pimples & Acne', file: 'pimples & acne.png' },
  { label: 'Dandruff', file: 'dandruff.png' },
  { label: 'Hair Fall', file: 'hair fall.png' },
  { label: 'Skin Issues', file: 'skin issues.png' },
  { label: 'Cellulite', file: 'cellulite.png' },
  { label: 'Facial Cupping', file: 'facial cupping.png' },
  { label: 'Respiratory Issues', file: 'respiratory issues.png' },
  { label: 'Stress Reliever', file: 'stress reliever.png' },
  { label: 'Uric Acid', file: 'uric acid.png' },
  { label: 'Fatty Liver', file: 'fatty liver.png' },
  { label: 'Digestion & Acidity', file: 'digestion and acidity issues.png' },
  { label: 'Hormone Imbalance', file: 'hormone imbalance.png' },
  { label: 'Irregular Periods', file: 'irregular periods.png' },
  { label: 'Urine Infection', file: 'urine infection.png' },
  { label: 'Eye Vision', file: 'eye vision.png' },
  { label: 'Sexual Weakness', file: 'sexual weakness.png' },
]

const TEAM = [
  {
    name: 'Male Therapist',
    file: 'man.png',
    role: 'Hijama & Cupping Therapy',
    years: 16,
  },
  {
    name: 'Female Therapist',
    file: 'woman.png',
    role: 'Hijama & Cupping for Ladies',
    years: 30,
  },
]

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="font-sans text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">{lead}</p>
      ) : null}
    </div>
  )
}

function ReviewsCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const count = REVIEWS.length

  const go = (next) => {
    setDirection(next > index ? 1 : -1)
    setIndex((next + count) % count)
  }

  const active = REVIEWS[index]

  return (
    <section aria-labelledby="reviews-title" className="border-b border-line bg-sage/40 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          lead="Short clips from a few of the people who have visited the clinic."
        />

        <div className="relative mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
            <div className="relative aspect-[9/16] w-full sm:aspect-[16/10]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.file}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <video
                    key={active.src}
                    src={active.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full bg-charcoal object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-line px-6 py-5">
              <p className="font-sans text-sm leading-relaxed text-ink-soft italic">
                &ldquo;{active.quote}&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink transition-colors hover:bg-primary hover:text-cream"
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <ul className="flex items-center gap-2">
              {REVIEWS.map((review, i) => (
                <li key={review.file}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={i === index}
                    className={`block h-2.5 rounded-full transition-all ${
                      i === index ? 'w-7 bg-primary' : 'w-2.5 bg-primary-100'
                    }`}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink transition-colors hover:bg-primary hover:text-cream"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sage to-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <AnimatedSection playOnMount as="div" className="text-center lg:text-left">
          <p className="font-sans text-sm font-semibold tracking-[0.18em] text-accent uppercase">
            Hyderabad &middot; Since years of trusted care
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            Al Shifa Clinic
            <span className="mt-2 block text-primary">&amp; Al Hijama</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft lg:mx-0">
            Traditional Hijama and modern cupping therapies practised with sterile equipment
            and unhurried appointments at Falaknuma Palace, Madina Colony Area, Hyderabad.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="w-full rounded-full bg-primary px-8 py-3.5 text-center font-sans text-base font-semibold text-cream transition-colors hover:bg-primary-700 sm:w-auto"
            >
              Book an Appointment
            </Link>
            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-primary px-8 py-3.5 text-center font-sans text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-cream sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>

          <a
            href={`tel:+${PHONE}`}
            className="mt-6 inline-block font-sans text-sm text-ink-mute hover:text-primary"
          >
            or call {PHONE_DISPLAY}
          </a>
        </AnimatedSection>

        <AnimatedSection playOnMount delay={0.15} as="div">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-cream shadow-lg">
              <SmartImage
                src={assetUrl('man.png')}
                alt="Therapist at Al Shifa Clinic, Hyderabad"
                loading="eager"
                wrapperClassName="aspect-[4/5] w-full"
                className="h-full w-full object-cover"
                label="Therapist photo coming soon"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <AnimatedSection className="border-b border-line bg-cream py-20" aria-labelledby="why-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care you can feel comfortable with"
          lead="Four things that shape every appointment at the clinic."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-cream-2/60 p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-cream">
                {i + 1}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function PopularServices() {
  return (
    <AnimatedSection className="border-b border-line bg-cream-2/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Popular Services"
          title="Cupping therapies we offer"
          lead="A few of the therapies clients book most often. We have a full range on the services page."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_SERVICES.map((service) => (
            <article
              key={service.file}
              className="group overflow-hidden rounded-2xl border border-line bg-cream shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-sage">
                <SmartImage
                  src={assetUrl('services', service.file)}
                  alt={service.name}
                  wrapperClassName="h-full w-full"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  label={service.name}
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">{service.name}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                  {service.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-block rounded-full border border-primary px-8 py-3.5 font-sans text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-cream"
          >
            View All Services
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}

function Conditions() {
  return (
    <AnimatedSection className="border-b border-line bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Conditions"
          title="Areas people ask us about"
          lead="Tap any area to see it listed on the services page. A therapist will always talk through your situation before recommending anything."
        />

        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {CONDITIONS.map((item) => (
            <li key={item.label}>
              <Link
                to="/services"
                className="inline-block rounded-full border border-line bg-cream-2/60 px-5 py-2.5 font-sans text-sm text-ink transition-colors hover:border-primary hover:bg-primary hover:text-cream"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}

function TeamTeaser() {
  return (
    <AnimatedSection className="border-b border-line bg-sage/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Team"
              title="Therapists you will feel at ease with"
              lead="Both our therapists are trained in Hijama and the full range of modern cupping therapies, and both work to the same hygiene standard."
            />
            <Link
              to="/about"
              className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 font-sans text-base font-semibold text-cream transition-colors hover:bg-primary-700"
            >
              More About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {TEAM.map((member) => (
              <figure key={member.file} className="text-center">
                <div className="overflow-hidden rounded-2xl border border-line bg-cream">
                  <SmartImage
                    src={assetUrl(member.file)}
                    alt={`${member.name} at Al Shifa Clinic`}
                    wrapperClassName="aspect-[4/5] w-full"
                    className="h-full w-full object-cover"
                    label="Photo coming soon"
                  />
                </div>
                <figcaption className="mt-3">
                  <span className="block font-heading text-base font-semibold text-ink">
                    {member.name}
                  </span>
                  <span className="mt-1 block font-sans text-xs font-semibold text-primary">
                    {member.years} years of experience
                  </span>
                  <span className="block font-sans text-xs text-ink-soft">{member.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function CtaBanner() {
  return (
    <AnimatedSection className="bg-primary py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-semibold text-cream sm:text-4xl">
          Ready to book your session?
        </h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-cream/85">
          Message us on WhatsApp or call the clinic and we will find a slot that suits you,
          including home service for ladies.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="w-full rounded-full bg-accent px-8 py-3.5 text-center font-sans text-base font-semibold text-white transition-colors hover:bg-accent-600 sm:w-auto"
          >
            Book an Appointment
          </Link>
          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-cream/50 px-8 py-3.5 text-center font-sans text-base font-semibold text-cream transition-colors hover:bg-cream hover:text-primary sm:w-auto"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <ReviewsCarousel />
      <WhyChooseUs />
      <PopularServices />
      <Conditions />
      <TeamTeaser />
      <CtaBanner />
    </>
  )
}
