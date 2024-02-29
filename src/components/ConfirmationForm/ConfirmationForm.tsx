import React from 'react'
import styles from '../SignForm/sign_form.module.scss'
import confStyles from './confirm_form.module.scss'
import { Link } from 'react-router-dom'

type MsgType = string
type Props = {
    msg: MsgType[]
    disabled?: boolean
    buttonName?: string

    onClick: () => void
}

export const ConfirmationForm = ({msg, disabled=false, buttonName='Go to home', onClick}: Props) => {
    return (
        <form className={`${styles.sign_form} ${confStyles.confirm_form}`}>
            {msg.map((message, i) => (
                message.includes('@') ? (
                    null
                ) : (
                    <p key={i}>
                        {msg[i + 1] && msg[i + 1].includes('@') ? (
                            <>
                                {message}
                                <span key={i + 1}>{msg[i + 1]}</span>
                            </>
                        ) : (
                            message
                        )}
                    </p>
                )
                
            ))}
            {/* <Link to={submitLink}> */}
            <input onClick={onClick} type="submit" className={styles.primary_button} disabled={disabled} value={buttonName} />
            {/* </Link> */}
        </form>
    )
}

