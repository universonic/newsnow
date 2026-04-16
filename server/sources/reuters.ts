import type { NewsItem } from "@shared/types"
import { myFetch } from "#/utils/fetch"
import { parseDate } from "#/utils/date"
import { defineSource } from "#/utils/source"

const REUTERS_BEST_FINANCE_URL = "https://reutersbest.com/topic/business-finance/"
const REUTERS_BEST_PROXY_URL = `https://r.jina.ai/http://${REUTERS_BEST_FINANCE_URL}`
const TITLE_PATTERN = /^### \[([^\]]+)\]\((https:\/\/reutersbest\.com\/[^\s)]+)\)$/
const DATE_PATTERN = /^\d{1,2} [a-z]+ 20\d{2}$/i

export function parseReutersBestPage(markdown: string): NewsItem[] {
  const items: NewsItem[] = []
  const seen = new Set<string>()
  const lines = markdown.split(/\r?\n/).map(line => line.trim())

  lines.forEach((line, index) => {
    const match = TITLE_PATTERN.exec(line)
    if (!match) return

    const [, rawTitle = "", url = ""] = match
    if (!url || seen.has(url)) return

    const date = lines.slice(index + 1).find(Boolean)
    if (!date || !DATE_PATTERN.test(date)) return

    const title = rawTitle
      .replace(/\u00A0/g, " ")
      .replace(/\s+/g, " ")
      .trim()

    seen.add(url)
    items.push({
      id: url,
      title,
      url,
      pubDate: parseDate(date, "D MMMM YYYY").valueOf(),
      extra: {
        info: "Reuters Best",
      },
    })
  })

  return items
}

export default defineSource(async () => {
  const markdown = await myFetch(REUTERS_BEST_PROXY_URL, {
    parseResponse: (txt: string) => txt,
  })

  const items = parseReutersBestPage(String(markdown))
  if (!items.length) {
    throw new Error("Cannot parse Reuters Business & Finance feed")
  }

  return items
})
