import React from 'react';
import './RadioStyles.css';

function RadioComponentItemInnerContent({ image }) {
  return (
    <>
      <p>-</p>
      <img src={image} className='image' alt='img' />
      <p>+</p>
    </>
  );
}

export default RadioComponentItemInnerContent;
