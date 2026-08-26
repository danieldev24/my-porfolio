import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

const ProfileIntro = (): JSX.Element => {
  const { identity } = portfolio

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroVisual} aria-hidden="true">
        <div className={styles.signalDisc} />
        <div className={styles.deviceFrame}>
          <span>BUILD</span>
          <strong>24</strong>
          <span>STABLE</span>
        </div>
      </div>

      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>00 · PROFILE / MOBILE SYSTEMS</p>
        <h1 id="hero-title">{identity.name}</h1>
        <p className={styles.statement}>
          I make complex mobile systems feel <em>clear.</em>
        </p>
        <p className={styles.roleLine}>
          Android · Compose · Design Systems · {identity.location}
        </p>
        <p className={styles.intro}>{identity.introduction}</p>
        <div className={styles.heroActions}>
          <a href={`mailto:${identity.email}`}>Start a conversation ↗</a>
          <a href={identity.cv} target="_blank" rel="noreferrer">
            Read the CV ↓
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProfileIntro
