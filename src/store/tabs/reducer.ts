import { TabState, TabAction } from "./types"


export const TabInitState: TabState = {
    activeTab: 'All',
    activeIndex: 0,
    tabs: ['All', 'Favorite', 'Popular']
}

export const tabReducer = (state = TabInitState, action: TabAction): TabState => {
    // debugger
    switch(action.type){
        case 'setTab':
            return {
                ...state,
                activeIndex: action.tabIndex,
                activeTab: state.tabs[action.tabIndex]
            }
        default: return state
    }
}