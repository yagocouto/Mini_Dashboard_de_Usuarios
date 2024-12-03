import React from 'react';
import './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{' '}
      <NavLink to="users">Lista de usuarios</NavLink>
    </nav>
  );
};

export default Header;
