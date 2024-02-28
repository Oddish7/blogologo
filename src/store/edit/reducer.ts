import { EditPostType, editPostActionType } from "./types";

export const editPostInitState: EditPostType = {
    postId: '1',
    title: '',
    image: '',
    description: ''
}

export const editPostReducer = (state = editPostInitState, action: editPostActionType): EditPostType => {
    switch (action.type){
        case 'SET_EDIT_VAlUES':
            return{
                ...state,
                title: action.title,
                image: action.image,
                description: action.description,
                postId: action.postId
            }
        default:
            return state
    }
}