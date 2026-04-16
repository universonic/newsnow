import { describe, expect, it } from "vitest"
import { parseReutersBestPage } from "../reuters"
import { parseDate } from "#/utils/date"

describe("parseReutersBestPage", () => {
  it("parses Reuters Best business finance markdown", () => {
    const markdown = `
*   ![Image](https://reutersbest.com/foo.jpg)

### [SpaceX lines up 21 banks for mega IPO, code-named project Apex\u00A0](https://reutersbest.com/spacex-lines-up-21-banks-for-mega-ipo-code-named-project-apex/)

1 April 2026
*   ![Image](https://reutersbest.com/bar.jpg)

### [Thyssenkrupp, Jindal steel sale talks falter on pension, energy costs, sources say](https://reutersbest.com/thyssenkrupp-jindal-steel-sale-talks-falter-on-pension-energy-costs-sources-say/)

26 March 2026
`

    expect(parseReutersBestPage(markdown)).toEqual([
      {
        id: "https://reutersbest.com/spacex-lines-up-21-banks-for-mega-ipo-code-named-project-apex/",
        title: "SpaceX lines up 21 banks for mega IPO, code-named project Apex",
        url: "https://reutersbest.com/spacex-lines-up-21-banks-for-mega-ipo-code-named-project-apex/",
        pubDate: parseDate("1 April 2026", "D MMMM YYYY").valueOf(),
        extra: {
          info: "Reuters Best",
        },
      },
      {
        id: "https://reutersbest.com/thyssenkrupp-jindal-steel-sale-talks-falter-on-pension-energy-costs-sources-say/",
        title: "Thyssenkrupp, Jindal steel sale talks falter on pension, energy costs, sources say",
        url: "https://reutersbest.com/thyssenkrupp-jindal-steel-sale-talks-falter-on-pension-energy-costs-sources-say/",
        pubDate: parseDate("26 March 2026", "D MMMM YYYY").valueOf(),
        extra: {
          info: "Reuters Best",
        },
      },
    ])
  })
})
