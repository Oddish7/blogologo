import styles from './page_buttons.module.scss'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/selector'

type Props = {
    disabled: boolean
    onPage: (page: number) => void
}

export const PrevPageButton = ({disabled = false, onPage}: Props) => {
    const {page} = useSelector(selectPosts)

    return (
        <button onClick={() => onPage(page! - 1)} disabled={disabled} className={styles.buttons_style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.7099 5.29238C10.8999 5.49238 10.9999 5.74238 10.9999 6.00238C10.9999 6.26238 10.8999 6.51238 10.7099 6.71238L6.40994 11.0024L19.9999 11.0024C20.5499 11.0024 20.9999 11.4524 20.9999 12.0024C20.9999 12.5524 20.5499 13.0024 19.9999 13.0024L6.40994 13.0024L10.7099 17.2924C11.0999 17.6824 11.0999 18.3224 10.7099 18.7124C10.3199 19.1024 9.67994 19.1024 9.28994 18.7124L3.28994 12.7124C3.19994 12.6224 3.12994 12.5124 3.07994 12.3924C3.05994 12.3424 3.03994 12.3024 3.03994 12.2524C2.98994 12.0924 2.98994 11.9124 3.03994 11.7524C3.03994 11.7024 3.05994 11.6624 3.07994 11.6124C3.12994 11.4924 3.19994 11.3824 3.28994 11.2924L9.28994 5.29238C9.67994 4.90238 10.3199 4.90238 10.7099 5.29238Z" fill="#313037" />
            </svg>
            <p>Prev</p>
        </button>
    )
}
