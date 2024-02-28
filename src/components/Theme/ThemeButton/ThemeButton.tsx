import styles from './theme.module.scss'
import { DayMode } from '../DayMode/DayMode'
import { NightMode } from '../NightMode/NightMode'

import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/theme/selectors'
import { useDispatch } from 'react-redux'
import { setLightAction, setDarkAction } from '../../../store/theme/action'


export const ThemeButton = () => {
    const state = useSelector(selectTheme)
    const dispatch = useDispatch()

    const setLight = () => dispatch(setLightAction())
    const setDark = () => dispatch(setDarkAction())
    return (
        <div>
            <button 
                onClick={setLight} 
                disabled={state.theme === 'light'}
                className={styles.mode_button}
            >
                <DayMode disabled={state.theme !== 'light'}/>
            </button>
            <button 
                onClick={setDark}
                disabled={state.theme !== 'light'}
                className={styles.mode_button}
            >
                <NightMode disabled={state.theme === 'light'}/>
            </button>
        </div>
    )
}
