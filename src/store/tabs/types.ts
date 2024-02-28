export type TabState = {
    activeIndex: number
    activeTab: string
    tabs: string[]
}

export type TabAction = {
    type: string
    tabIndex: number
}