import { AddPostType, addPostActionType } from "./types";

export const addPostInitState: AddPostType = {
    isPostAdded: false,
    title: '',
    image: '',
    description: ''
}

export const addPostReducer = (state = addPostInitState, action: addPostActionType): AddPostType => {
    switch (action.type){
        case 'ADD_POST_SUCCESS':
            return {
                ...state,
                isPostAdded: action.isPostAdded,
                isPostEdited: action.isPostEdited,
                isPostDeleted: action.isPostDeleted
            }
        case 'ADD_POST_FAILED':
            return {
                ...state,
                isPostAdded: false,
                errors: action.errors
            }
        case 'SET_TITLE':
            return {
                ...state,
                title: action.title!
            }
        case 'SET_IMAGE':
            return {
                ...state,
                isPostAdded: false,
                image: action.image!
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.description
            }
        case 'CANCEL_ERRORS':
            return {
                ...state,
                isPostAdded: false,
                title: '',
                image: '',
                description: '',
                errors: {}
            }
        case 'RESET_POST':
            return {
                ...state,
                isPostAdded: false,
                isPostDeleted: false,
                isPostEdited: false
            }
        default:
            return state
    }
}