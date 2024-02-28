import { moreState, moreAction } from "./types"

export const moreInitState: moreState = {
    ['1']: {
        more: false
    }
}


export const moreReducer = (state = moreInitState, action: moreAction): moreState => {
    switch (action.type) {
        case 'SET_OPEN_MORE':
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    more: true
                }
            }
        case 'SET_CLOSE_MORE':
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    more: false
                }
            }
        default:
            return state
    }
}