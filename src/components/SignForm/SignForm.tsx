import { useRef, useEffect, useState } from 'react'
import styles from './sign_form.module.scss'
import { Input } from './Input/Input'
import { Link } from 'react-router-dom'
import { useSignUpState } from '../../store/signUp/selector'
import { setEmailAction, setUsernameAction, setPasswordAction, sendSignUpAsyncAction } from '../../store/signUp/action'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { setEmailForResetAction } from '../../store/reset_passwd/action'

type InputType = {
    title: string
    text: string
    type: string
}

type Props = {
    innerItems: InputType[]

    disabled?: boolean
    buttonName: string
    underTitle?: string
    underLink?: string
    submitLink?: string

    forgetLink?: string
    linkTo?: string

    onChange: (text: string) => void
}

export const SignForm = ({innerItems, buttonName, underTitle, underLink, forgetLink, linkTo, submitLink, disabled=false, onChange}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    })

    const dispatch = useDispatch<AppDispatch>()


    return (
        <form className={styles.sign_form}>
            {
                innerItems.map((item, i) => (
                    <Input key={i} 
                        onChange={onChange}
                        index={i} 
                        reference={inputRef} 
                        label={item.title} 
                        placeholder={item.text} 
                        type={item.type}/>
                ))
            }
            {
                forgetLink ? (
                    <Link to={forgetLink} className={styles.forget_link}>
                        <p>Forgot password ?</p>
                    </Link>
                ) : (
                    null
                )
            }
            <input type="button" className={styles.primary_button} disabled={disabled} value={buttonName} />
            {
                underTitle && underLink ? (
                    <div className={styles.sign_text}>
                        <p>{underTitle + " "}
                            {
                                linkTo ? (
                                    <Link to={linkTo}>{underLink}</Link>
                                ) : (
                                    null
                                )
                            }
                        </p>
                    </div>
                ) : (
                    null
                )
            }
        </form>
    )
}
