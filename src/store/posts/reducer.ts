import { PostState, PostAction } from "./types"


export const PostInitState: PostState = {
    amountPosts: [],
    page: 1,
    limit: 11,
}

export const postReducer = (state = PostInitState, action: PostAction): PostState => {
    switch(action.type){
        case 'LOAD_POSTS':
            return {
                ...state,
                amountPosts: action.amountPosts!,
                page: action.page!
            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.page!
            }
        default: return state
    }
}