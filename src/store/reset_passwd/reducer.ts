import { ResetPasswordActionType, ResetPasswordType } from "./types"

export const ResetPasswordInitState: ResetPasswordType = {
    isActivated: false,
    isEmailValid: false,
}

export const resetPasswordReducer = (state = ResetPasswordInitState, action: ResetPasswordActionType): ResetPasswordType => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            }
        case 'SEND_EMAIL_FAILED':
            return {
                ...state,
                isEmailValid: false,
                errors: action.errors
            }
        case 'SEND_EMAIL_SUCCESS':
            return {
                ...state,
                isEmailValid: true,
                errors: {}
            }
        case 'SET_UID':
            return {
                ...state,
                uid: action.uid
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                newPassword: action.newPassword
            }
        case 'SET_CONFIRM_PASSWORD':
            return {
                ...state,
                confirmPassword: action.confirmPassword
            }
        case 'SET_NEW_PASSWORD_FAILED':
            return {
                ...state,
                isActivated: false,
                errors: action.errors
            }
        case 'SET_NEW_PASSWORD_SUCCESS':
            return {
                ...state,
                isActivated: true,
                isEmailValid: false,
                errors: {}
            }
        case 'SET_RESET_ALERT':
            return {
                ...state,
                isActivated: false,
                isResetAlert: action.isResetAlert,
            }
        case 'RESET_DATA':
            return {
                ...state,
                isActivated: false,
                errors: {}
            }
        default: return state
    }
}