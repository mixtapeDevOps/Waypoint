import Link from "next/link"
import { useEffect, useId, useState } from "react"

const Settings = () => {
  const [isFlagEnabled, setIsFlagEnabled] = useState(false)
  const id = useId()

  // get isFlagEnabled
  useEffect(() => {
    setIsFlagEnabled(
      Boolean(
        typeof localStorage !== "undefined" &&
          localStorage.getItem("isFlagEnabled") === "true",
      ),
    )
  }, [])

  // set isFlagEnabled
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked
    setIsFlagEnabled(newValue)
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("isFlagEnabled", newValue.toString())
    }
  }

  return (
    <div className="flex min-h-screen max-w-full flex-col overflow-hidden bg-black p-2 text-white">
      <Link href="/" className="mr-2">
        Topに戻る
      </Link>
      <div>
        <input
          type="checkbox"
          id={id}
          name="checkbox01"
          checked={isFlagEnabled}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={id} className="checkbox01">
          {isFlagEnabled && <p>Enabled</p>}
          {!isFlagEnabled && <p>Disabled</p>}
        </label>
      </div>

      <div>
        <p>isFlagEnabled: {isFlagEnabled.toString()}</p>
        {isFlagEnabled && <p>フラグが有効です</p>}
        {!isFlagEnabled && <p>フラグが無効です</p>}
      </div>
    </div>
  )
}

export default Settings
