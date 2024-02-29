import React, { FormEvent, useEffect, useRef } from 'react'
import styles from '../SignForm/sign_form.module.scss'
import { Input } from './Input/Input'
import { useResetPasswordState } from '../../store/reset_passwd/selector'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { sentNewPassword, setConfirmPasswordForResetAction, setPasswordForResetAction, setTokenForResetAction, setUidForResetAction } from '../../store/reset_passwd/action'

export const NewPasswordForm = () => {

    const resetData = useResetPasswordState()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    useEffect(() => {
        if(resetData.isActivated){
            navigate('/auth/signin')
        }
    }, [resetData.isActivated])

    

    const sendData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if((e.target as HTMLInputElement)?.type !== 'submit'){
            return
        }
        dispatch(sentNewPassword())
    } 

    

    return (
        <form className={styles.sign_form} onClick={sendData}>
                {
                <>
                    <Input reference={inputRef} 
                        value={resetData.uid || ''}
                        placeholder='Enter UID'
                        type='text'
                        label='UID'
                        errorType='uid'
                        errorsData={resetData}
                        onChange={(text: string) => {dispatch(setUidForResetAction(text))}}
                        
                    />
                    {resetData.isActivated === false && resetData.errors?.uid && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(resetData.errors.uid).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <Input value={resetData.token || ''}
                        placeholder='Enter token'
                        type='text'
                        label='Token'
                        errorType='token'
                        errorsData={resetData}
                        onChange={(text: string) => {dispatch(setTokenForResetAction(text))}}
                    />      
                    {resetData.isActivated === false && resetData.errors?.token && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(resetData.errors.token).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <Input
                        value={resetData.newPassword || ''}
                        placeholder='Your password'
                        type='password'
                        label='Password'
                        errorType='password'
                        errorsData={resetData}
                        onChange={(text: string) => {dispatch(setPasswordForResetAction(text))}}
                    />
                    {resetData.isActivated === false && resetData.errors?.password && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(resetData.errors.password).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <Input
                        value={resetData.confirmPassword || ''}
                        placeholder='Confirm your password'
                        type='password'
                        label='Confirm password'
                        errorType='confirmPassword'
                        errorsData={resetData}
                        onChange={(text: string) => {dispatch(setConfirmPasswordForResetAction(text))}}
                    />
                    {resetData.isActivated === false && resetData.errors?.confirmPassword && (
                        <p className={styles.error_fields}>
                            {JSON.stringify(resetData.errors.confirmPassword).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <input type="submit" className={styles.primary_button} value='Set password' />
                    </>
                }
                </form>
    )
}
