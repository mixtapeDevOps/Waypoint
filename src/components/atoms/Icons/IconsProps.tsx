import { SVGProps } from "react"

type SizeStyle = {
  width: string
  height: string
  className?: string
}
export type Props = SVGProps<SVGElement> & {
  size?: number | SizeStyle
}
