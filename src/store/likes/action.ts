import { LikeAction } from "./types";

export const SetLikeAction = (postId: string): LikeAction => ({
    type: 'SET_LIKE_MARK',
    postId: postId
})

export const SetDislikeAction = (postId: string): LikeAction => ({
    type: 'SET_DISLIKE_MARK',
    postId: postId
})

export const UndoAction = (postId: string): LikeAction => ({
    type: 'UNDO_MARKS',
    postId: postId
})