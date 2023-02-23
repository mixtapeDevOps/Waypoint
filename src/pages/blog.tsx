import { GetStaticProps } from "next"
import { getBlogPosts } from "../pages/utils/getBlogPosts"
import BlogList from "../components/BlogList"

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getBlogPosts()
  return { props: { posts } }
}
