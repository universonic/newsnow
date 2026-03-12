import { myFetch } from "#/utils/fetch"
import { defineSource } from "#/utils/source"

interface FutunnItem {
  newsId: string
  postId: string
  newsUniqueId: string
  title: string
  pic?: string
  timestamp: string // unix seconds as string
  source?: string
  isVideo?: boolean
  isTop?: boolean
  isExternalLink?: boolean
  url: string
  imptTag?: string
  abstract?: string
  targetUrlQuery?: string
}

interface FutunnResponse {
  code: number
  message: string
  data?: {
    seqMark?: string
    hasMore?: boolean
    list?: FutunnItem[]
  }
}

export default defineSource(async () => {
  const timestamp = Date.now()
  const url = `https://news.futunn.com/news-site-api/main/get-market-list?size=48&isSupportWebp=true&seqMark=&_t=${timestamp}`

  const data: FutunnResponse = await myFetch(url)

  if (data.code !== 0 || !data.data?.list) {
    throw new Error(`futunn API error: ${data.message}`)
  }

  return data.data.list.map((item) => {
    const [, bracketTitle, rest] = item.title.match(/^【([^】]*)】(.*)$/) ?? []
    return {
      id: item.newsId,
      title: bracketTitle ?? item.title,
      pubDate: Number(item.timestamp) * 1000,
      url: item.url,
      extra: {
        hover: bracketTitle ? (rest ?? item.abstract) : item.abstract,
        info: item.source || undefined,
        icon: item.isTop
          ? "✰"
          : false,
      },
    }
  })
})
