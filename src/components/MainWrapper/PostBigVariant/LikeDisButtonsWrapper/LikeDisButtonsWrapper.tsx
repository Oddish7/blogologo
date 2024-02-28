import { LikeButton } from '../LikeButton/LikeButton'
import { DislikeButton } from '../DislikeButton/DislikeButton'
import { useSelector, useDispatch } from 'react-redux'
import { SetLikeAction, SetDislikeAction, UndoAction } from '../../../../store/likes/action'
import { AppState } from '../../../../store/store'

type Props = {
    postId: string
    likes: string
    dislikes: string
}

export const LikeDisButtonsWrapper = ({postId, likes, dislikes}: Props) => {
    const likeState = useSelector((state: AppState) => state.like[postId])
    const dispatch = useDispatch()
    const {isLiked, isDisliked, setMark} = likeState || {}

    const like = () =>  dispatch(SetLikeAction(postId))
    const undo = () => dispatch(UndoAction(postId))
    const dislike = () =>  dispatch(SetDislikeAction(postId))

    return (
        <div style={{display: 'flex'}}>
            <LikeButton likes={likes} isLiked={isLiked} isDisliked={isDisliked} setMark={setMark} like={like} undo={undo}/>
            <DislikeButton dislikes={dislikes} isLiked={isLiked} isDisliked={isDisliked} setMark={setMark} dislike={dislike} undo={undo}/>
        </div>
    )
}
