/* eslint-disable no-constant-condition */
import Image from "next/image"

interface SearchEnginesProps {
  title: string
  url: string
  icon: string
  description: string
}

export const SearchEngines: React.FC<SearchEnginesProps> = ({
  url,
  title,
  icon,
}: SearchEnginesProps) => (
  <a
    href={url}
    target="_blank"
    className="mb-2 grid grid-cols-4 items-center gap-1"
    rel="noreferrer"
  >
    <Image
      src={`/svg/${icon}`}
      alt={title}
      width={32}
      height={32}
      className="h-auto w-8"
    />
    <h2 className="text-xl col-span-3 items-center">{title}</h2>
  </a>
)
