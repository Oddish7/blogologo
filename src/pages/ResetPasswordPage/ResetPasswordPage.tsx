import React from 'react'
import styles from '../sign_in_page.module.scss'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { ResetPasswordForm } from '../../components/SignForm/ResetPasswordForm'
import { useAuthState } from '../../store/auth/selectors'
import { getAccessAction } from '../../store/auth/actions'

type InputType = {
    title: string
    text: string
    type: string
}

export const ResetPasswordPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getAccessAction())
    }, [])

    const dispatch = useDispatch<AppDispatch>()
    const auth = useAuthState()


    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Reset password"/>
                <ResetPasswordForm/>
            </div>
        </div>
    )
}
