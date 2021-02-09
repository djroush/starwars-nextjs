import React, { Component } from 'react';
import NavHeader from './NavHeader';

import styles from '../styles/Layout.module.css'

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className={styles.container}>
        <NavHeader/>
        {children}
      </div>
    );
  }
}

export default Layout