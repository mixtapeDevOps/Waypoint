/* eslint-disable no-constant-condition */
import Image from "next/image"

import styles from "./CssModule.module.scss"

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
  <a href={url} target="_blank" className={styles.searchEngine} rel="noreferrer">
    <div
      style={{
        backgroundColor:
          title === "Yahoo!" ||
          title === "Yandex" ||
          title === "StartPage" ||
          title === "Ecosia"
            ? "#fff"
            : "transparent",
      }}
      className={styles.imageContainer}
    >
      <Image
        src={`/svg/${icon}`}
        alt={title}
        width={40}
        height={16}
        className={styles.img}
      />
    </div>
    <h2 className={styles.title}>{title}</h2>
    {/* <p className="m-0 text-xl">{description}</p> */}
  </a>
)
