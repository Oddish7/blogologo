import styles from './tabs-holder.module.scss'
import { TabContent } from '../TabContent/TabContent';
import { useSelector } from 'react-redux';
import { selectTabs } from '../../../../store/tabs/selector';
import { useDispatch } from 'react-redux';
import { setTabAction } from '../../../../store/tabs/action';


export const TabsHolder = () => {

    const {tabs, activeIndex} = useSelector(selectTabs)
    const dispatch = useDispatch()
    
    const openTab = (e: React.MouseEvent<HTMLButtonElement>) => {
        const indexButton = e.currentTarget.dataset.index;
        if (indexButton) {
            const index = +indexButton;

            if (!isNaN(index)) {
                dispatch(setTabAction(index))
            }
        }
    };
    return (
        <div className={styles.tabs_holder}>
            <div className={styles.tabs_links}>
            {
                tabs.map((item, index) => (
                    <button
                    className={`${styles.tabs_holder__button} ${index === activeIndex ? styles.active : ''}`}
                    onClick={openTab}
                    data-index={index}
                    key={index}>{item}</button>
                ))
            }
            </div>
            <TabContent data_type={activeIndex}/>
        </div>
        
    )
}
