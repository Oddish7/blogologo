import styles from './blog_navigation.module.scss'


type Props = {
    pages: string[]
    page: string
    onPage: (page: number) => void
}

export const BlogNavigation = ({page, pages, onPage}: Props) => {
    return (
        <div className={styles.navigation}>
            {
                <div>
                    {
                        pages.map(
                            (item) => (
                                <span key={item} className={page == item ? styles.active : ''} onClick={() => onPage(+item)}>{item}</span>
                            )
                        )
                    }
                </div>
            }
        </div>
    )
}
