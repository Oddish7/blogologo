export type moreState = {
    [postId: string]: {
        more: true | false
    }
}

export type moreAction = {
    type: string
    postId: string
}