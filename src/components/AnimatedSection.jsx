import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const TAGS = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
  article: motion.article,
  aside: motion.aside,
  figure: motion.figure,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
  p: motion.p,
}

export default function AnimatedSection({
  as = 'section',
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 28,
  once = true,
  amount = 0.2,
  playOnMount = false,
  ...rest
}) {
  const MotionTag = TAGS[as] ?? TAGS.section
  const reduceMotion = useReducedMotion()

  const from = { opacity: 0, y }
  const to = { opacity: 1, y: 0 }

  const animation = reduceMotion
    ? { initial: false, animate: undefined, whileInView: undefined, viewport: undefined }
    : playOnMount
      ? { initial: from, animate: to, whileInView: undefined, viewport: undefined }
      : {
          initial: from,
          animate: undefined,
          whileInView: to,
          viewport: { once, amount },
        }

  return (
    <MotionTag
      className={className}
      transition={{ duration, delay, ease: EASE }}
      {...animation}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
