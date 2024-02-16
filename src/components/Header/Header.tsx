import { Search } from "./Search/Search"
import { SearchBtn } from "./Search/SearchBtn/SearchBtn"
import { NonAutorized } from "./User/NonAutorized/NonAutorized"
import { User } from "./User/User"
import { useAuthState } from "../../store/auth/selector"
import styles from './Header.styles.module.scss'
import { Logo } from "./Menu/Logo"

export const Header = () => {
    const signInData = useAuthState()

    return (
        <div className={styles.header}>
            <Logo />
            <Search />
            <SearchBtn />
            {
                signInData.isLoged ? (
                    <User name={signInData.userName} abbr={signInData.initials} />
                ) : (
                    <NonAutorized />
                )
            }
        </div>
    )
}