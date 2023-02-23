import { SVGProps } from "react"

type SizeStyle = {
  width: string
  height: string
}
export type Props = SVGProps<SVGElement> & {
  size?: number | SizeStyle
}
