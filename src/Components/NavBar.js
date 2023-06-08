import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from '../styles/NavBar.module.css';

function Navbar() {
  const links = [
    { path: '/', name: 'Home' },
    { path: '/calculator', name: 'Calculator' },
    { path: '/quotes', name: 'Quotes' },
  ];

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Math Magician Calculator</h1>
      <ul className={styles.navlinks}>
        {links.map((link) => (
          <li key={link.name} className={styles.navlink}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? 'blue' : undefined,
              })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
