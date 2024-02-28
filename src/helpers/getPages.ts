const getPageNumbers = (from: number, to: number) => {
    const res: string[] = []
    for(let i = from; i <= to; i++){
        res.push(i.toString())
    }
    return res
}
//use getPageNumbers

//1 2 3 4
//1 2 3 4 5
//1 2 3 ... 6
//1 2 3 4 5 6 7

export const getPages = (
    total: number,
    postsForFirstPage: number,
    postsPerPage: number,
    currentPage: number
    ): string[] => {

        const pageCount = total > 11 ? Math.ceil((total - postsForFirstPage) / postsPerPage) + 1 : 1
        const pages = []

        if(currentPage <= 4){
            const maxPage = currentPage + 2 >= pageCount
                ? pageCount
                : currentPage + 2
            pages.push(...getPageNumbers(1, maxPage))

            if(currentPage + 3 < pageCount){
                pages.push('...')
            }
            if(currentPage + 2 < pageCount){
                pages.push(pageCount.toString())
            }
        } 
        else if(currentPage > 4 && currentPage <= pageCount - 4){
            pages.push('1', '...', ...getPageNumbers(currentPage - 2, currentPage + 2), '...', pageCount.toString())

        } else {
            pages.push('1', '...', ...getPageNumbers(currentPage - 2, pageCount))
        }

        
    return pages
}

