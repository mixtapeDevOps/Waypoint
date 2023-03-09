import { SVGProps } from "react"

type SizeStyle = {
  width: string
  height: string
<<<<<<< Updated upstream
=======
  className?: string
>>>>>>> Stashed changes
}
export type Props = SVGProps<SVGElement> & {
  size?: number | SizeStyle
}
