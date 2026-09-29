import { useId } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from './AnimatedSection.jsx'
import SmartImage from './SmartImage.jsx'
import { assetUrl } from '../lib/assets.js'

const LEAF_PATH = 'M12 2C7 5.6 4 9.8 4 14a8 8 0 1 0 16 0c0-4.2-3-8.4-8-12Z'
const DROP_PATH = 'M12 2.4c3.7 4.5 6.1 8 6.1 10.9a6.1 6.1 0 1 1-12.2 0C5.9 10.4 8.3 6.9 12 2.4Z'

const BLOB = 'rounded-[42%_58%_55%_45%]'

function LeafField() {
  const rawId = useId()
  const id = `leaf-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <svg
      className="absolute inset-0 h-full w-full text-accent"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id={id}
          width="68"
          height="68"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(16)"
        >
          <path
            d={LEAF_PATH}
            fill="currentColor"
            opacity="0.09"
            transform="translate(20 16) scale(1.2)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

function FloatingShapes() {
  const reduceMotion = useReducedMotion()

  const shapes = [
    { className: '-left-8 top-6 h-28 w-28 text-accent/25', duration: 11, dy: 18, rotate: 7 },
    { className: 'right-[6%] -top-6 h-20 w-20 text-primary/15', duration: 14, dy: -14, rotate: -9 },
    { className: 'bottom-4 left-[46%] h-24 w-24 text-accent/20', duration: 17, dy: 15, rotate: 5 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape) => (
        <motion.svg
          key={shape.className}
          viewBox="0 0 24 24"
          focusable="false"
          className={`absolute ${shape.className}`}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, shape.dy, 0], rotate: [0, shape.rotate, 0] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: shape.duration, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <path d={LEAF_PATH} fill="currentColor" />
        </motion.svg>
      ))}
    </div>
  )
}

function DropBadge() {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-cream shadow-sm">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
        <path d={DROP_PATH} fill="currentColor" />
      </svg>
    </span>
  )
}

export function PhotoVisual({ file, alt }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className={`absolute -inset-4 bg-sage ${BLOB}`}
        aria-hidden="true"
      />
      <div
        className={`relative overflow-hidden border-2 border-accent/40 shadow-md ${BLOB}`}
      >
        <SmartImage
          src={assetUrl(file)}
          alt={alt}
          loading="eager"
          wrapperClassName="aspect-[4/5] w-full"
          className="h-full w-full object-cover"
          label="Photo coming soon"
        />
      </div>
    </div>
  )
}

const COLLAGE_POSITIONS = [
  'left-0 top-6 w-40 rotate-[-6deg] z-10',
  'right-2 top-0 w-44 rotate-[4deg] z-20',
  'left-14 bottom-2 w-40 rotate-[8deg] z-30',
]

export function CollageVisual({ files }) {
  return (
    <div className="relative mx-auto h-80 w-full max-w-sm" aria-hidden="true">
      {files.slice(0, COLLAGE_POSITIONS.length).map((file, index) => (
        <div
          key={file}
          className={`absolute overflow-hidden rounded-2xl border-2 border-cream shadow-md ${COLLAGE_POSITIONS[index]}`}
        >
          <SmartImage
            src={assetUrl('services', file)}
            alt=""
            wrapperClassName="aspect-[4/3] w-full"
            className="h-full w-full object-cover"
            label=""
          />
        </div>
      ))}
    </div>
  )
}

export function PinVisual() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center" aria-hidden="true">
      <span className="absolute h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <span className="absolute h-64 w-64 rounded-full border border-accent/25" />
      <span className="relative flex h-40 w-40 items-center justify-center rounded-full border border-accent/35 bg-cream/80 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          className="h-20 w-20 text-primary"
          focusable="false"
        >
          <path d="M12 21.5s7.2-7.7 7.2-12.4a7.2 7.2 0 1 0-14.4 0C4.8 13.8 12 21.5 12 21.5Z" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="2.6" />
        </svg>
      </span>
      <span className="absolute right-6 top-8 h-3 w-3 rounded-full bg-accent/50" />
      <span className="absolute bottom-10 left-4 h-2 w-2 rounded-full bg-primary/30" />
    </div>
  )
}

export default function PageBanner({ title, subtitle, breadcrumb = [], visual }) {
  const hasVisual = Boolean(visual)

  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-sage via-cream to-cream">
      <LeafField />
      <FloatingShapes />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className={hasVisual ? 'grid items-center gap-12 lg:grid-cols-2' : ''}>
          <div className={`text-center ${hasVisual ? 'lg:text-left' : ''}`}>
            {breadcrumb.length > 0 ? (
              <AnimatedSection playOnMount as="nav" aria-label="Breadcrumb">
                <ol
                  className={`flex flex-wrap items-center justify-center gap-2 font-sans text-sm text-ink-soft ${
                    hasVisual ? 'lg:justify-start' : ''
                  }`}
                >
                  {breadcrumb.map((crumb, index) => {
                    const isLast = index === breadcrumb.length - 1
                    return (
                      <li key={crumb.label} className="flex items-center gap-2">
                        {index > 0 ? <span aria-hidden="true">/</span> : null}
                        {crumb.to && !isLast ? (
                          <Link to={crumb.to} className="transition-colors hover:text-primary">
                            {crumb.label}
                          </Link>
                        ) : (
                          <span aria-current="page" className="text-ink">
                            {crumb.label}
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ol>
              </AnimatedSection>
            ) : null}

            <AnimatedSection playOnMount delay={0.08} as="div" className="mt-6">
              <DropBadge />
              <h1 className="mt-4 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                {title}
              </h1>
              {subtitle ? (
                <p
                  className={`mt-4 max-w-xl font-sans text-base leading-relaxed text-ink-soft sm:text-lg ${
                    hasVisual ? 'mx-auto lg:mx-0' : 'mx-auto'
                  }`}
                >
                  {subtitle}
                </p>
              ) : null}
            </AnimatedSection>
          </div>

          {hasVisual ? <div className="hidden lg:block">{visual}</div> : null}
        </div>
      </div>
    </section>
  )
}
