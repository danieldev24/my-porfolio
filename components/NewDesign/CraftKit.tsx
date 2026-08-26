import { useState } from 'react'
import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

const CraftKit = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = portfolio.craft[activeIndex]

  return (
    <section
      id="craft"
      className={styles.section}
      aria-labelledby="craft-title"
    >
      <header className={styles.sectionHeader}>
        <span className={styles.sectionIndex}>04</span>
        <h2 id="craft-title">Mobile craft kit</h2>
        <span className={styles.sectionMeta}>SELECT A LAYER</span>
      </header>

      <div className={styles.craftBoard}>
        <ol
          className={styles.craftItems}
          aria-label="Mobile engineering disciplines"
        >
          {portfolio.craft.map((item, index) => (
            <li key={item.code}>
              <button
                type="button"
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                <span>{item.code}</span>
                <strong>{item.label}</strong>
                <small>{item.note}</small>
              </button>
            </li>
          ))}
        </ol>

        <div className={styles.craftDetail} role="status" aria-live="polite">
          <span>LAYER {activeItem.code} / ACTIVE</span>
          <h3>{activeItem.label}</h3>
          <p>{activeItem.detail}</p>
          <div className={styles.craftDiagram} aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CraftKit
