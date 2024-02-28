import { AddToFavsActionType } from "./types"

export const AddToFavsAction = (postId: string): AddToFavsActionType => ({
    type: 'ADD',
    postId: postId
})

export const UndoAddToFavs = (postId: string): AddToFavsActionType => ({
    type: 'UNDO',
    postId: postId
})
