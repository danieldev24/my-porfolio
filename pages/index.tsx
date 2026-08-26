import { GetStaticProps } from 'next'
import OpenGraphHead from 'components/Misc/OpenGraphHead'
import PortfolioShell from 'components/NewDesign/PortfolioShell'
import { getArticles } from 'lib/articles'
import { Article } from 'types/article'

type PortfolioProps = {
  articles: Article[]
}

const Portfolio = ({ articles }: PortfolioProps): JSX.Element => (
  <>
    <OpenGraphHead />
    <PortfolioShell articles={articles} />
  </>
)

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => ({
  props: {
    articles: await getArticles(),
  },
  revalidate: 3600,
})

export default Portfolio
