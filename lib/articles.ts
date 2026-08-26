import { Article } from 'types/article'

const defaultArticlesUrl =
  'https://dev.to/api/articles?username=hoangshawn&per_page=6'

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

const toArticle = (value: unknown): Article | null => {
  if (!isRecord(value)) {
    return null
  }

  const requiredStrings = [
    'title',
    'description',
    'readable_publish_date',
    'slug',
    'url',
  ] as const

  if (requiredStrings.some((key) => typeof value[key] !== 'string')) {
    return null
  }

  return {
    id: String(value.id ?? value.slug),
    type_of: typeof value.type_of === 'string' ? value.type_of : 'article',
    title: value.title as string,
    description: value.description as string,
    readable_publish_date: value.readable_publish_date as string,
    slug: value.slug as string,
    url: value.url as string,
    tag_list: Array.isArray(value.tag_list)
      ? value.tag_list.filter((tag): tag is string => typeof tag === 'string')
      : [],
    social_image:
      typeof value.social_image === 'string' ? value.social_image : '',
  }
}

export const getArticles = async (): Promise<Article[]> => {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)

  try {
    const response = await fetch(
      process.env.DEVTO_ARTICLES_URL ?? defaultArticlesUrl,
      { signal: controller.signal }
    )
    if (!response.ok) {
      return []
    }

    const payload: unknown = await response.json()
    if (!Array.isArray(payload)) {
      return []
    }

    return payload
      .map(toArticle)
      .filter((article): article is Article => article !== null)
  } catch {
    return []
  } finally {
    clearTimeout(timeout)
  }
}
