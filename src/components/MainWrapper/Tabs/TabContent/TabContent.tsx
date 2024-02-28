import styles from "../tabs-content.module.scss"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectPosts } from "../../../../store/posts/selector"
import { LoadPostAsyncAction } from "../../../../store/posts/action"
import { AppDispatch } from "../../../../store/store"
import { AllPosts } from "../AllPosts/AllPosts"
import { FavoritePosts } from "../FavoritePosts/FavoritePosts"
import { PopularPosts } from "../PopularPosts/PopularPosts"


export type Posts = {
    id: number
    date: Date
    title: string
    description: string
    image: string
    likes: string
    dislikes: string
}

type Props = {
    data_type: number
}

export const TabContent = (props: Props) => {
    const {data_type} = props
    const {amountPosts, page} = useSelector(selectPosts) 
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(LoadPostAsyncAction(page!))

    }, [dispatch])


    if (amountPosts.length === 0) {
        return null
    }
    return (
        <>
            <div className={styles.tab_content}>
            {
                data_type === 0 ? (
                    <AllPosts/>
                ) : (
                    data_type === 1 ? (
                        <FavoritePosts/>
                    ) : (
                        <PopularPosts/>
                    )
                )
            }
            </div>
        </>
    )
}
