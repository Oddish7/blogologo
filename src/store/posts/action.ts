import { PostAction } from "./types"
import { Posts } from "../../components/MainWrapper/Tabs/TabContent/TabContent"
import { AppThunk } from "../store"
import { getPageData, getPostId } from "../../helpers/getPageData"
import { AddToFavsType } from "../favs/types"

export const LoadPostAction = (posts: Posts[], page: number = 1): PostAction => ({
    type: 'LOAD_POSTS',
    amountPosts: posts,
    page: page
})

export const setPageAction = (page: number = 1): PostAction => ({
    type: 'SET_PAGE',
    page: page
})

///async action

export const LoadPostAsyncAction = (page: number, pages?: string[]): AppThunk => {     
    const {limit} = getPageData(page!)
    const url = new URL('https://65670f6864fcff8d730fa806.mockapi.io/posts')
    const url2 = url
    url2.searchParams.append('page', `${page}`)
    url2.searchParams.append('limit', `${limit}`)
    return (dispatch) => {
        fetch(url2)
            .then(res => res.json())
            .then(res => {
                dispatch(LoadPostAction(res, page))
            })    
    }
}

export const LoadAllPostAsyncAction = (): AppThunk => {
    const url = 'https://65670f6864fcff8d730fa806.mockapi.io/posts'
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(res => {dispatch(LoadPostAction(res))})
    }
}

export const LoadFavPosts = (favPosts: AddToFavsType): AppThunk => {
    const url = 'https://65670f6864fcff8d730fa806.mockapi.io/posts'
    return(dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then((allPosts) => {
                const favPostsData = allPosts.filter((post: Posts) => favPosts[post.id]?.isAdded)
                dispatch(LoadPostAction(favPostsData));
            });
    }
}
