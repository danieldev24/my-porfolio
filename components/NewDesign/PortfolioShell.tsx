import { useColorMode } from '@chakra-ui/react'
import CraftKit from './CraftKit'
import ContactFooter from './ContactFooter'
import CursorSkillTrail from './CursorSkillTrail'
import ExperienceIndex from './ExperienceIndex'
import MobileHeader from './MobileHeader'
import NavigationRail from './NavigationRail'
import ProfileIntro from './ProfileIntro'
import ProjectGrid from './ProjectGrid'
import SectionReveal from './SectionReveal'
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
      <CursorSkillTrail />
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <div className={styles.frame}>
        <MobileHeader />
        <NavigationRail />

        <main id="main-content" className={styles.main}>
          <ProfileIntro />
          <SectionReveal>
            <ExperienceIndex />
          </SectionReveal>
          <SectionReveal>
            <ProjectGrid />
          </SectionReveal>
          <SectionReveal>
            <WritingIndex articles={articles} />
          </SectionReveal>
          <SectionReveal>
            <CraftKit />
          </SectionReveal>
          <SectionReveal>
            <ContactFooter />
          </SectionReveal>
        </main>
      </div>
    </div>
  )
}

export default PortfolioShell
