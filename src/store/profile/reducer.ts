import { ProfileInfoAction, ProfileInfoType } from "./types"

export const ProfileInitState: ProfileInfoType = {
    email: ''
}

export const profileReducer = (state = ProfileInitState, action: ProfileInfoAction): ProfileInfoType => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            }
        default: return state
    }
}