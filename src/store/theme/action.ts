import { ThemeAction } from "./types"

export const setLightAction = (): ThemeAction => ({
    type: 'setLightMode'
})

export const setDarkAction = (): ThemeAction => ({
    type: 'setDarkMode'
})