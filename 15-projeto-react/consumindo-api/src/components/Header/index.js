import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  const linkHome = () => {
    window.location.href = '/';
  };
  const linkRegister = () => {
    window.location.href = '/register';
  };
  const linkLogin = () => {
    window.location.href = '/login';
  };

  return (
    <Nav>
      <Link to="/" onClick={linkHome}>
        <FaHome size={24} />
      </Link>
      <Link to="/register" onClick={linkRegister}>
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login" onClick={linkLogin}>
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
