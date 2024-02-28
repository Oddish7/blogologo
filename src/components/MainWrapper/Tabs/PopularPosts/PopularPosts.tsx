import { useEffect } from 'react'
import styles from '../tabs-content.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectPosts } from '../../../../store/posts/selector'
import { AppDispatch } from '../../../../store/store'
import { OpenImageAction } from '../../../../store/postImage/action'
import { LoadAllPostAsyncAction, setPageAction } from '../../../../store/posts/action'
import { getCustomPostPages } from '../../../../helpers/getPageData'
import { getPages } from '../../../../helpers/getPages'
import { PostMiddleVariant } from '../../PostMiddleVariant/PostMiddleVariant'
import { PostSmallVariant } from '../../PostSmallVariant/PostSmallVariant'
import { AllNavigation } from '../../../AllNavigation/AllNavigation'
import { ShowedPosts } from '../ShowedPosts/ShowedPosts'

export const PopularPosts = () => {
    const { amountPosts, page } = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()
    const popularPosts = amountPosts.filter(post => +post.likes > 50)

    useEffect(() => {
        dispatch(LoadAllPostAsyncAction())
        dispatch(setPageAction())
    }, [dispatch])
    
    const showedPosts = getCustomPostPages(popularPosts, page!, 12)
    let pages: string[] = getPages(popularPosts.length, 12, 12, page!)

    const onPopularPage = (page: number) => {
        dispatch(setPageAction(page))
    }
    
    return (
        <>
        <ShowedPosts usedPosts={showedPosts}/>
        <AllNavigation onPage={onPopularPage} page={page?.toString()!} pages={pages}/>
        </>
    )
}
