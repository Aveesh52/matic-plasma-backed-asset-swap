import React from 'react';
import styles from './header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <nav id="menu" className="menu">
      <ul>
        <li><a href="/" className={styles.link}><span style={{ padding: "60px" }}> Home </span></a></li>

        <li><a href="/swap_factory" className={styles.link}> Swap Factory</a></li>
      </ul>
    </nav>
  </div>
)

export default Header;
