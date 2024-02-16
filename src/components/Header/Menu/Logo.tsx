import { LogoIcon } from "./LogoIcon"
import styles from './Logo.styles.module.scss'

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <LogoIcon />
        </div>
    )
}
