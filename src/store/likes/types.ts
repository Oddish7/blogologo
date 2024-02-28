// export type LikedState = {
//     isLiked: boolean
//     isDisliked: boolean
//     setMark: boolean
// }
export type LikedState = {
    [postId: string]: {
        isLiked: boolean
        isDisliked: boolean
        setMark: boolean
    }
}

export type LikeAction = {
    type: 'SET_LIKE_MARK' | 'SET_DISLIKE_MARK' | 'UNDO_MARKS'
    postId: string
}