import styles from '../sign_in_page.module.scss'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { PostSmallVariant } from '../../components/MainWrapper/PostSmallVariant/PostSmallVariant'
import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { LoadAllPostAsyncAction, setPageAction } from '../../store/posts/action'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/selector'
import { searchPosts } from '../../store/search/selector'
import { AllNavigation } from '../../components/AllNavigation/AllNavigation'
import { getCustomPostPages } from '../../helpers/getPageData'
import { getPages } from '../../helpers/getPages'

type Posts = {
    id: number
    date: Date
    title: string
    description: string
    image: string
}

export const SearchResultsPage = () => {
    const {amountPosts, page} = useSelector(selectPosts)
    const {searchText} = useSelector(searchPosts)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(LoadAllPostAsyncAction())
        dispatch(setPageAction())
    }, [dispatch])
    
    useEffect(() => {
        if (amountPosts.length === 0) {
            return undefined
        }
    })

    const searchedPosts = amountPosts.filter((post) => post.title.toLowerCase().includes(searchText.toLowerCase()) || post.description.toLowerCase().includes(searchText.toLowerCase()))
    const showedSearchedPosts = getCustomPostPages(searchedPosts, page!, 6)
    let pages: string[] = getPages(searchedPosts.length, 6, 6, page!)

    
    const onPage = (page: number) => {
        dispatch(setPageAction(page))
        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <PageHeader title={`Search results for '${searchText}'`}/>
                <div className={styles.page_marg}>
                    {
                        showedSearchedPosts
                        .map((post) => (
                            <PostSmallVariant searchRes={true} key={post.id} post={post}/>
                        ))
                    }
                </div>
                <AllNavigation onPage={onPage} page={page?.toString()!} pages={pages}/>
            </div>
        </div>
    )
}
