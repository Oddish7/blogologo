import styles from './post_middle.module.scss'
import { Bookmark } from '../PostBigVariant/Bookmark/Bookmark'
import { Link } from 'react-router-dom'
import { LikeDisButtonsWrapper } from '../PostBigVariant/LikeDisButtonsWrapper/LikeDisButtonsWrapper'
import { Posts } from '../Tabs/TabContent/TabContent'

type Props = {
    post: Posts
    openImage: (id: number) => void
}

export const PostMiddleVariant = (props: Props) => {
    const {post, openImage} = props

    return (
        <div className={styles.middle_post} id={post.id.toString()}>
            <div className={styles.middle_post_img}>
                <img src={post.image} alt="Astronaut" onClick={() => openImage(post.id)}/>
            </div>
            <h4>{new Date(post.date).toLocaleDateString()}</h4>
            <Link to={`openpost/${post.id}`}>
                <h3>{post.title}</h3>
            </Link>
            <div className={styles.buttons_block}>
                <div className={styles.buttons_block__inner}>
                    <LikeDisButtonsWrapper likes={post.likes} dislikes={post.dislikes} postId={post.id.toString()}/>
                </div>
                <div>
                    <Bookmark postId={post.id.toString()}/>
                </div>
            </div>
        </div>
    )
}
