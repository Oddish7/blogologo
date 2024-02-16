import { useDispatch, useSelector } from "react-redux";
import { CancelIcon } from "./CancelIcon";
import { ClearTextAction, SearchTextAction, SetSearchTextAction } from '../../../store/search/action'
import { searchPosts } from '../../../store/search/selector'
import styles from './Search.styles.module.scss'

export const Search = () => {
    const {forSearch} = useSelector(searchPosts)
    const dispatch = useDispatch()
    const clear = () => dispatch(ClearTextAction(''))

    const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SearchTextAction(e.currentTarget.value))
    };

    return (
        <div className={styles.search}>
            <input autoComplete='off' placeholder='Search...' type="text" onInput={inputChange} value={forSearch || ''} id="search" />
            <button onClick={clear}>
                {<CancelIcon />}
            </button>
        </div>
    )
}

