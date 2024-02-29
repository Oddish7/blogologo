import React, { useEffect, useState } from 'react'
import styles from '../sign_in_page.module.scss'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { SignForm } from '../../components/SignForm/SignForm'
import { NewPasswordForm } from '../../components/SignForm/NewPasswordForm'
import { useResetPasswordState } from '../../store/reset_passwd/selector'
import { Alert } from '../../components/Alert/Alert'
import { setResetAlert } from '../../store/reset_passwd/action'
import { useDispatch } from 'react-redux'


export const NewPasswordPage = () => {

    const dispatch = useDispatch()
    const resetData = useResetPasswordState()
    const closePage = () => dispatch(setResetAlert(false))
    const [hide, setHide] = useState<boolean>(false)

    useEffect(() => window.scrollTo(0, 0))
    useEffect(() => {
        if(resetData.isResetAlert){
            setTimeout(() => {
                dispatch(setResetAlert(false))
            }, 4000)
            setTimeout(() => {
                setHide(true)
            }, 3500)
        }
        else{
            setHide(false)
        }
    }, [resetData.isResetAlert])

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="New password"/>
                <NewPasswordForm/>
                {
                    resetData.isResetAlert ? (
                        <Alert isError={true} isHide={hide} closeAlert={closePage} errorText={JSON.stringify(resetData.errors)}/>
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    )
}
