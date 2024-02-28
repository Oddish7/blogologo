export type addPostErrorsType = {
    title?: string
    image?: string
    description?: string
}

export type AddPostType = {
    isPostAdded?: boolean
    isPostEdited?: boolean
    isPostDeleted?: boolean

    title?: string
    image?: string
    description?: string

    errors?: Omit<AddPostType, 'errors, isPostAdded, isPostEdited, isPostDeleted'>
}

export type addPostActionType = {
    type: string

    isPostAdded?: boolean
    isPostEdited?: boolean
    isPostDeleted?: boolean
    
    title?: string
    image?: string
    description?: string
    errors?: addPostErrorsType
}