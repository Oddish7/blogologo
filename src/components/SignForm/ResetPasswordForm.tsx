import { useRef, useEffect, useState, FormEvent } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { sentEmailForResetPassword, setEmailForResetAction } from '../../store/reset_passwd/action'
import { useResetPasswordState } from '../../store/reset_passwd/selector'
import { useNavigate } from 'react-router-dom'

type Props = {

}

export const ResetPasswordForm = ({}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const resetData = useResetPasswordState()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const sendData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if((e.target as HTMLInputElement)?.type !== 'submit'){
            return
        }
        dispatch(sentEmailForResetPassword())
    } 

    const reset = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if((e.target as HTMLInputElement)?.type !== 'submit'){
            return
        }
        navigate('/auth/signin/newpassword')
    } 


    return (
        <form className={styles.sign_form} onClick={resetData.isEmailValid ? reset : sendData}>
            {
                <>
                {
                    resetData.isEmailValid ? (
                        <p className={styles.reset_passwd_text}>You will receive an email <span>{resetData.email}</span> with a link to reset your password!</p>
                    ) : (null)
                }
                    <Input value={resetData.email || ''} 
                            label="Email" 
                            onChange={(text: string) => {
                                dispatch(setEmailForResetAction(text))
                            }}
                            reference={inputRef}
                            placeholder='Your email' 
                            type='email'
                            errorsData={resetData}
                            errorType='email'/>
                    {resetData.isEmailValid === false && resetData.errors?.email && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(resetData.errors.email).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                </>
            }
            <input type="submit" className={styles.primary_button} value={resetData.isEmailValid ? 'Reset password' : 'Send'} />
        </form>
    )
}
