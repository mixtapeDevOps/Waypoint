const puppeteer = require("puppeteer")
const fs = require("fs")
const path = require("path")

const screenshotPath = path.join(__dirname, "..", "screenshot.png")

async function takeScreenshot() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("http://localhost:3000")
  const screenshot = await page.screenshot()
  await browser.close()
  fs.writeFileSync(screenshotPath, screenshot)
}

takeScreenshot().then(() => {
  const pathInReadme = "<!-- screenshot -->"
  const screenshotUrl = `![screenshot](https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY>/raw/main/screenshot.png)`
  const readmePath = path.join(__dirname, "..", "README.md")
  const readmeContent = fs.readFileSync(readmePath, "utf8")
  const updatedReadmeContent = readmeContent.replace(pathInReadme, screenshotUrl)
  fs.writeFileSync(readmePath, updatedReadmeContent)
})
