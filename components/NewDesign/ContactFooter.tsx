import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

const ContactFooter = (): JSX.Element => {
  const { identity, social } = portfolio

  return (
    <footer id="contact" className={styles.contactFooter}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIndex}>05</span>
        <h2 id="contact-title">Contact</h2>
        <span className={styles.sectionMeta}>OPEN CHANNEL</span>
      </div>

      <section className={styles.contactPanel} aria-labelledby="contact-title">
        <p className={styles.contactKicker}>Have a hard mobile problem?</p>
        <p className={styles.contactStatement}>
          Let&apos;s build something that earns its place on the home screen.
        </p>
        <div className={styles.contactActions}>
          <a href={`mailto:${identity.email}`}>{identity.email} ↗</a>
          <a href={identity.cv} target="_blank" rel="noreferrer">
            Download CV ↓
          </a>
        </div>
      </section>

      <div className={styles.footerIndex}>
        <div>
          <span>© 2026 {identity.fullName}</span>
          <span>{identity.location}</span>
          <span>UTC+7</span>
        </div>
        <nav aria-label="Contact links">
          <span>CHANNELS</span>
          <ul>
            {social.map((item) => (
              <li key={item.label}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.label} ↗
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${identity.email}`}>Email ↗</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Page index">
          <span>INDEX</span>
          <ul>
            <li>
              <a href="#top">Profile</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#writing">Writing</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default ContactFooter
