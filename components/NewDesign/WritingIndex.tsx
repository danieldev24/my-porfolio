import styles from './portfolio.module.css'
import { Article } from 'types/article'

type WritingIndexProps = {
  articles: Article[]
}

const WritingIndex = ({ articles }: WritingIndexProps): JSX.Element => (
  <section
    id="writing"
    className={styles.section}
    aria-labelledby="writing-title"
  >
    <header className={styles.sectionHeader}>
      <span className={styles.sectionIndex}>03</span>
      <h2 id="writing-title">Writing notes</h2>
      <span className={styles.sectionMeta}>DEV.LOG</span>
    </header>

    <div className={styles.writingLead}>
      <p>Notes from the workbench.</p>
      <p>
        Occasional writing about mobile engineering, product craft, and what I
        learn while building.
      </p>
    </div>

    {articles.length > 0 ? (
      <ol className={styles.writingList}>
        {articles.map((article, index) => (
          <li key={article.id}>
            <a href={article.url} target="_blank" rel="noreferrer">
              <span className={styles.writingNumber}>
                W—{String(index + 1).padStart(2, '0')}
              </span>
              <span>
                <strong>{article.title}</strong>
                <small>{article.description}</small>
              </span>
              <time>{article.readable_publish_date}</time>
            </a>
          </li>
        ))}
      </ol>
    ) : (
      <div className={styles.writingEmpty} role="status">
        <span>NO REMOTE ENTRIES</span>
        <p>The notebook is offline. Project notes are still being assembled.</p>
        <a href="https://dev.to/sondaniel" target="_blank" rel="noreferrer">
          Visit the archive ↗
        </a>
      </div>
    )}
  </section>
)

export default WritingIndex
