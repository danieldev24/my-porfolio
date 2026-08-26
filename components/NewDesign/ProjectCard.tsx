import Image from 'next/image'
import styles from './portfolio.module.css'
import { ProjectItem } from 'config/portfolio'

type ProjectCardProps = {
  index: number
  project: ProjectItem
}

const ProjectCard = ({ index, project }: ProjectCardProps): JSX.Element => (
  <article className={styles.projectCard}>
    <a href={project.url} target="_blank" rel="noreferrer">
      <div className={styles.projectImage}>
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 639px) 100vw, 287px"
        />
        <span className={styles.projectNumber}>
          P—{String(index).padStart(2, '0')}
        </span>
      </div>
      <div className={styles.projectBody}>
        <div className={styles.projectHeading}>
          <h3>{project.name}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        <p>{project.description}</p>
        <ul aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </a>
  </article>
)

export default ProjectCard
