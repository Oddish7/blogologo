import styles from '../LikeFullButton/like-styles.module.scss'
import { ThumbsDownIcon } from './ThumbsDownIcon';

type Props = {
    setMark: boolean
    isLiked: boolean
    isDisliked: boolean,
    dislike: () => void
    undo: () => void
}

export const DislikeFullButton = ({setMark, isLiked, isDisliked, dislike, undo}: Props) => {
    return (
        <button onClick={setMark && isDisliked  ? undo : dislike} className={`${styles.dislike_button} ${isDisliked ? styles.dislike_set_mark : ''}`}>
            <ThumbsDownIcon/>
        </button>
    )
}
