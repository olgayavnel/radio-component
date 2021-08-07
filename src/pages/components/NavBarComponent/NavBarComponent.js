import React from 'react';
import './NavBarStyles.css';
import { FiChevronLeft, FiPower } from 'react-icons/fi';

function NavBarComponent() {
  return (
    <div className='navbar'>
      <FiChevronLeft />
      <p>STATIONS</p>
      <FiPower />
    </div>
  );
}

export default NavBarComponent;
