import styles from './portfolio.module.css'

const PortfolioShell = (): JSX.Element => (
  <div className={styles.page}>
    <a className={styles.skipLink} href="#main-content">
      Skip to content
    </a>

    <div className={styles.frame}>
      <header className={styles.mobileHeader}>
        <a
          className={styles.mobileBrand}
          href="#top"
          aria-label="Hoang Son, home"
        >
          HS<span>/24</span>
        </a>
        <span className={styles.mobileStatus}>Available · VN</span>
      </header>

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

        <div className={styles.railNote}>
          <p className={styles.microLabel}>02_STATUS</p>
          <p>
            Designing systems.
            <br />
            Shipping mobile products.
          </p>
        </div>

        <div className={styles.railFooter}>
          <span className={styles.liveDot} aria-hidden="true" />
          <span>Ho Chi Minh City</span>
          <span>UTC+7</span>
        </div>
      </aside>

      <main id="main-content" className={styles.main}>
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
            <h1 id="hero-title">Hoang Son</h1>
            <p className={styles.statement}>
              I make complex mobile systems feel <em>clear.</em>
            </p>
            <p className={styles.roleLine}>
              Android · Compose · Design Systems · Ho Chi Minh City
            </p>
            <p className={styles.intro}>
              A mobile engineer shaping reliable product experiences from the
              component API to the final interaction. I care about the details
              teams reuse and the moments customers remember.
            </p>
            <div className={styles.heroActions}>
              <a href="mailto:hoangson.shawn@gmail.com">
                Start a conversation ↗
              </a>
              <a href="/LeTranHoangSonCV.pdf" target="_blank" rel="noreferrer">
                Read the CV ↓
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
)

export default PortfolioShell
