import { TabsHolder } from './TabHolder/TabsHolder'
import styles from './tabs.module.scss'


export const Tabs = () => {
    return (
        <div className={styles.tabs}>
            <TabsHolder/>
        </div>
    )
}
