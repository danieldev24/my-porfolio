import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

const ExperienceIndex = (): JSX.Element => (
  <section
    id="experience"
    className={styles.section}
    aria-labelledby="experience-title"
  >
    <header className={styles.sectionHeader}>
      <span className={styles.sectionIndex}>01</span>
      <h2 id="experience-title">Experience</h2>
      <span className={styles.sectionMeta}>2019—NOW</span>
    </header>

    <div className={styles.experienceLead}>
      <p>Building foundations, not just features.</p>
      <p>
        My work sits where product engineering meets systems thinking: reusable
        UI, mobile architecture, release confidence, and the small decisions
        that help teams move well.
      </p>
    </div>

    <ol className={styles.experienceList}>
      {portfolio.experience.map((item) => (
        <li key={item.company}>
          <article>
            <div className={styles.experienceHeading}>
              <h3>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.company} ↗
                </a>
              </h3>
              <time>{item.period}</time>
            </div>
            <p className={styles.experienceRole}>{item.role}</p>
            <p className={styles.experienceSummary}>{item.summary}</p>
            <ul className={styles.responsibilityList}>
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  </section>
)

export default ExperienceIndex
