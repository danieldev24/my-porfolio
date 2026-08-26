import { useColorMode } from '@chakra-ui/react'
import ExperienceIndex from './ExperienceIndex'
import MobileHeader from './MobileHeader'
import NavigationRail from './NavigationRail'
import ProfileIntro from './ProfileIntro'
import styles from './portfolio.module.css'

const PortfolioShell = (): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <div className={styles.page} data-theme={colorMode}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <div className={styles.frame}>
        <MobileHeader />
        <NavigationRail />

        <main id="main-content" className={styles.main}>
          <ProfileIntro />
          <ExperienceIndex />
        </main>
      </div>
    </div>
  )
}

export default PortfolioShell
