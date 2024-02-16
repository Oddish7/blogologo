import { ProfileInfoAction } from "./types"

export const setEmailProfile = (email: string): ProfileInfoAction => {
    return {
        type: 'SET_EMAIL',
        email: email
    }
}