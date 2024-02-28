import { getPostId } from "../../helpers/getPageData"
import { AppThunk } from "../store"
import { addPostActionType } from "./types"

export const setTitleAction = (title: string): addPostActionType => ({
    type: 'SET_TITLE',
    title: title
})

export const setImageAction = (image: string): addPostActionType => ({
    type: 'SET_IMAGE',
    image: image
})

export const setDescriptionAction = (description: string): addPostActionType => ({
    type: 'SET_DESCRIPTION',
    description: description
})

export const cancelErrors = (): addPostActionType => ({
    type: 'CANCEL_ERRORS'
})

export const resetPost = () => ({
    type: 'RESET_POST'
})

export const addPostAction = (): AppThunk => {
    return async (dispatch, getState) => {
        const addPostData = getState().addPost

        if((!addPostData.title || !addPostData.image || !addPostData.description)){
            dispatch({
                type: 'ADD_POST_FAILED',
                errors: {
                    title: !addPostData.title ? 'This field is required' : undefined,
                    image: !addPostData.image ? 'This field is required' : undefined,
                    description: !addPostData.description ? 'This field is required' : undefined
                }
            })
            return
        }
        const ids = await getPostId()
        const newId: number = 401 + (+ids.length)
        const request = new Request(
            'https://65670f6864fcff8d730fa806.mockapi.io/posts',
            {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                    // Accept: 'application/json',
                    // Authorization: `Bearer ${localStorage.getItem('AUTH_REFRESH_TOKEN')}`
                },
                body: JSON.stringify({
                    title: addPostData.title,
                    description: addPostData.description,
                    date: new Date(),
                    image: `https://loremflickr.com/640/${newId}/city`,
                    likes: '',
                    dislikes: ''
                })
            }
        )

        await fetch(request)
            .then( async (res) => {
                const status = res.status.toString()
                return [ await res.json(), status]
            })
            .then(([res, status]) => {
                if(status.startsWith('2')){
                    dispatch({
                        type: 'ADD_POST_SUCCESS',
                        isPostAdded: true
                    })
                }
                if (status.startsWith('4')){
                    dispatch({
                        type: 'ADD_POST_FAILED',
                        errors: res
                    })
                }
            })
    }
}

export const editPostAction = (): AppThunk => {
    return async (dispatch, getState) => {
        const editPostData = getState().edit
        const addPostData = getState().addPost
        const newId: number = 401 + (+editPostData.postId)

        if((!addPostData.title || !addPostData.image || !addPostData.description)){
            dispatch({
                type: 'ADD_POST_FAILED',
                errors: {
                    title: !addPostData.title ? 'This field is required' : undefined,
                    image: !addPostData.image ? 'This field is required' : undefined,
                    description: !addPostData.description ? 'This field is required' : undefined
                }
            })
            return
        }

        const request = new Request(
            `https://65670f6864fcff8d730fa806.mockapi.io/posts/${editPostData.postId}`,
            {
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify({
                    title: addPostData.title ? addPostData.title : editPostData.title,
                    description: addPostData.description ? addPostData.description : editPostData.description,
                    image: `https://loremflickr.com/640/${newId}/city`
                })
            }
        )


        await fetch(request)
            .then( async (res) => {
                const status = res.status.toString()
                return [ await res.json(), status]
            })
            .then(([res, status]) => {
                if(status.startsWith('2')){
                    dispatch({
                        type: 'ADD_POST_SUCCESS',
                        isPostEdited: true
                    })
                }
                if (status.startsWith('4')){
                    dispatch({
                        type: 'ADD_POST_FAILED',
                        errors: res
                    })
                }
            })
    }
}

export const deletePostAction = (): AppThunk => {
    return async (dispatch, getState) => {
        const editPostData = getState().edit
        const request = new Request(
            `https://65670f6864fcff8d730fa806.mockapi.io/posts/${editPostData.postId}`,
            {
                method: 'DELETE',
            }
        )

        await fetch(request)
            .then( async (res) => {
                const status = res.status.toString()
                return [ await res.json(), status]
            })
            .then(([res, status]) => {
                if(status.startsWith('2')){
                    dispatch({
                        type: 'ADD_POST_SUCCESS',
                        isPostDeleted: true
                    })
                }
                if (status.startsWith('4')){
                    dispatch({
                        type: 'ADD_POST_FAILED',
                        errors: res
                    })
                }
            })
    }
}