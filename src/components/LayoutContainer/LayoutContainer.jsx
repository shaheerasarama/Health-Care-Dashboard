import React from 'react'
import styles from './LayoutContainer.module.css'
export default function LayoutContainer({children}) {
  return (
    <div className={styles.container}>{children}</div>
  )
}
