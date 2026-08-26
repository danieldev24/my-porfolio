import ThemeControl from './ThemeControl'
import styles from './portfolio.module.css'

export const navigationItems = [
  { href: '#top', index: '00', label: 'Profile' },
  { href: '#experience', index: '01', label: 'Experience' },
  { href: '#projects', index: '02', label: 'Projects' },
  { href: '#writing', index: '03', label: 'Writing' },
  { href: '#craft', index: '04', label: 'Craft kit' },
  { href: '#contact', index: '05', label: 'Contact' },
]

const NavigationRail = (): JSX.Element => (
  <aside className={styles.rail} aria-label="Portfolio index">
    <div>
      <p className={styles.microLabel}>01_IDENTITY</p>
      <a className={styles.brand} href="#top" aria-label="Hoang Son, home">
        <span className={styles.brandMark}>HS</span>
        <span>
          Hoang Son
          <small>Mobile engineer</small>
        </span>
      </a>
    </div>

    <nav className={styles.railNav} aria-label="Main navigation">
      <p className={styles.microLabel}>02_INDEX</p>
      <ol>
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>
              <span>{item.index}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>

    <div className={styles.railUtility}>
      <p className={styles.microLabel}>03_THEME</p>
      <ThemeControl />
      <div className={styles.socialLinks} aria-label="Social links">
        <a
          href="https://github.com/danieldev24"
          target="_blank"
          rel="noreferrer"
        >
          GH
        </a>
        <a
          href="https://www.linkedin.com/in/hoangsonshawn/"
          target="_blank"
          rel="noreferrer"
        >
          LI
        </a>
        <a href="https://dev.to/sondaniel" target="_blank" rel="noreferrer">
          DEV
        </a>
      </div>
    </div>

    <div className={styles.railFooter}>
      <span className={styles.liveDot} aria-hidden="true" />
      <span>Ho Chi Minh City</span>
      <span>UTC+7</span>
    </div>
  </aside>
)

export default NavigationRail
