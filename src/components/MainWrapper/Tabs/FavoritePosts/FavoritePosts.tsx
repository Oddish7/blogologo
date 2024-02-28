import { useDispatch, useSelector } from 'react-redux'
import styles from '../tabs-content.module.scss'
import { AppDispatch } from '../../../../store/store'
import { selectPosts } from '../../../../store/posts/selector'
import { useEffect } from 'react'
import { LoadAllPostAsyncAction, setPageAction } from '../../../../store/posts/action'
import { setFavs } from '../../../../store/favs/selector'
import { AllNavigation } from '../../../AllNavigation/AllNavigation'

import { getCustomPostPages } from '../../../../helpers/getPageData'
import { getPages } from '../../../../helpers/getPages'
import { ShowedPosts } from '../ShowedPosts/ShowedPosts'

export const FavoritePosts = () => {
    const { amountPosts, page } = useSelector(selectPosts)
    const data = useSelector(setFavs)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(LoadAllPostAsyncAction())
        dispatch(setPageAction())
    }, [dispatch])

    const favoritePosts = amountPosts.filter(post => data[post.id]?.isAdded)

    const showedPosts = getCustomPostPages(favoritePosts, page!, 12)
    let pages: string[] = getPages(favoritePosts.length, 12, 12, page!)

    useEffect(() => {
        if (showedPosts.length === 0 && page !== 1) {
            dispatch(setPageAction(+page! - 1));
        }
    }, [showedPosts, page, dispatch])

    const onFavPage = (page: number) => {
        dispatch(setPageAction(page))
    }

    return (
        <>
            {
                favoritePosts.length === 0 ? (
                    <div className={styles.noitems}>
                        <p>ADD FAVORITE POSTS...</p>
                    </div>
                ) : (
                    <>
                        <ShowedPosts usedPosts={showedPosts} />
                        <AllNavigation onPage={onFavPage} page={page?.toString()!} pages={pages} />
                    </>
                )
            }
        </>
    )
}
