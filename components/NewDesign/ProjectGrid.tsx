import ProjectCard from './ProjectCard'
import styles from './portfolio.module.css'
import { portfolio } from 'config/portfolio'

const ProjectGrid = (): JSX.Element => (
  <section
    id="projects"
    className={styles.section}
    aria-labelledby="projects-title"
  >
    <header className={styles.sectionHeader}>
      <span className={styles.sectionIndex}>02</span>
      <h2 id="projects-title">Selected projects</h2>
      <span className={styles.sectionMeta}>
        {portfolio.projects.length} BUILDS
      </span>
    </header>

    <div className={styles.projectIntro}>
      <p>Experiments with a job to do.</p>
      <p>
        Personal builds across Android, cross-platform mobile, and product
        interaction.
      </p>
    </div>

    <div className={styles.projectGrid}>
      {portfolio.projects.map((project, index) => (
        <ProjectCard key={project.name} index={index + 1} project={project} />
      ))}
    </div>
  </section>
)

export default ProjectGrid
