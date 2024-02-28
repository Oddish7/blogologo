import React from 'react'
import styles from './footer.module.scss'
import { ThemeButton } from '../Theme/ThemeButton/ThemeButton'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>©2024 Blogologo</p>
            <ThemeButton />
        </div>
    )
}
