import React from 'react';
import NavBarComponent from '../NavBarComponent/NavBarComponent';
import RadioComponentItemContent from './RadioComponentItemContent';
import './RadioStyles.css';

function RadioComponent({ data }) {
  return (
    <div className='flex-container'>
      <NavBarComponent />

      {data.radios.map((item, index) => (
        <RadioComponentItemContent
          key={index}
          name={item.name}
          frequency={item.frequency}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default RadioComponent;
