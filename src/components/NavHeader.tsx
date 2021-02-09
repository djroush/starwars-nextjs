import React, { Component } from 'react';
import Link from 'next/link'
import styles from '../styles/NavHeader.module.css'

class NavHeader extends Component {

  render () {
    return (
      <ul className={styles.container}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/people">
            <a>People</a>
          </Link>
        </li>
        <li>
          <Link href="/species">
            <a>Species</a>
          </Link>
        </li>
        <li>
          <Link href="/planets">
            <a>Planets</a>
          </Link>
        </li>
      </ul>
    )
  }
}

export default NavHeader
