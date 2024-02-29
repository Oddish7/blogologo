import { ActivationStateType, ActivationActionType } from "./types";


export const ActivationInitState: ActivationStateType = {
    isActivated: false
}

export const activationReducer = (state = ActivationInitState, action: ActivationActionType): ActivationStateType => {
    switch(action.type){
        case 'ACTIVATION_SUCCESS':
            return{
                ...state,
                isActivated: true
            }
        case 'SET_UID':
            return{
                ...state,
                uid: action.uid
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_ACTIVATION_ALERT':
            return{
                ...state,
                showActivationAlert: action.showActivationAlert
            }
        case 'ACTIVATION_FAILED':
            return{
                ...state,
                isActivated: false,
                errors: action.errors
            }
        default:
            return state
    }
}