import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Search from '../search/search';
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className={styles.NavbarHeader}>
      <div className={styles.Navbar}>
        <img src="/logo.svg" alt='logo' className={styles.logo} />
        <ul className={styles.navList}>
          <li><Link to='/' className={styles.link}>Home</Link></li>
          <li><Link to='/recentpost' className={styles.link}>Recent Post</Link></li>
          <li><Link to='/membership' className={styles.link}>Membership</Link></li>
          <li className={styles.search}  onClick={() => setIsSearchOpen(true)}><IoSearch /></li>
        </ul>
      </div>
       <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}

export default Navbar;
