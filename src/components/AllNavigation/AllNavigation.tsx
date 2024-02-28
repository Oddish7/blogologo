import React from 'react'
import { PrevPageButton } from '../PrevPageButton/PrevPageButton'
import { NextPageButton } from '../NextPageButton/NextPageButton'
import { BlogNavigation } from '../MainWrapper/BlogNavigation/BlogNavigation'
import navStyles from '../MainWrapper/main.module.scss'

type Props = {
    page: string
    pages: string[]
    onPage: (page: number) => void
}

export const AllNavigation = ({page, pages, onPage}: Props) => {
    return (
        <div className={navStyles.nav}>
            <PrevPageButton onPage={onPage} disabled={+page === 1 || !pages.length ? true : false}/>
            <BlogNavigation onPage={onPage} page={page} pages={pages}/>
            <NextPageButton onPage={onPage} disabled={+page === pages.length || !pages.length ? true : false}/>
        </div>
    )
}
