import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/">
          <img src="/images/logo.png" alt="Your Logo" className="logo" />
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>
                About
              </NavLink>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;