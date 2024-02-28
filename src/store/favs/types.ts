export type AddToFavsType = {
    [postId: string]: {
        isAdded: boolean
    }
}

export type AddToFavsActionType = {
    type: 'ADD' | 'UNDO'
    postId: string
}