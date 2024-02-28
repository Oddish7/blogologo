import { useDispatch } from 'react-redux'
import { MoreIcon } from './MoreIcon'
import styles from './more.module.scss'
import { setCloseMoreAction, setOpenMoreAction } from '../../../../store/more/action'
import { useMoreState } from '../../../../store/more/selectors'
import { setEditAction } from '../../../../store/edit/action'
import { useAuthState } from '../../../../store/auth/selectors'

type Props = {
    postId: string
    title?: string
    description?: string
}

export const More = ({postId, title, description}: Props) => {
    const {isLoged} = useAuthState()
    const moreState = useMoreState(postId)
    const {more} = moreState || {}

    const dispatch = useDispatch()
    const open = () => {
        dispatch(setOpenMoreAction(postId))
        dispatch(setEditAction(postId?.toString(), title!, description!))
    } 
    const close = () => dispatch(setCloseMoreAction(postId))

    return (
        <>
            <button disabled={isLoged ? false : true} onClick={more ? close : open} className={styles.more}>
                <MoreIcon/>
            </button>
        </>
    )
}
