import { LikeAction, LikedState } from "./types";

export const LikeInitState: LikedState = {
    ['1']: {
        isLiked: false,
        isDisliked: false,
        setMark: false
    }
}

export const likeReducer = (state = LikeInitState, action: LikeAction): LikedState => {
    switch(action.type){
        case 'SET_LIKE_MARK':
            return{
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    isLiked: true,
                    isDisliked: false,
                    setMark: true
                }
            }
        case 'SET_DISLIKE_MARK':
            return{
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    isLiked: false,
                    isDisliked: true,
                    setMark: true
                }
            }
        case 'UNDO_MARKS':
            return{
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    isLiked: false,
                    isDisliked: false,
                    setMark: false
                }
            }
        default: return state
    }
} 

