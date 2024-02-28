import { useEffect, useState } from 'react'
import styles from './main.module.scss'
import { Tabs } from './Tabs/Tabs'
import { Alert } from '../Alert/Alert'
import { useAddPostState } from '../../store/addPost/selector'
import { useDispatch } from 'react-redux'
import { cancelErrors, resetPost } from '../../store/addPost/action'


export const MainWrapper = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [hide, setHide] = useState<boolean>(false)
    const addPostData = useAddPostState()
    const dispatch = useDispatch()

    useEffect(() => {
        if (addPostData.isPostAdded || addPostData.isPostEdited || addPostData.isPostDeleted) {
            setTimeout(() => {
                setHide(true)
                setTimeout(() => {
                    dispatch(resetPost())
                    dispatch(cancelErrors())
                }, 500);
            }, 3000);
        };
    }, [addPostData.isPostAdded, dispatch]);
    



    return (
    <>
        <div className={styles.main}>
            <h1>Blog</h1>
            <Tabs/>
        </div>
        {
            addPostData.isPostAdded ?
            <Alert isError={false} errorText='Post is added! :)' isHide={hide} closeAlert={() => {}}  />
            : 
            addPostData.isPostEdited ?
            <Alert isError={false} errorText='Post is edited! :)' isHide={hide} closeAlert={() => {}}  />
            :
            addPostData.isPostDeleted ?
            <Alert isError={false} errorText='Post is deleted! :)' isHide={hide} closeAlert={() => {}}  />
            : null
        }
    </>
    )
}
