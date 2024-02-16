import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { SetSearchTextAction } from "../../../../store/search/action"
import styles from './SearchBtn.styles.module.scss'
import { SearchIcon } from "./SearchIcon"

export const SearchBtn = () => {
    const dispatch = useDispatch()
    const find = () => dispatch(SetSearchTextAction())
    return (
        <Link to='search'>
            <button className={styles.searchIcon} onClick={find}>
                <SearchIcon/>
            </button>
        </Link>
    )
}