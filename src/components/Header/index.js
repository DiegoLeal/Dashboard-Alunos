import React from 'react';
import { FaHome, FaRegUser, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() { 
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/Register">
        <FaRegUser size={24} />
      </Link>
      <Link to="/login">
        <FaUserCircle size={24} />
      </Link>     
    </Nav>
  );
}
