import DitherVisual from './DitherVisual'
import HeroWordCycle from './HeroWordCycle'
import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

const ProfileIntro = (): JSX.Element => {
  const { identity } = portfolio

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <DitherVisual />

      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>00 · PROFILE / MOBILE SYSTEMS</p>
        <h1 id="hero-title">{identity.name}</h1>
        <p className={styles.statement}>
          I make complex mobile systems feel <HeroWordCycle />
        </p>
        <p className={styles.roleLine}>
          Android · Compose · Design Systems · {identity.location}
        </p>
        <div className={styles.aboutCopy}>
          <p className={styles.intro}>{identity.introduction}</p>
          {identity.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className={styles.profileFacts} aria-label="Profile details">
          {identity.profileFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
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
