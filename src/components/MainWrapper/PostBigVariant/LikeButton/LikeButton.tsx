import { useAuthState } from '../../../../store/auth/selectors';
import { ThumbsUpIcon } from './ThumbsUpIcon';
import styles from './like-styles.module.scss';

type Props = {
    setMark: boolean
    isLiked: boolean
    isDisliked: boolean,
    like: () => void
    undo: () => void

    likes: string
}

export const LikeButton = ({setMark, isLiked, isDisliked, like, undo, likes}: Props) => {
    const {isLoged} = useAuthState()
    return (
        <div className={styles.button_block}>
            <button disabled={isLoged ? false : true} onClick={setMark && isLiked ? undo : like} className={`${styles.like_button} ${styles.like_change} ${isLiked ? styles.set_liked_post : ''} ${isDisliked ? styles.shadow_button : ''}`}>
                <ThumbsUpIcon/>
            </button>
            <p>{isLiked ? +likes + 1 : likes }</p>
        </div>
    )
}
