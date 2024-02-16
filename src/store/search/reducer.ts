import { SearchType, SearchActionType } from "./types"

const SearchInitState: SearchType = {
    searchText: ''
}

export const searchReducer = (state = SearchInitState, action: SearchActionType): SearchType => {
    switch(action.type){
        case 'SEARCH':
            return{
                ...state,
                forSearch: action.forSearch
            }
        case 'SET_SEARCH':
            return{
                ...state,
                searchText: state.forSearch!,
                forSearch: ''
            }
        case 'CLEAR':
            return{
                searchText: action.searchText!
            }
        default: return state
    }
}