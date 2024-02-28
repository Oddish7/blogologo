import { ImageAction } from "./types"

export const OpenImageAction = (id?: number): ImageAction => ({
    type: 'opened',
    idOfPost: id
})

export const CloseImageAction = (): ImageAction => ({
    type: 'closed'
})

export const NextImageAction = (id?: number): ImageAction => ({
    type: 'opened',
    idOfPost: id! + 1 
})

export const PrevImageAction = (id?: number): ImageAction => ({
    type: 'opened',
    idOfPost: id ? id - 1 : undefined
})