import { useState } from "react"
import { Posts } from "../components/MainWrapper/Tabs/TabContent/TabContent"

export const getPageData = (page: number) => {
    const limit = page === 1 ? 11 : 12
    return {
        limit: limit
    }
}

export const getPageCount = (count: Posts[]) => {
    let countOfPages = 1
    let countArr: number[] = []
    if (count.length > 11) {
        countOfPages = Math.ceil((count.length - 11) / 12) + 1
        countArr = Array.from({ length: countOfPages }, (_, index) => index + 1)
        return countArr
    }
    return countArr
}

export const getCustomPostPages = (favPosts: Posts[], page: number, numOfPostPerPage: number): Posts[] => {
    const startIndex = (page - 1) * numOfPostPerPage
    const endIndex = startIndex + numOfPostPerPage
    return favPosts.slice(startIndex, endIndex)
}

export const getCustomPageCount = (count: Posts[], numOfPostPerPage: number) => {
    let countArr: number[] = []
    if (count.length > numOfPostPerPage) {
        const countOfPages = Math.ceil(count.length / numOfPostPerPage)
        countArr = Array.from({ length: countOfPages }, (_, index) => index + 1)
        return countArr
    }
    return [1]
}

export const getPostId = async () => {
    const response = await fetch('https://65670f6864fcff8d730fa806.mockapi.io/posts')
    const data: Posts[] = await response.json()
    return data
}

export const changeImageValue = (arr: Posts[]) => {
    return arr.map((item) => {
        const newImage = item.image.replace('480', `${400 + (+item.id)}`)
        const updatedItem = {
            ...item,
            "image": newImage,
        }
        return updatedItem
    })
}