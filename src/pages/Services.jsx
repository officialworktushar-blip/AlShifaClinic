import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection.jsx'
import PageBanner, { CollageVisual } from '../components/PageBanner.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { assetUrl } from '../lib/assets.js'

const PHONE = '919700007498'

const THERAPIES = [
  {
    name: 'Hijama (Wet/Blood Cupping Therapy)',
    file: 'HIJAMA WET BLOOD CUPPING THERAPHY.png',
    blurb:
      'Traditional wet cupping with sterile, single-use cups, carried out slowly so you stay comfortable throughout.',
  },
  {
    name: 'Fire Cupping Therapy',
    file: 'FIRE CUPPING THERAPY.png',
    blurb: 'The classic fire-cupping method, performed with a steady hand and a heat-safe setup.',
  },
  {
    name: 'Hijama Without Head Shave',
    file: 'HIJAMA WITHOUT HEAD SHAVE.png',
    blurb: 'For clients who prefer a Hijama session that does not involve shaving the head.',
  },
  {
    name: 'Cupping Massage Therapy',
    file: 'CUPPING MASSAGE THERAPY.png',
    blurb: 'Slow cupping worked into a massage, for a deeper and more relaxing session.',
  },
  {
    name: 'Dry Cupping Therapy',
    file: 'DRY CUPPING THERAPY.png',
    blurb: 'A non-invasive form of cupping, often booked alongside other therapies.',
  },
  {
    name: 'Bamboo Cupping Therapy',
    file: 'BAMBOO CUPPING THERAPY.png',
    blurb: 'An age-old method using bamboo cups and a simple, natural setup.',
  },
  {
    name: 'Horn Cupping Therapy',
    file: 'HORN CUPPING THERAPY.png',
    blurb: 'Traditional horn cups with a controlled draw, used in classic Hijama practice.',
  },
  {
    name: 'Rotating Cupping Therapy',
    file: 'ROTATING CUPPING THERAPY.png',
    blurb: 'Cups are moved across the area in a rotating pattern rather than held still.',
  },
  {
    name: 'Silicone Cupping Therapy',
    file: 'SILICONE CUPPING THERAPY.png',
    blurb: 'Flexible silicone cups that give a gentler, more comfortable draw.',
  },
  {
    name: 'Weight Loss Therapies',
    file: 'WEIGHT LOSS THERAPIES.png',
    blurb:
      'Cupping combined with practical guidance on routine and diet — a complementary approach, not a replacement for medical care.',
  },
  {
    name: 'Magnetic Cupping Therapy',
    file: 'MAGNETIC CUPPING THERAPY.png',
    blurb: 'Magnets fitted inside the cups, used alongside traditional cupping.',
  },
].map((therapy) => ({ ...therapy, src: assetUrl('services', therapy.file) }))

const TABS = [
  { id: 'skin', label: 'Skin & Hair' },
  { id: 'pain', label: 'Pain Relief' },
  { id: 'womens', label: "Women's Health" },
  { id: 'internal', label: 'Internal Health' },
  { id: 'mind', label: 'Mind & Wellness' },
]

// file: null means no matching image exists in public/assets/treatments.
const CONDITIONS = [
  { name: 'Hairfall', category: 'skin', file: 'hair fall.png' },
  { name: 'Eczema', category: 'skin', file: 'eczema.png' },
  { name: 'Cellulite', category: 'skin', file: 'cellulite.png' },
  { name: 'Pimples & Acne', category: 'skin', file: 'pimples & acne.png' },
  { name: 'Psoriasis', category: 'skin', file: 'psoriasis.png' },
  { name: 'Dandruff', category: 'skin', file: 'dandruff.png' },
  { name: 'Skin Issues', category: 'skin', file: 'skin issues.png' },

  { name: 'Migraine', category: 'pain', file: 'Migrane.png' },
  { name: 'Sinus', category: 'pain', file: 'sinus.png' },
  { name: 'Headaches', category: 'pain', file: 'Headaches.png' },
  { name: 'Head Pains', category: 'pain', file: 'head pains.png' },
  { name: 'Muscle Pain', category: 'pain', file: 'muscle pain.png' },
  { name: 'Body Pains', category: 'pain', file: 'body pains.png' },
  { name: 'Heel Pains', category: 'pain', file: 'heel pain.png' },
  { name: 'Varicose Veins', category: 'pain', file: null },

  { name: 'Menstrual Disorders', category: 'womens', file: 'irregular periods.png' },
  { name: 'Irregular Periods', category: 'womens', file: 'irregular periods.png' },
  { name: 'Hormone Imbalance', category: 'womens', file: 'hormone imbalance.png' },
  { name: 'Conceiving Problems', category: 'womens', file: null },

  { name: 'Fatty Liver', category: 'internal', file: 'fatty liver.png' },
  { name: 'Uric Acid', category: 'internal', file: 'uric acid.png' },
  { name: 'Respiratory Issues', category: 'internal', file: 'respiratory issues.png' },
  {
    name: 'Digestion & Acidity Issues',
    category: 'internal',
    file: 'digestion and acidity issues.png',
  },
  { name: 'Urine Infection', category: 'internal', file: 'urine infection.png' },
  { name: "Men's Wellness", category: 'internal', file: 'sexual weakness.png' },

  { name: 'Anxiety', category: 'mind', file: null },
  { name: 'Stress Reliever', category: 'mind', file: 'stress reliever.png' },
  { name: 'Facial Cupping', category: 'mind', file: 'facial cupping.png' },
  { name: 'Eyesight / Eye Vision', category: 'mind', file: 'eye vision.png' },
  { name: '...and many more', category: 'mind', file: null, isCatchAll: true },
].map((condition) => ({
  ...condition,
  src: condition.file ? assetUrl('treatments', condition.file) : null,
}))

