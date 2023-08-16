import Link from "next/link"

interface Post {
  id: string
  contentHtml: string
  title: string // titleを追加
}

interface Props {
  posts: Post[]
}

export default function BlogList({ posts }: Props) {
  console.log(posts.map((post) => post))
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`../pages/blog/${post.id}`}>
            <div className="text-white">{post.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
