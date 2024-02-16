export type SignInErrors = {
    email: string
    password: string
}

export type AuthState = {
    isLoged: boolean
    userName?: string
    initials?: string

    email?: string
    password?: string

    token?: string
    errors?: Partial<SignInErrors>
    showAuthError?: boolean 
}

export type AuthAction = {
    type: string

    userName?: string
    initials?: string
    email?: string
    password?: string
    token?: string

    errors?: Partial<SignInErrors>
    showAuthError?: boolean 
}