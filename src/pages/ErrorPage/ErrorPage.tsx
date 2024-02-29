import { BackToHome } from '../../components/BackToHome/BackToHome'
import { Footer } from '../../components/Footer/Footer'
import image from '../../images/mouse.svg'
import styles from './error_page.module.scss'

export const ErrorPage = () => {
    return (
        <>
        <div className={styles.error}>
            <BackToHome/>
            <div className={styles.error_image_box}>
                <img src={image} alt="Error image" />
            </div>
            <Footer/>
        </div>
        </>
    )
}
