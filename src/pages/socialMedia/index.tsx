import type { NextPage } from "next"
import Link from "next/link"

const SocialMedia: NextPage = () => {
  return (
    <div className="ml-4 flex flex-1 flex-col items-start bg-black py-4 text-white">
      <nav className="flex">
        <Link
          className="w-fit rounded-sm border-2 border-dashed border-white bg-black px-2 py-1 text-white duration-500 ease-out hover:bg-white hover:text-black"
          href="/"
        >
          ←home
        </Link>
        <h1 className="ml-2 w-fit rounded-md border-2 border-solid border-black px-2 py-1 text-white">
          Social Media Page
        </h1>
      </nav>

      <div className="database">
        <div>Youtube</div>
        <div>Twitter</div>
        <div>Reddit</div>
        <div>Facebook</div>
        <div>Pinterest</div>
        <div>Instagram</div>
      </div>
    </div>
  )
}
export default SocialMedia
