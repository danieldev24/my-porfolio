import Image from 'next/image'
import styles from './portfolio.module.css'

const DitherVisual = (): JSX.Element => (
  <div className={styles.heroVisual}>
    <div className={styles.signalDisc} aria-hidden="true" />
    <div className={styles.orbitRing} aria-hidden="true" />
    <div className={styles.avatarFrame}>
      <Image
        className={styles.avatarImage}
        src="/hs_avatar.png"
        alt="Portrait of Hoang Son"
        width={941}
        height={915}
        sizes="(max-width: 639px) 176px, 224px"
        priority
      />
      <span className={styles.avatarStamp} aria-hidden="true">
        MOBILE / SYSTEMS
      </span>
    </div>
    <span className={styles.visualCoordinate} aria-hidden="true">
      HCMC / VN · SINCE 2019
    </span>
  </div>
)

export default DitherVisual
