import React from 'react'
import styles from './page_header.module.scss'

type Props = {
    title: string
}

export const PageHeader = ({title}: Props) => {
    return (
        <h1 className={styles.page_header}>
            {title}
        </h1>
    )
}
