import React from 'react';
import './RadioStyles.css';
import { FiMinus, FiPlus } from 'react-icons/fi';

function RadioComponentItemInnerContent({ image }) {
  return (
    <>
      <FiMinus className='icon-button left' />
      <img src={image} className='image' alt='img' />
      <FiPlus className='icon-button right' />
    </>
  );
}

export default RadioComponentItemInnerContent;
