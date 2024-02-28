import { editPostActionType } from "./types"


export const setEditAction = (
                postId: string,
                title: string,
                description: string,
                image = 'mono1.jpg'
            ): editPostActionType => 
    ({
    type: 'SET_EDIT_VAlUES',
    postId: postId,
    title: title,
    description: description,
    image: image
})