const CARD_MOTION = {
  layout: true,
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
  transition: { duration: 0.25, ease: 'easeOut' },
}

export default function Services() {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const tabRefs = useRef([])

  const visible = CONDITIONS.filter((condition) => condition.category === activeTab)

  const onTabKeyDown = (event) => {
    const current = TABS.findIndex((tab) => tab.id === activeTab)
    let next = null

    if (event.key === 'ArrowRight') next = (current + 1) % TABS.length
    else if (event.key === 'ArrowLeft') next = (current - 1 + TABS.length) % TABS.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = TABS.length - 1

    if (next === null) return
    event.preventDefault()
    setActiveTab(TABS[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <>
      <PageBanner
        title="Cupping Therapies"
        subtitle="Hijama and the full range of modern cupping therapies, each explained honestly before you book."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
        visual={
          <CollageVisual
            files={[
              'FIRE CUPPING THERAPY.png',
              'HIJAMA WET BLOOD CUPPING THERAPHY.png',
              'CUPPING MASSAGE THERAPY.png',
            ]}
          />
        }
      />

      {/* Section 1 — therapies */}
      <AnimatedSection id="therapies" className="border-b border-line bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
              Our Cupping Therapies
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">
              Eleven therapies, from traditional Hijama to modern cupping methods. Call us and
              we will talk you through which one suits you.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {THERAPIES.map((therapy, index) => (
              <AnimatedSection
                as="li"
                key={therapy.name}
                delay={(index % 3) * 0.08}
                amount={0.15}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-cream shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[3/2] w-full overflow-hidden bg-sage">
                  <SmartImage
                    src={therapy.src}
                    alt={therapy.name}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    label={therapy.name}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {therapy.name}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
                    {therapy.blurb}
                  </p>
                  <a
                    href={`tel:+${PHONE}`}
                    className="mt-5 inline-block self-start rounded-full border border-primary px-5 py-2 font-sans text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-cream"
                  >
                    Book on Call
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* Section 2 — conditions */}
      <AnimatedSection id="treatments" className="border-b border-line bg-cream-2/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
              Conditions We Treat
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">
              People come to us with a wide range of concerns. Pick a category to see them.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Condition categories"
            onKeyDown={onTabKeyDown}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {TABS.map((tab, index) => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  ref={(node) => {
                    tabRefs.current[index] = node
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls="conditions-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-cream'
                      : 'border border-line bg-cream text-ink-soft hover:border-primary hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id="conditions-panel"
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
            className="mt-10"
          >
            <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((condition) =>
                  condition.isCatchAll ? (
                    <motion.li
                      key={condition.name}
                      {...CARD_MOTION}
                      className="flex items-center justify-center rounded-2xl border border-dashed border-primary bg-primary-100/40 p-6 text-center"
                    >
                      <span className="font-heading text-lg font-semibold text-primary">
                        ...and many more
                      </span>
                    </motion.li>
                  ) : (
                    <motion.li
                      key={condition.name}
                      {...CARD_MOTION}
                      className="overflow-hidden rounded-2xl border border-line bg-cream shadow-sm"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-sage">
                        {condition.src ? (
                          <SmartImage
                            src={condition.src}
                            alt={condition.name}
                            wrapperClassName="h-full w-full"
                            className="h-full w-full object-cover"
                            label={condition.name}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-primary-100/50">
                            <span className="px-4 text-center font-sans text-xs text-ink-soft">
                              Image coming soon
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="px-4 py-3 text-center font-sans text-sm font-medium text-ink">
                        {condition.name}
                      </p>
                    </motion.li>
                  ),
                )}
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Notice + disclaimer */}
      <AnimatedSection className="border-b border-line bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div
            role="note"
            className="rounded-2xl border border-l-4 border-accent border-y border-r border-line bg-sage px-6 py-6 text-center sm:px-10"
          >
            <p className="font-sans text-base leading-relaxed font-medium text-ink sm:text-lg">
              Female therapist and home service available for ladies. Timings will be given on
              call. Charges excluded.
            </p>
          </div>

          <p className="mt-6 text-center font-sans text-sm leading-relaxed text-ink-mute">
            Results vary from person to person. Cupping therapy is a complementary therapy and
            not a substitute for medical advice.
          </p>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-cream sm:text-4xl">
            Not sure which therapy is right for you?
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-cream/85">
            Call us and we will talk it through honestly before you book anything.
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
