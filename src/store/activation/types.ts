export type ActivationErrorsType = {
    uid?: string
    token?: string
}

export type ActivationStateType = {
    isActivated: boolean
    uid?: string
    token?: string 
    showActivationAlert?: boolean
    
    errors?: ActivationErrorsType
}

export type ActivationActionType = {
    type: string
    uid?: string
    token?: string
    showActivationAlert?: boolean
    errors?: ActivationErrorsType
}