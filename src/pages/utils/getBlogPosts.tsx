import fs from "fs"
import matter from "gray-matter"
import path from "path"
import remarkHtml from "remark-html"
import remarkParse from "remark-parse"
import { unified } from "unified"

const blogDirectory = path.join(process.cwd(), "src/pages/blog")

export function getBlogPosts() {
  const fileNames = fs.readdirSync(blogDirectory)

  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    const processedContent = unified()
      .use(remarkParse)
      .use(remarkHtml)
      .processSync(matterResult.content)
      .toString()

    return {
      id,
      contentHtml: processedContent,
      title: matterResult.data.title as string, // titleを追加
    }
  })
}
