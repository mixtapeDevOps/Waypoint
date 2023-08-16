import clsx from "clsx"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"
}

export const Heading: FC<Props> = (props) => {
  const { children, className, tagName: TagName = "h2" } = props

  return (
    <TagName
      className={clsx(
        "text-sm border-l-4 border-[#F06C00] pl-2 font-bold leading-tight",
        className,
      )}
    >
      {children}
    </TagName>
  )
}
