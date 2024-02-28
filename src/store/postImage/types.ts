export type ImageState = {
    isOpened: boolean
    idOfPost?: number
}

export type ImageAction = {
    type: 'opened' | 'closed' | 'next' | 'prev'
    idOfPost?: number
}