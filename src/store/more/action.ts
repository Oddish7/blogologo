import { moreAction } from "./types"


export const setOpenMoreAction = (postId: string): moreAction => ({
    type: 'SET_OPEN_MORE',
    postId: postId
})

export const setCloseMoreAction = (postId: string): moreAction => ({
    type: 'SET_CLOSE_MORE',
    postId: postId
})