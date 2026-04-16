import type { NewsItem } from "@shared/types"
import { describe, expect, it } from "vitest"
import { NEWS_MAX_AGE, filterFreshNews, getNewsItemTimestamp } from "./news"

describe("news freshness", () => {
  const now = Date.parse("2026-04-16T04:27:27.899Z")

  it("gets timestamp from pubDate or extra.date", () => {
    expect(getNewsItemTimestamp({
      id: "a",
      title: "a",
      url: "https://example.com/a",
      pubDate: "2026-04-16T04:00:00.000Z",
    })).toBe(Date.parse("2026-04-16T04:00:00.000Z"))

    expect(getNewsItemTimestamp({
      id: "b",
      title: "b",
      url: "https://example.com/b",
      extra: {
        date: 1776313019000,
      },
    })).toBe(1776313019000)
  })

  it("filters out items older than 72 hours and keeps undated items", () => {
    const stale = new Date(now - NEWS_MAX_AGE - 1000).toISOString()
    const fresh = new Date(now - NEWS_MAX_AGE + 1000).toISOString()

    expect(filterFreshNews([
      {
        id: "stale",
        title: "stale",
        url: "https://example.com/stale",
        pubDate: stale,
      },
      {
        id: "fresh",
        title: "fresh",
        url: "https://example.com/fresh",
        pubDate: fresh,
      },
      {
        id: "undated",
        title: "undated",
        url: "https://example.com/undated",
      },
      {
        id: "bad-date",
        title: "bad-date",
        url: "https://example.com/bad-date",
        pubDate: "not-a-date",
      },
    ] as NewsItem[], now)).toEqual<NewsItem[]>([
      {
        id: "fresh",
        title: "fresh",
        url: "https://example.com/fresh",
        pubDate: fresh,
      },
      {
        id: "undated",
        title: "undated",
        url: "https://example.com/undated",
      },
      {
        id: "bad-date",
        title: "bad-date",
        url: "https://example.com/bad-date",
        pubDate: "not-a-date",
      },
    ])
  })
})
