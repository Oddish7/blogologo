import { SearchActionType } from "./types"

export const SearchTextAction = (searchText: string): SearchActionType => ({
    type: 'SEARCH',
    forSearch: searchText
})

export const SetSearchTextAction = (): SearchActionType => ({
    type: 'SET_SEARCH'
})

export const ClearTextAction = (clearText: string): SearchActionType => ({
    type: 'CLEAR',
    searchText: clearText
})