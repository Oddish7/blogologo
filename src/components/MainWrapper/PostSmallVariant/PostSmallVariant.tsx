import styles from './post_small.module.scss'
import { Bookmark } from '../PostBigVariant/Bookmark/Bookmark'
import { Link } from 'react-router-dom'
import { LikeDisButtonsWrapper } from '../PostBigVariant/LikeDisButtonsWrapper/LikeDisButtonsWrapper'
import { Posts } from '../Tabs/TabContent/TabContent'




type Props = {
    post: Posts
    searchRes?: boolean
    openImage?: () => void
}

export const PostSmallVariant = (props: Props) => {
    const {post, searchRes = false, openImage} = props
    return (
        <div className={`${styles.small_post} ${searchRes ? styles.search_results : null}`} id={post.id.toString()}>
            <div>
                <h4>{new Date(post.date).toLocaleDateString()}</h4>
                <Link to={`openpost/${post.id}`}>
                    <h3>{post.title}</h3>
                </Link>
            </div>
            <div className={styles.small_post_img}>
                <img alt={`post ${post.id}`} src={post.image} onClick={openImage}/>
            </div>
            <div className={styles.all_buttons}>
                <div>
                    <LikeDisButtonsWrapper likes={post.likes} dislikes={post.dislikes} postId={post.id.toString()}/>
                </div>
                <div className={styles.mark_buttons}>
                    <Bookmark postId={post.id.toString()}/>
                </div>
            </div>
        </div>
    )
}
