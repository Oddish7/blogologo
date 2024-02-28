import { ThemeState, ThemeAction } from "./types"

export const themeInitState: ThemeState = {
    theme: 'light'
}


export const themeReducer = (state = themeInitState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'setLightMode':
            return ({
                theme: 'light'
            })
        case 'setDarkMode':
            return ({
                theme: 'dark'
            })
        default:
            return state
    }
}