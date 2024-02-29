export type ResetPasswordErrorsType = {
    email?: string
    password?: string
    confirmPassword?: string
    
    uid?: string
    token?: string
}

export type ResetPasswordType = {
    email?: string
    newPassword?: string
    confirmPassword?: string
    isEmailValid?: boolean
    isResetAlert?: boolean
    
    uid?: string
    token?: string
    isActivated: boolean

    errors?: ResetPasswordErrorsType
}

export type ResetPasswordActionType = {
    type: string
    
    email?: string
    newPassword?: string
    confirmPassword?: string
    isResetAlert?: boolean
    
    uid?: string
    token?: string

    errors?: ResetPasswordErrorsType
}