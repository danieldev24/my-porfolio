import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

type SectionRevealProps = {
  children: ReactNode
}

const SectionReveal = ({ children }: SectionRevealProps): JSX.Element => {
  const reduceMotion = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default SectionReveal
