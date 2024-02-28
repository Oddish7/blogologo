import styles from './post.module.scss'
import { Bookmark } from './Bookmark/Bookmark'
import { More } from './More/More'
import { Link } from 'react-router-dom'
import { ImageAction } from '../../../store/postImage/types'
import { LikeDisButtonsWrapper } from './LikeDisButtonsWrapper/LikeDisButtonsWrapper'
import { Posts } from '../Tabs/TabContent/TabContent'
import { MoreInnerButtons } from './MoreInnerButtons/MoreInnerButtons'
import { useMoreState } from '../../../store/more/selectors'

type Props = {
    openImage: (id: number) => ImageAction
    post: Posts
}

export const PostBigVariant = ({post, openImage}: Props) => {
    const moreState = useMoreState(post.id.toString())
    const {more} = moreState || {}
    
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
                    <More postId={post.id.toString()} title={post.title} description={post.description} />
                    {
                        more! ?
                        <MoreInnerButtons postId={post.id.toString()} typeOfPost='more_big_post'/> : null
                    }
                </div>
            </>
        </div>
    )
};

