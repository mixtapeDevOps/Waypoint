/* eslint-disable prettier/prettier */
import Link from "next/link"
import { useEffect, useState } from "react"

const Lists = () => {
  const [isFlagEnabled, setIsFlagEnabled] = useState(false)

  // get isFlagEnabled
  useEffect(() => {
    setIsFlagEnabled(
      Boolean(
        typeof localStorage !== "undefined" &&
        localStorage.getItem("isFlagEnabled") === "true",
      ),
    )
  }, [])

  return (
    <div className="flex min-h-screen max-w-full flex-col overflow-hidden bg-black p-4 text-white font-bold">
      <Link href="/" className="mr-2">
        ← Top
      </Link>
      <div>
        {isFlagEnabled && (
          <ul>
            <li>List1</li>
            <li>List2</li>
            <li>List3</li>
          </ul>
        )}
      </div>
      <div>{!isFlagEnabled && <p>リストは非表示状態です</p>}</div>
    </div>
  )
}

export default Lists
