export type SearchType = {
    searchText: string
    forSearch?: string
}
export type SearchActionType = {
    type: 'SEARCH' | 'CLEAR' | 'SET_SEARCH'
    searchText?: string
    forSearch?: string
}