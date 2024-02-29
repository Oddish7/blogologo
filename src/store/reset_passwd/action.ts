import { isEmailValid } from "../../helpers/inputValidation";
import { getAccessAction } from "../auth/actions";
import { AppThunk } from "../store";
import { ResetPasswordActionType } from "./types";

export const setEmailForResetAction = (email: string): ResetPasswordActionType => {
    return {
        type: 'SET_EMAIL',
        email: email
    }
}

export const setUidForResetAction = (uid: string): ResetPasswordActionType => {
    return {
        type: 'SET_UID',
        uid: uid
    }
}

export const setTokenForResetAction = (token: string): ResetPasswordActionType => {
    return {
        type: 'SET_TOKEN',
        token: token
    }
}

export const setPasswordForResetAction = (password: string): ResetPasswordActionType => {
    return {
        type: 'SET_PASSWORD',
        newPassword: password
    }
}

export const setConfirmPasswordForResetAction = (confirm: string): ResetPasswordActionType => {
    return {
        type: 'SET_CONFIRM_PASSWORD',
        confirmPassword: confirm
    }
}

export const setResetAlert = (value: boolean): ResetPasswordActionType => {
    return{
        type: 'SET_RESET_ALERT',
        isResetAlert: value
    }
}

export const sentEmailForResetPassword = (): AppThunk => {
    return async (dispatch, getState) => {
        const resetData = getState().resetPassword
        const auth = getState().auth

        if(!resetData.email || !isEmailValid(resetData.email!)){
            dispatch({
                type: 'SEND_EMAIL_FAILED',
                errors: {
                    email: !resetData.email ? 'This field is required' : !isEmailValid(resetData.email!) ? 
                    'Enter a valid email address' : 
                    undefined
                }
            })
            return
        }

        const request = new Request(
            'https://studapi.teachmeskills.by/auth/users/reset_password/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                },
                body: JSON.stringify({
                    "email": resetData.email,
                })
            }
        )

        await fetch(request)
            .then(async (res) => {
                const status = res.status.toString()
                return [res, status]
            })
            .then(async ([data, status]) => {
                if(status.toString().startsWith('2')){
                    dispatch({
                        type: 'SEND_EMAIL_SUCCESS'
                    })
                }
                if(status === '401'){
                    await dispatch(getAccessAction())
                    // console.log('auth token', auth.token)

                    const requestNew = new Request(
                        'https://studapi.teachmeskills.by/auth/users/reset_password/',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'Authorization': `Bearer ${auth.token}`
                            },
                            body: JSON.stringify({
                                "email": resetData.email,
                            })
                        }
                    )

                    await fetch(requestNew)
                            .then(async (res) => {
                                return [res, res.status.toString()]
                            })
                            .then(([res, status]) => {
                                if(status.toString().startsWith('2')){
                                    dispatch({
                                        type: 'SEND_EMAIL_SUCCESS'
                                    })
                                }
                            })
                }
            })
    }
}

export const sentNewPassword = (): AppThunk => {
    return async (dispatch, getState) => {
        const resetData = getState().resetPassword
        const auth = getState().auth

        if(!resetData.uid || !resetData.token || !resetData.newPassword || 
            (!resetData.newPassword || resetData.newPassword?.length! < 8) ||
            ((!resetData.confirmPassword && resetData.newPassword) || (resetData.confirmPassword && resetData.newPassword !== resetData.confirmPassword))){
            dispatch({
                type: 'SET_NEW_PASSWORD_FAILED',
                errors: {
                    uid: !resetData.uid ? 'This field is required' : undefined,
                    token: !resetData.token ? 'This field is required' : undefined,
                    password: !resetData.newPassword ? 'This field is required' : resetData.newPassword?.length! < 8 ? 
                    'Enter a valid password. Your password must contain at least 8 characters.' 
                    : undefined,
                    confirmPassword: !resetData.confirmPassword && resetData.newPassword ? 'Confirm password.' : 
                    resetData.confirmPassword && resetData.newPassword !== resetData.confirmPassword ? 'Password mismatch! Check your password.' :
                    undefined
                }
            })
            return
        }

        if (resetData.newPassword !== resetData.confirmPassword) {
            dispatch({
                type: 'SET_NEW_PASSWORD_FAILED',
                errors: {
                    confirmPassword: 'Password do not match.'
                }
            })
            return
        }

        await dispatch(getAccessAction())

        const request = new Request(
            'https://studapi.teachmeskills.by/auth/users/reset_password_confirm/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                },
                body: JSON.stringify({
                    uid: resetData.uid,
                    token: resetData.token,
                    new_password: resetData.newPassword
                })
            }
        )

        await fetch(request)
        .then(async (res) => {
            return [res, res.status.toString()]
        })
        .then(async ([data, status]) => {
            if(status.toString().startsWith('2')){
                dispatch({
                    type: 'SET_NEW_PASSWORD_SUCCESS'
                })
            }
            if(status.toString().startsWith('4')){
                dispatch({
                    type: 'SET_NEW_PASSWORD_FAILED',
                    errors: 'Activation error. Try to resend the email.'
                })
                if(status === '400'){
                    dispatch(setResetAlert(true))
                }
                if(status === '401'){
                    dispatch(getAccessAction())
                    dispatch({
                        type: 'SET_NEW_PASSWORD_FAILED',
                        errors: 'Authorization error. Try to send data one more time.'
                    })
                    dispatch(setResetAlert(true))
                }
            }
        })
    }
}