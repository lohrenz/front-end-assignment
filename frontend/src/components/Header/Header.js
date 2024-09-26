import React from 'react';
import styles from './Header.module.css';
import logo from './Logo.png';

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo' />
        </div >
    )
}
export default Header

