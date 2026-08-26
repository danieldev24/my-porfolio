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
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default SectionReveal
