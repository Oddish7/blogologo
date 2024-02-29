import styles from './like-styles.module.scss';
import { ThumbsUpIcon } from './ThumbsUpIcon'

type Props = {
    setMark: boolean
    isLiked: boolean
    isDisliked: boolean,
    like: () => void
    undo: () => void
}

export const LikeFullButton = ({setMark, isLiked, isDisliked, like, undo}: Props) => {
    return (
        <button onClick={setMark && isLiked ? undo : like} className={`${styles.like_button} ${isLiked ? styles.like_set_mark : ''}`}>
            <ThumbsUpIcon/>
        </button>
    )
}
