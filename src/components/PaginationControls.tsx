import React from 'react';
import Link from 'next/link'
import styles from '../styles/PaginationControls.module.css' 

import {useRouter} from 'next/router'

export type PageInfoProps = {
  pathname: string,
  page: number,
  count: number,
  hideNext: boolean,
  hidePrev: boolean
}

const PaginationControls = (props: PageInfoProps) => {
  const router = useRouter()
  const {pathname, page, count, hidePrev, hideNext} = props
  const first: number = 1
  const last: number =  Math.ceil(count/10)
  
  const next = page + 1
  const prev = page - 1 
  
  return (
    <div className={styles.container}>
      <div className={styles.control}>
        <Link href={pathname + '/?page=' + first}>
          <a>First</a>
        </Link>
      </div>
      <div className={styles.control}>
        <button onClick={() => {
         router.push(`${pathname}?page=${prev}`) 
        }} disabled={hidePrev}>Prev</button>
      </div>
      <div className={styles.control}>
        <button onClick={() => {
         router.push(`${pathname}?page=${next}`) 
        }} disabled={hideNext}>Next</button>
      </div>
      <div className={styles.control}>
        <Link href={pathname + '?page=' + last}>
          <a>Last</a>
        </Link>
      </div>
    </div>
  )
}

export default PaginationControls
