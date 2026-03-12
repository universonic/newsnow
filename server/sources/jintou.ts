import { myFetch } from "#/utils/fetch"
import { defineSource } from "#/utils/source"

interface JinTouResponse {
	flag: boolean
	code: number
	msg: string
	data?: {
		data?: JinTouItem[]
	}
}

interface JinTouItem {
	id: number
	title: string
	content?: string | null
	snippet?: string | null
	pubLong?: number
	pubTime?: {
		time: number
	}
	pcUrl?: string | null
	appUrl?: string | null
	labelType?: string | null
}

function normalizeUrl(url?: string | null) {
	if (!url) return
	if (url.startsWith("http")) return url
	if (url.startsWith("//")) return `https:${url}`
	if (url.startsWith("/")) return `https://kuaixun.cngold.org${url}`
	return url
}

const DETAIL_URL = "https://kuaixun.cngold.org/getDetail.html?newsId="

export default defineSource(async () => {
	const timestamp = Date.now()
	const url = `https://kuaixun.cngold.org/getLastNews.html?variable=data&lastTime=0&_=${timestamp}`

	const rawData = await myFetch(url, {
		parseResponse: (txt: string) => txt,
	})

	const jsonStr = (rawData as string)
		.replace(/^var\s+\w+\s*=\s*/, "")
		.replace(/;*$/, "")
		.trim()

	const parsed: JinTouResponse = JSON.parse(jsonStr)
	const items = parsed.data?.data ?? []

	return items
		.filter(item => item.title?.trim())
		.map((item) => {
			const text = item.title.replace(/\s+/g, " ").trim()
			const desc = item.content ?? item.snippet ?? undefined
			const pubDate = item.pubLong ?? item.pubTime?.time ?? Date.now()
			const fallbackUrl = `${DETAIL_URL}${item.id}`
			return {
				id: item.id,
				title: text,
				pubDate,
				url: normalizeUrl(item.pcUrl) ?? normalizeUrl(item.appUrl) ?? fallbackUrl,
				extra: {
					hover: desc?.replace?.(/\r?\n+/g, " "),
				},
			}
		})
})
