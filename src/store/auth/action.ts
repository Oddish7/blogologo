import { isEmailValid } from "../../helpers/inputValidation"
import { setEmailProfile } from "../profile/action"
import { AppThunk } from "../store"
import { AuthAction } from "./types"

export const loginAction = (userName: string, email: string): AuthAction => ({
    type: 'LOGIN',
    userName: userName.toUpperCase(),
    initials: userName[0].toUpperCase(),
    email: email
})

export const logoutAction = (): AuthAction => ({
    type: 'LOGOUT'
})

export const signInSuccessAction = (token: string) => {
    return{
        type: 'AUTH_SUCCESS',
        token: token,
    }
}

export const setSignInEmailAction = (email: string) => {
    return{
        type: 'SET_EMAIL',
        email: email
    }
}

export const setSignInPasswordAction = (password: string) => {
    return{
        type: 'SET_PASSWORD',
        password: password
    }
}

export const setAuthAlert = (value: boolean): AuthAction => {
    return{
        type: 'SET_AUTH_ALERT',
        showAuthError: value
    }
}


export const signInAction = (email: string, password: string): AppThunk => {  
    return async (dispatch, getState) => {
        const data = getState().auth
        if((!data.email || !isEmailValid(data.email!)) || (!data.password || data.password?.length! < 8)){
            dispatch({
                type: 'AUTH_FAILED',
                errors: {
                    email:  !data.email ? 'This field is required' : !isEmailValid(data.email!) ? 
                            'Enter a valid email address' : 
                            undefined,
                    password: !data.password ? 'This field is required' : data.password?.length! < 8 ? 
                            'Enter a valid password. Your password must contain at least 8 characters.' 
                            : undefined
                }
            })
            return
        }

        const request = new Request(
            'https://studapi.teachmeskills.by/auth/jwt/create/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            }
        )

        await fetch(request)
            .then(async (res) => {
                const data = await res.json()
                return [data, res.status.toString()]
            })
            .then(([data, status]) => {
                if(status.startsWith('2')){
                    localStorage.setItem('AUTH_REFRESH_TOKEN', data.refresh)
                    dispatch(signInSuccessAction(data.access))
                    dispatch(getAccessAction())
                    dispatch(getAuthorized())

                }
                if(status.startsWith('4')){
                    dispatch({
                        type: 'AUTH_FAILED',
                        errors: data,
                    })
                    if(status == 401){
                        dispatch(setAuthAlert(true))
                    }
                }
            })
    } 
}


export const getAccessAction = (): AppThunk => {
    return async (dispatch, getState) => {
        const accessRequest = new Request(
            'https://studapi.teachmeskills.by/auth/jwt/refresh/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "refresh": localStorage.getItem('AUTH_REFRESH_TOKEN')
                })
            }
        )

        await fetch(accessRequest)
            .then(async (res) => {
                const data = await res.json()
                return [data, res.status.toString()]
            })
            .then(([data, status]) => {
                if(status.startsWith('2')){
                    dispatch(signInSuccessAction(data.access))
                }
            })
    }
}

export const getAuthorized = (): AppThunk => {
    return async (dispatch, getState) => {
        const token = getState().auth.token
        if(!token){
            console.log('Token is missed')
        }
        
        const getRequest = new Request(
            'https://studapi.teachmeskills.by/auth/users/me/',
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            }
        )

        await fetch(getRequest)
            .then(async (res) => {
                const data = await res.json()
                return [data, res.status.toString()]
            })
            .then(([data, status]) => {
                if(status.startsWith('2')){
                    dispatch(setEmailProfile(data.email))
                    dispatch(loginAction(data.username, data.email))
                    console.log(data.email)
                }
            })
    }
}