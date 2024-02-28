import { Posts } from "../../components/MainWrapper/Tabs/TabContent/TabContent"

export type PostState = {
    amountPosts: Posts[]
    limit?: number
    page?: number
}

export type PostAction = {
    type: string
    amountPosts?: Posts[]
    page?: number
}