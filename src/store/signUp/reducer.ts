import { SignUpActionType, SignUpErrors, SignUpType } from "./types"

export const signUpInitState: SignUpType = {
    isSignUpSuccess: null,
}


export const signUpReducer = (state = signUpInitState, action: SignUpActionType): SignUpType => {
    switch (action.type) {
        case 'SET_SIGN_UP_EMAIL':
            return{
                ...state,
                email: action.payload as string
            }
        case 'SET_SIGN_UP_USERNAME':
            return{
                ...state,
                username: action.payload as string
            }
        case 'SET_SIGN_UP_PASSWORD':
            return{
                ...state,
                password: action.payload as string
            }
        case 'SET_SIGN_UP_CONFIRM_PASSWORD':
            return{
                ...state,
                confirmPassword: action.payload as string
            }
        case 'SIGN_UP_SUCCESS':
            return{
                ...state,
                isSignUpSuccess: true
            }
        case 'SIGN_UP_FAILED':
            return{
                ...state,
                isSignUpSuccess: false,
                errors: action.payload as SignUpErrors
            }
        default:
            return state
    }
}