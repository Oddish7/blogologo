import { setSignInEmailAction, signInAction } from "../auth/actions"
import { setPasswordAction } from "../signUp/action"
import { AppThunk } from "../store"
import { ActivationActionType } from "./types"

export const setUidAction = (uid: string): ActivationActionType => {
    return {
        type: 'SET_UID',
        uid: uid
    }
}

export const setTokenAction = (token: string): ActivationActionType => {
    return {
        type: 'SET_TOKEN',
        token: token
    }
}

export const setActivationAlert = (value: boolean): ActivationActionType => {
    return {
        type: 'SET_ACTIVATION_ALERT',
        showActivationAlert: value
    }
}

export const activateAsyncAction = (): AppThunk => {
    return async (dispatch, getState) => {
        const activationData = getState().activation;
        const request = new Request(
            'https://studapi.teachmeskills.by/auth/users/activation/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    uid: activationData.uid,
                    token: activationData.token,
                }),
            }
        );

        try {
            const res = await fetch(request)

            if (res.status === 204) {
                dispatch({
                    type: 'ACTIVATION_SUCCESS',
                })
                return
            }

            const status = res.status.toString()
            const resJson = await res.json()

            if (status.startsWith('2')) {
                dispatch({
                    type: 'ACTIVATION_SUCCESS',
                })
            }
            if (status.startsWith('4')) {
                dispatch({
                    type: 'ACTIVATION_FAILED',
                    errors: resJson,
                })
                if (status === '403') {
                    dispatch(setActivationAlert(true))
                }
            }
        } catch (error) {
            console.error('Error during activation:', error)
        }
    }
}


// export const activateAsyncAction = (): AppThunk => {
//     return async (dispatch, getState) => {
//         const activationData = getState().activation
//         const request = new Request(
//             'https://studapi.teachmeskills.by/auth/users/activation/',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     'uid': activationData.uid,
//                     'token': activationData.token
//                 })
//             }
//         )

//         await fetch(request)
//             .then( async (res) => {
//                 const status = res.status.toString()
//                 return [ await res.json(), status]
//             })
//             .then(([res, status]) => {
//                 if(status.startsWith('2')){
//                     dispatch({
//                         type: 'ACTIVATION_SUCCESS'
//                     })
//                 }
//                 if (status.startsWith('4')){
//                     dispatch({
//                         type: 'ACTIVATION_FAILED',
//                         errors: res
//                     })
//                     if(status == 403){
//                         dispatch(setActivationAlert(true))
//                     }
//                     console.log(res)
//                 }
//             })
//     }
// }

