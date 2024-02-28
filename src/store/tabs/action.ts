import { TabAction } from "./types"

export const setTabAction = (tabIndex: number): TabAction => ({
    type: 'setTab',
    tabIndex: tabIndex
})
