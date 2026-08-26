import { useEffect, useRef } from 'react'
import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

type Point = {
  x: number
  y: number
}

const tagOffsets: Point[] = [
  { x: -112, y: -58 },
  { x: 20, y: -82 },
  { x: 96, y: -34 },
  { x: -126, y: 10 },
  { x: 112, y: 34 },
  { x: -72, y: 66 },
  { x: 24, y: 82 },
  { x: 126, y: -92 },
]

const clamp = (value: number, minimum: number, maximum: number): number =>
  Math.min(Math.max(value, minimum), maximum)

const CursorSkillTrail = (): JSX.Element => {
  const tagRefs = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    if (
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const points: Point[] = portfolio.identity.skills.map(() => ({
      x: 0,
      y: 0,
    }))
    const pointer: Point = { x: 0, y: 0 }
    let animationFrame = 0
    let hasPointer = false
    let lastMoveTime = 0

    const animate = (time: number): void => {
      const idleTime = time - lastMoveTime
      const opacity = clamp(1 - Math.max(idleTime - 240, 0) / 560, 0, 1)

      points.forEach((point, index) => {
        const offset = tagOffsets[index]
        const follow = 0.2 - index * 0.014
        const targetX = pointer.x + offset.x
        const targetY = pointer.y + offset.y

        point.x += (targetX - point.x) * follow
        point.y += (targetY - point.y) * follow

        const tag = tagRefs.current[index]
        if (tag) {
          const rotation = (index % 2 === 0 ? -1 : 1) * (index + 1) * 0.35
          tag.style.opacity = String(opacity * (1 - index * 0.045))
          tag.style.transform = `translate3d(${point.x.toFixed(
            2
          )}px, ${point.y.toFixed(
            2
          )}px, 0) translate(-50%, -50%) rotate(${rotation}deg)`
        }
      })

      if (opacity > 0) {
        animationFrame = window.requestAnimationFrame(animate)
      } else {
        animationFrame = 0
      }
    }

    const showTrail = (event: PointerEvent): void => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      lastMoveTime = window.performance.now()

      if (!hasPointer) {
        points.forEach((point, index) => {
          point.x = pointer.x + tagOffsets[index].x
          point.y = pointer.y + tagOffsets[index].y
        })
        hasPointer = true
      }

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(animate)
      }
    }

    const hideTrail = (event: PointerEvent): void => {
      if (!event.relatedTarget) {
        lastMoveTime = 0
      }
    }

    window.addEventListener('pointermove', showTrail, { passive: true })
    window.addEventListener('pointerout', hideTrail, { passive: true })

    return () => {
      window.removeEventListener('pointermove', showTrail)
      window.removeEventListener('pointerout', hideTrail)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className={styles.cursorTrail} data-cursor-trail aria-hidden="true">
      {portfolio.identity.skills.map((skill, index) => (
        <span
          key={skill}
          ref={(element) => {
            tagRefs.current[index] = element
          }}
          className={styles.cursorSkill}
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default CursorSkillTrail
