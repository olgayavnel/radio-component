import React from 'react';
import NavBarComponent from '../NavBarComponent/NavBarComponent';
import RadioItem from './RadioItem';
import './RadioStyles.css';

function RadioComponent({ data }) {
  return (
    <div
      className='flex-container'
      data-aos='zoom-in'
      data-aos-duration='500'
      data-aos-once='true'
    >
      <NavBarComponent />

      {data.radios.map((item, index) => (
        <RadioItem
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
