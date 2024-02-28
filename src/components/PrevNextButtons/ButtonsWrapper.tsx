import React from 'react'
import { PrevButton } from './PrevButton/PrevButton'
import { NextButton } from './NextButton/NextButton'
import styles from './prev_next_buttons.module.scss'
import { useSelector } from 'react-redux'
import { postImage } from '../../store/postImage/selectors'

type Props = {
    dataLength: number
}

export const ButtonsWrapper = ({dataLength}: Props) => {
    const {idOfPost} = useSelector(postImage)
    return (
        <div className={styles.buttons_wrapper}>
            <PrevButton disabled={idOfPost == 0 ? true : false}/>
            <NextButton disabled={idOfPost == dataLength - 1 ? true : false}/>
        </div>
    )
}
