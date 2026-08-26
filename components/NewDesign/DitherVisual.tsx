import styles from './portfolio.module.css'

const DitherVisual = (): JSX.Element => (
  <div className={styles.heroVisual} aria-hidden="true">
    <div className={styles.signalDisc} />
    <div className={styles.orbitRing} />
    <div className={styles.deviceFrame}>
      <span>BUILD</span>
      <strong>24</strong>
      <span>STABLE</span>
    </div>
    <span className={styles.visualCoordinate}>MOBILE / SYSTEM / 24</span>
  </div>
)

export default DitherVisual
