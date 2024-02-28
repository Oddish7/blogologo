import { AddToFavsActionType } from "./types";
import { AddToFavsType } from "./types";

export const AddToFavsInitState: AddToFavsType = {
    ['1']: {
        isAdded: false,
    }
}

export const addToFavsReducer = (state = AddToFavsInitState, action: AddToFavsActionType): AddToFavsType => {
    switch (action.type){
        case 'ADD':
            return{
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    isAdded: true
                }
            }
        case 'UNDO':
            return{
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    isAdded: false
                }
            }
        default: return state
    }
}