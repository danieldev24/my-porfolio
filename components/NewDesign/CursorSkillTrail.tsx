import { useEffect, useRef } from 'react'
import {
  MAX_TAGS,
  MIN_TRAVEL_DISTANCE,
  randomBetween,
  scrambleWord,
  SPAWN_INTERVAL,
} from './cursorTrail.utils'
import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

type TrailTag = {
  bornAt: number
  decodeDuration: number
  element: HTMLSpanElement
  fadeDuration: number
  lastScrambleAt: number
  word: string
}

const CursorSkillTrail = (): JSX.Element => {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = layerRef.current

    if (
      !layer ||
      !window.matchMedia(
        '(min-width: 768px) and (hover: hover) and (pointer: fine)'
      ).matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const palette = [
      styles.cursorCoral,
      styles.cursorMustard,
      styles.cursorSage,
      styles.cursorLavender,
      styles.cursorTeal,
      styles.cursorBlue,
      styles.cursorSalmon,
    ]
    const tags: TrailTag[] = []
    let animationFrame = 0
    let lastSpawnAt = 0
    let lastWordIndex = -1
    let previousPointer = { x: Number.NaN, y: Number.NaN }

    const removeTag = (index: number): void => {
      tags[index].element.remove()
      tags.splice(index, 1)
    }

    const animate = (time: number): void => {
      for (let index = tags.length - 1; index >= 0; index -= 1) {
        const tag = tags[index]
        const elapsed = time - tag.bornAt
        const lifetime = tag.decodeDuration + tag.fadeDuration

        if (elapsed >= lifetime) {
          removeTag(index)
          continue
        }

        const decodeProgress = Math.min(elapsed / tag.decodeDuration, 1)
        const resolvedCharacters = Math.min(
          Math.floor(decodeProgress * (tag.word.length + 1)),
          tag.word.length
        )

        if (time - tag.lastScrambleAt >= 38) {
          tag.element.textContent = scrambleWord(tag.word, resolvedCharacters)
          tag.element.dataset.phase =
            resolvedCharacters === tag.word.length ? 'decoded' : 'scrambling'
          tag.lastScrambleAt = time
        }

        const fadeProgress = Math.max(
          (elapsed - tag.decodeDuration) / tag.fadeDuration,
          0
        )
        const opacity =
          elapsed < tag.decodeDuration ? 0.98 : 0.98 * (1 - fadeProgress)

        tag.element.style.opacity = opacity.toFixed(3)
      }

      animationFrame = tags.length ? window.requestAnimationFrame(animate) : 0
    }

    const spawnTag = (event: PointerEvent, time: number): void => {
      let wordIndex = Math.floor(
        Math.random() * portfolio.identity.skills.length
      )
      if (wordIndex === lastWordIndex) {
        wordIndex = (wordIndex + 1) % portfolio.identity.skills.length
      }
      lastWordIndex = wordIndex

      const word = portfolio.identity.skills[wordIndex].toUpperCase()
      const element = document.createElement('span')
      const paletteClass = palette[Math.floor(Math.random() * palette.length)]
      const decodeDuration = randomBetween(220, 360)

      element.className = `${styles.cursorSkill} ${paletteClass}`
      element.textContent = scrambleWord(word, 0)
      element.dataset.cursorTag = ''
      element.dataset.phase = 'scrambling'
      element.dataset.word = word
      element.style.opacity = '0.98'
      element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      layer.appendChild(element)

      tags.push({
        bornAt: time,
        decodeDuration,
        element,
        fadeDuration: randomBetween(650, 950),
        lastScrambleAt: time,
        word,
      })

      if (tags.length > MAX_TAGS) {
        removeTag(0)
      }

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(animate)
      }
    }

    const handlePointerMove = (event: PointerEvent): void => {
      const time = window.performance.now()
      const isFirstMove = Number.isNaN(previousPointer.x)
      const travelled = Math.hypot(
        event.clientX - previousPointer.x,
        event.clientY - previousPointer.y
      )

      if (
        isFirstMove ||
        (time - lastSpawnAt >= SPAWN_INTERVAL &&
          travelled >= MIN_TRAVEL_DISTANCE)
      ) {
        spawnTag(event, time)
        lastSpawnAt = time
        previousPointer = { x: event.clientX, y: event.clientY }
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.cancelAnimationFrame(animationFrame)
      tags.forEach((tag) => tag.element.remove())
    }
  }, [])

  return (
    <div
      ref={layerRef}
      className={styles.cursorTrail}
      data-cursor-trail
      aria-hidden="true"
    />
  )
}

export default CursorSkillTrail
