import styles from '../styles/sidelist.module.scss'
import { useState } from 'react';

export function Sidelist(props: any) {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <ul className={`${styles.list} ${open?styles.open:styles.close} row`}>
        <button className={styles.btn} onClick={() => setOpen(!open)}>X</button>
          <ul className={`column ${styles.eralist}`}>
          {props.children}
          </ul>
      </ul>
      <button className={`${styles.btn} ${open?styles.close:styles.open}`} onClick={() => setOpen(!open)}>List</button>
    </div>
  )
}