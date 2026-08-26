import { useEffect, useRef } from 'react'
import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

type Particle = {
  velocityX: number
  velocityY: number
  x: number
  y: number
}

const clamp = (value: number, minimum: number, maximum: number): number =>
  Math.min(Math.max(value, minimum), maximum)

const SkillField = (): JSX.Element => {
  const fieldRef = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<Array<HTMLLIElement | null>>([])

  useEffect(() => {
    const field = fieldRef.current
    const container = field?.parentElement

    if (
      !field ||
      !container ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const particles: Particle[] = portfolio.identity.skills.map(() => ({
      velocityX: 0,
      velocityY: 0,
      x: 0,
      y: 0,
    }))
    let animationFrame = 0
    let previousPointer = { time: 0, x: 0, y: 0 }

    const animate = (): void => {
      let isMoving = false

      particles.forEach((particle, index) => {
        particle.velocityX += -particle.x * 0.025
        particle.velocityY += -particle.y * 0.025
        particle.velocityX *= 0.9
        particle.velocityY *= 0.9
        particle.x += particle.velocityX
        particle.y += particle.velocityY

        if (
          Math.abs(particle.x) > 0.05 ||
          Math.abs(particle.y) > 0.05 ||
          Math.abs(particle.velocityX) > 0.05 ||
          Math.abs(particle.velocityY) > 0.05
        ) {
          isMoving = true
        } else {
          particle.x = 0
          particle.y = 0
        }

        const item = itemRefs.current[index]
        if (item) {
          item.style.transform = `translate3d(${particle.x.toFixed(
            2
          )}px, ${particle.y.toFixed(2)}px, 0)`
        }
      })

      animationFrame = isMoving ? window.requestAnimationFrame(animate) : 0
    }

    const startAnimation = (): void => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(animate)
      }
    }

    const moveSkills = (event: PointerEvent): void => {
      const bounds = container.getBoundingClientRect()
      const pointerX = event.clientX - bounds.left
      const pointerY = event.clientY - bounds.top
      const elapsed = Math.max(event.timeStamp - previousPointer.time, 16)
      const pointerVelocityX = clamp(
        ((pointerX - previousPointer.x) / elapsed) * 16,
        -10,
        10
      )
      const pointerVelocityY = clamp(
        ((pointerY - previousPointer.y) / elapsed) * 16,
        -10,
        10
      )

      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return
        }

        const particle = particles[index]
        const itemX = item.offsetLeft + item.offsetWidth / 2 + particle.x
        const itemY = item.offsetTop + item.offsetHeight / 2 + particle.y
        const deltaX = itemX - pointerX
        const deltaY = itemY - pointerY
        const distance = Math.max(Math.hypot(deltaX, deltaY), 1)
        const repelRadius = 104
        const trailRadius = 320

        if (distance < repelRadius) {
          const force = (1 - distance / repelRadius) * 4
          particle.velocityX = clamp(
            particle.velocityX +
              (deltaX / distance) * force +
              pointerVelocityX * 0.08,
            -7,
            7
          )
          particle.velocityY = clamp(
            particle.velocityY +
              (deltaY / distance) * force +
              pointerVelocityY * 0.08,
            -7,
            7
          )
        } else if (distance < trailRadius) {
          const trailForce = 1 - distance / trailRadius
          particle.velocityX = clamp(
            particle.velocityX -
              (deltaX / distance) * trailForce * 1.1 +
              pointerVelocityX * trailForce * 0.06,
            -7,
            7
          )
          particle.velocityY = clamp(
            particle.velocityY -
              (deltaY / distance) * trailForce * 1.1 +
              pointerVelocityY * trailForce * 0.06,
            -7,
            7
          )
        }
      })

      previousPointer = {
        time: event.timeStamp,
        x: pointerX,
        y: pointerY,
      }
      startAnimation()
    }

    container.addEventListener('pointermove', moveSkills)

    return () => {
      container.removeEventListener('pointermove', moveSkills)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <ul ref={fieldRef} className={styles.skillField} aria-label="Core skills">
      {portfolio.identity.skills.map((skill, index) => (
        <li
          key={skill}
          ref={(element) => {
            itemRefs.current[index] = element
          }}
          className={styles.skillTag}
        >
          {skill}
        </li>
      ))}
    </ul>
  )
}

export default SkillField
