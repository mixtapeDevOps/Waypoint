const puppeteer = require("puppeteer")

async function takeScreenshot() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("http://localhost:3000")
  const screenshot = await page.screenshot()
  await browser.close()

  return screenshot
}

takeScreenshot().then((screenshot) => {
  console.log(`![screenshot](data:image/png;base64,${screenshot.toString("base64")})`)
})
