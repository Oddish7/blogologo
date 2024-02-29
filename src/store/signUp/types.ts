export type SignUpErrors = {
    email?: string
    password?: string
    username?: string
    confirmPassword?: string
}

export type SignUpType = {
    username?: string,
    email?: string
    password?: string
    confirmPassword?: string

    isSignUpSuccess?: boolean | null
    errors?: {
        email?: string
        password?: string
        username?: string
        confirmPassword?: string
    }
}

export type SignUpActionType = {
    type: string
    payload: string | SignUpErrors
    //Pick<SignUpType, 'errors>
}