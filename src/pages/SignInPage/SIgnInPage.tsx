import styles from '../sign_in_page.module.scss'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useEffect, useState } from 'react'
import { SignInForm } from '../../components/SignForm/SignInForm'
import { Alert } from '../../components/Alert/Alert'
import { useAuthState } from '../../store/auth/selectors'
import { setAuthAlert } from '../../store/auth/actions'
import { useDispatch } from 'react-redux'


export const SignInPage = () => {
    useEffect(() => window.scrollTo(0, 0))
    const dispatch = useDispatch()
    const closePage = () => dispatch(setAuthAlert(false))
    const [hide, setHide] = useState<boolean>(false)
    const signInData = useAuthState()

    useEffect(() => {}, [])

    useEffect(() => {
        if(signInData.showAuthError){
            setTimeout(() => {
                dispatch(setAuthAlert(false))
            }, 4000)
            setTimeout(() => {
                setHide(true)
            }, 3500)
        }
        else{
            setHide(false)
        }
    }, [signInData.showAuthError])

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <BackToHome/>
                <PageHeader title="Sign In"/>
                <SignInForm
                    underTitle="Don't have an account?"
                    underLink='Sign Up'
                    linkTo='/auth'
                    submitLink='registrationconfirm'
                    buttonName='Sign In'
                    forgetLink='forgotpassword'
                />
                {
                    signInData.showAuthError ? (
                        <Alert isError={true} isHide={hide} closeAlert={closePage} errorText={JSON.stringify(signInData.errors).slice(11, -2)}/>
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    )
}


//BEARER token