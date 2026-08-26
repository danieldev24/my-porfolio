import { useColorMode } from '@chakra-ui/react'
import CraftKit from './CraftKit'
import ContactFooter from './ContactFooter'
import ExperienceIndex from './ExperienceIndex'
import MobileHeader from './MobileHeader'
import NavigationRail from './NavigationRail'
import ProfileIntro from './ProfileIntro'
import ProjectGrid from './ProjectGrid'
import WritingIndex from './WritingIndex'
import styles from './portfolio.module.css'
import { Article } from 'types/article'

type PortfolioShellProps = {
  articles: Article[]
}

const PortfolioShell = ({ articles }: PortfolioShellProps): JSX.Element => {
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
          <ProjectGrid />
          <WritingIndex articles={articles} />
          <CraftKit />
          <ContactFooter />
        </main>
      </div>
    </div>
  )
}

export default PortfolioShell
