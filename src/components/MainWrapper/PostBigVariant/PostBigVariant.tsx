import styles from './post.module.scss'
import { Bookmark } from './Bookmark/Bookmark'
import { Link } from 'react-router-dom'
import { ImageAction } from '../../../store/postImage/types'
import { LikeDisButtonsWrapper } from './LikeDisButtonsWrapper/LikeDisButtonsWrapper'
import { Posts } from '../Tabs/TabContent/TabContent'

type Props = {
    openImage: (id: number) => ImageAction
    post: Posts
}

export const PostBigVariant = ({post, openImage}: Props) => {
    if (!post) {
        return null; 
    }    
    return (
        <div className={styles.post} id={post.id.toString()}>
            <>
                <div>
                    <h4>{new Date(post.date).toLocaleDateString()}</h4>
                    <Link to={`openpost/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p className={styles.body_text}>{post.description}</p>
                </div>
                <div className={styles.post_image}>
                    <img src={post.image} alt="post" onClick={() => openImage(post.id)}/>
                </div>
                <div className={styles.like_dis}>
                    <LikeDisButtonsWrapper likes={post.likes} dislikes={post.dislikes} postId={post.id.toString()}/>
                </div>
                <div className={`${styles.like_dis} ${styles.dop_buttons}`}>
                    <Bookmark postId={post.id.toString()} />
                </div>
            </>
        </div>
    )
};

