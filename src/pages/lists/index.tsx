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
    <div className="flex min-h-screen max-w-full flex-col overflow-hidden bg-black p-2 text-white">
      <Link href="/" className="mr-2">
        ← Topに戻る
      </Link>
      <div>
        {isFlagEnabled && (
          <ul>
            <li>リスト1</li>
            <li>リスト2</li>
            <li>リスト3</li>
          </ul>
        )}
      </div>
      <div>{!isFlagEnabled && <p>リストは非表示状態です</p>}</div>
    </div>
  )
}

export default Lists
