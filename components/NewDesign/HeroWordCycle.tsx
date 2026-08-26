import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './portfolio.module.css'

const words = ['clear', 'coherent', 'reliable', 'human']

const HeroWordCycle = (): JSX.Element => {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % words.length)
    }, 2400)
    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return (
    <>
      <span className={styles.visuallyHidden}>clear.</span>
      <span className={styles.wordSlot} aria-hidden="true">
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.em
            key={words[activeIndex]}
            className={styles.cyclingWord}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {words[activeIndex]}.
          </motion.em>
        </AnimatePresence>
      </span>
    </>
  )
}

export default HeroWordCycle
