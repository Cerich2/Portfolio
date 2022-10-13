import React from 'react'
import { details, menus } from '../../utils/const'
import Header from '../Header'
import LeftPanel from '../LeftPanel'
import RightPanel from '../RightPanel'
import styles from "./.module.css"

const Card = () => {
  return (
    <div className={styles['main-pane']}>
      <Header className={styles['header-pane']} details={details} menus={menus} />
      <div className={styles["two-panel"]}>
      <LeftPanel />
      <RightPanel />
      </div>
    </div>
  )
}

export default Card