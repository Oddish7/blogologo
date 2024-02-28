import { AlertIcon } from './AlertIcon'
import { SuccessIcon } from './SuccessIcon'
import styles from './alert.module.scss'

type Props = {
    showed?: boolean
    errorText: string

    isHide: boolean
    closeAlert: () => void

    isError: boolean
}

export const Alert = (props: Props) => {
    const {showed = true, errorText, closeAlert, isHide, isError} = props
    return (
        <div id='alert' className={`${styles.alert} ${isError ? styles.error : styles.success} ${showed ? styles.showed : ''} ${isHide ? styles.hide : ''}`}>
            <div className={styles.alert_message}>
                {isError ? <AlertIcon/> : <SuccessIcon/>}
                <p>{errorText!}</p>
            </div>
            <div>
                {isError ? (
                    <button onClick={() => closeAlert()}>
                        &#10006;
                    </button>
                ) : (null)}
            </div>
        </div>
    )
}
