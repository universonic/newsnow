import type { NewsItem } from "@shared/types"
import { parseBuzzingFeed } from "./buzzing"

describe("parseBuzzingFeed", () => {
  it("maps buzzing feed items and prefers original published time", () => {
    expect(parseBuzzingFeed({
      items: [
        {
          id: "item-1",
          title: "中文标题",
          summary: "English title",
          url: "https://example.com/news/1",
          date_published: "2026-04-13T01:07:36.692Z",
          _original_published: "2026-04-13T00:54:17.011Z",
        },
      ],
    })).toEqual<NewsItem[]>([
      {
        id: "item-1",
        title: "中文标题",
        url: "https://example.com/news/1",
        pubDate: "2026-04-13T00:54:17.011Z",
        extra: {
          hover: "English title",
        },
      },
    ])
  })

  it("falls back to translations, strips original url text, and skips invalid duplicates", () => {
    expect(parseBuzzingFeed({
      items: [
        {
          id: "item-2",
          url: "https://example.com/news/2",
          date_published: "2026-04-13T01:07:36.692Z",
          content_text: "English fallback\n原文地址: https://example.com/news/2",
          _translations: {
            "en": {
              title: "English fallback",
            },
            "zh-Hans": {
              title: "翻译标题",
            },
          },
        },
        {
          id: "item-2",
          title: "重复标题",
          url: "https://example.com/news/2-dup",
          date_published: "2026-04-13T01:07:36.692Z",
        },
        {
          id: "item-3",
          title: "缺少链接",
          date_published: "2026-04-13T01:07:36.692Z",
        },
      ],
    })).toEqual<NewsItem[]>([
      {
        id: "item-2",
        title: "翻译标题",
        url: "https://example.com/news/2",
        pubDate: "2026-04-13T01:07:36.692Z",
        extra: {
          hover: "English fallback",
        },
      },
    ])
  })
})
