import { LogoIcon } from "./LogoIcon"
import styles from './Logo.styles.module.scss'
import { Link } from "react-router-dom"

export const Logo = () => {
    return (
        <Link to='/'>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
        </Link>
    )
}
