import styles from '../PrevPageButton/page_buttons.module.scss'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/selector'

type Props = {
    disabled: boolean
    onPage: (page: number) => void
}

export const NextPageButton = ({disabled = false, onPage}: Props) => {
    const {page} = useSelector(selectPosts)

    return (
        <button disabled={disabled} onClick={() => onPage(page! + 1)} className={styles.buttons_style}>
            <p>Next</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.043 18.7076C13.853 18.5076 13.753 18.2576 13.753 17.9976C13.753 17.7376 13.853 17.4876 14.043 17.2876L18.343 12.9976L4.75299 12.9976C4.20299 12.9976 3.75299 12.5476 3.75299 11.9976C3.75299 11.4476 4.20299 10.9976 4.75299 10.9976L18.343 10.9976L14.043 6.70762C13.653 6.31762 13.653 5.67762 14.043 5.28762C14.433 4.89762 15.073 4.89762 15.463 5.28762L21.463 11.2876C21.553 11.3776 21.623 11.4876 21.673 11.6076C21.693 11.6576 21.713 11.6976 21.713 11.7476C21.763 11.9076 21.763 12.0876 21.713 12.2476C21.713 12.2976 21.693 12.3376 21.673 12.3876C21.623 12.5076 21.553 12.6176 21.463 12.7076L15.463 18.7076C15.073 19.0976 14.433 19.0976 14.043 18.7076Z" fill="#313037" />
            </svg>
        </button>
    )
}
