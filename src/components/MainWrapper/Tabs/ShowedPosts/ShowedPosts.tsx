import { useDispatch, useSelector } from 'react-redux'
import { PostMiddleVariant } from '../../PostMiddleVariant/PostMiddleVariant'
import { PostSmallVariant } from '../../PostSmallVariant/PostSmallVariant'
import { Posts } from '../TabContent/TabContent'
import styles from '../tabs-content.module.scss'
import { CloseImageAction, OpenImageAction } from '../../../../store/postImage/action'
import { postImage } from '../../../../store/postImage/selectors'
import { PostImage } from '../../../PostImage/PostImage'

type Props = {
    usedPosts: Posts[]
}

export const ShowedPosts = ({usedPosts}: Props) => {
    const {isOpened, idOfPost} = useSelector(postImage) 
    const dispatch = useDispatch()
    const openImagePost = (id: number) => dispatch(OpenImageAction(id))
    const closeImagePost = () => dispatch(CloseImageAction())
    return (
        <>
            {
            <div className={styles.middle_posts}>
                {usedPosts
                    .filter((post, index) => index >= 0 && index <= 1)
                    .map((filteredPost) => (
                        <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(usedPosts.indexOf(filteredPost))} />
                    ))}
            </div>
            }
            {
            <div className={styles.middle_posts}>
                {usedPosts
                    .filter((post, index) => index >= 2 && index <= 5)
                    .map((filteredPost) => (
                        <PostMiddleVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(usedPosts.indexOf(filteredPost))} />
                    ))}
            </div>
            }
            {
            <div className={styles.small_posts}>
                {
                    usedPosts
                        .filter((post, index) => index > 5)
                        .map((filteredPost) => (
                            <PostSmallVariant key={filteredPost.id} post={filteredPost} openImage={() => openImagePost(usedPosts.indexOf(filteredPost))} />
                        ))
                }
            </div>
            }
            {
                isOpened ? (
                    <PostImage dataPosts={usedPosts} dataLength={usedPosts.length} idOfPost={idOfPost || idOfPost === 0 ? idOfPost : 1} closeImage={closeImagePost}/>
                ) : (
                    null
                )
            }
        </>
    )
}
