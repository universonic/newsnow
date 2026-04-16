import type { NewsItem } from "@shared/types"

const HOUR = 60 * 60 * 1000
export const NEWS_MAX_AGE = 72 * HOUR

function toTimestamp(date?: string | number) {
  if (date === undefined || date === null || date === "") return undefined
  if (typeof date === "number") return Number.isFinite(date) ? date : undefined
  if (/^\d+$/.test(date)) {
    const value = Number(date)
    return Number.isFinite(value) ? value : undefined
  }

  const value = Date.parse(date)
  return Number.isNaN(value) ? undefined : value
}

export function getNewsItemTimestamp(item: NewsItem) {
  return toTimestamp(item.pubDate ?? item.extra?.date)
}

export function filterFreshNews(items: NewsItem[], now = Date.now()) {
  const threshold = now - NEWS_MAX_AGE

  return items.filter((item) => {
    const timestamp = getNewsItemTimestamp(item)
    return timestamp === undefined || timestamp >= threshold
  })
}
