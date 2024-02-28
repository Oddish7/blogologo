// export type editPostErrorsType = {
//     title?: string
//     image?: string
//     description?: string
// }

export type EditPostType = {
    postId: string
    title?: string
    image?: string
    description?: string
}

export type editPostActionType = {
    type: string
    postId: string
    title?: string
    image?: string
    description?: string
}