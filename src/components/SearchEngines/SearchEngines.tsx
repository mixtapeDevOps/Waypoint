import styles from './CssModule.module.css';

interface SearchEnginesProps {
  title: string
  url: string
  icon: string
  description: string
}

export const SearchEngines: React.FC<SearchEnginesProps> = ({ url, title, icon, description }: SearchEnginesProps) => (
  <a
    href={url}
    target="_blank"
    className={styles.searchEngine}
  >
    {/* <div className={styles.dev}>aiueo</div> */}
    <div className={styles.imageContainer}>
      <img
        src={'/svg/'+icon}
        alt={title}
        className={"rounded-full"+styles.img}
      />
    </div>
    <h2 className={styles.title}>{title}</h2>
    {/* <p className="m-0 text-xl">{description}</p> */}
  </a>
)
