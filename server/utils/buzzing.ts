import type { NewsItem } from "@shared/types"
import type { SourceGetter } from "#/types"
import { myFetch } from "#/utils/fetch"
import { defineSource } from "#/utils/source"

interface BuzzingTranslation {
  title?: string
}

interface BuzzingItem {
  id?: string
  title?: string
  summary?: string
  content_text?: string
  url?: string
  date_published?: string
  _original_published?: string
  _translations?: Record<string, BuzzingTranslation>
}

interface BuzzingFeed {
  items?: BuzzingItem[]
}

function normalizeText(text?: string) {
  return text
    ?.replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function getBuzzingHover(item: BuzzingItem) {
  const contentText = item.content_text?.split(/\n原文地址:/u)[0]
  return normalizeText(item.summary ?? item._translations?.en?.title ?? contentText)
}

function toNewsItem(item: BuzzingItem): NewsItem | undefined {
  const url = normalizeText(item.url)
  const id = normalizeText(item.id) ?? url
  const title = normalizeText(item.title ?? item._translations?.["zh-Hans"]?.title ?? item._translations?.en?.title)

  if (!id || !url || !title) return undefined

  const hover = getBuzzingHover(item)

  return {
    id,
    title,
    url,
    pubDate: normalizeText(item._original_published ?? item.date_published),
    extra: hover ? { hover } : undefined,
  }
}

export function parseBuzzingFeed(feed: BuzzingFeed): NewsItem[] {
  const seen = new Set<string>()

  return (feed.items ?? []).flatMap((item) => {
    const newsItem = toNewsItem(item)
    const normalizedID = newsItem ? String(newsItem.id) : undefined

    if (!newsItem || !normalizedID || seen.has(normalizedID)) return []

    seen.add(normalizedID)
    return [newsItem]
  })
}

export function defineBuzzingSource(feedUrl: string): SourceGetter {
  return defineSource(async () => {
    const feed: BuzzingFeed = await myFetch(feedUrl)
    const items = parseBuzzingFeed(feed)

    if (!items.length) {
      throw new Error(`Cannot parse Buzzing feed: ${feedUrl}`)
    }

    return items
  })
}
