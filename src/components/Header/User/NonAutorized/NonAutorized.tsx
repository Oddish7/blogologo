import { Link } from "react-router-dom"
import { NonAutorizedIcon } from "./NonAutorizedIcon"
import styles from './NonAutorized.styles.module.scss'

export const NonAutorized = () => {
    return (
        <Link to='auth'>
            <div className={styles.nonAuthor}>
                <NonAutorizedIcon/>
            </div>
        </Link>
    )
}