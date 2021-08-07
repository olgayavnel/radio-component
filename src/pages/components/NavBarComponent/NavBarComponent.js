import React from 'react';
import './NavBarStyles.css';
import { FiChevronLeft, FiPower } from 'react-icons/fi';

function NavBarComponent() {
  return (
    <div className='navbar'>
      <FiChevronLeft className='icon-button left' />
      <p>STATIONS</p>
      <FiPower className='icon-button right' />
    </div>
  );
}

export default NavBarComponent;
