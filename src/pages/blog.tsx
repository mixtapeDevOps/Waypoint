import { GetStaticProps } from "next"

import BlogList from "../components/BlogList"
import { getBlogPosts } from "../pages/utils/getBlogPosts"

interface Props {
  posts: ReturnType<typeof getBlogPosts>
}

export default function Home({ posts }: Props) {
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = getBlogPosts()
  return { props: { posts } }
}
