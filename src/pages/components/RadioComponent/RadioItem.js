import React, { useState } from 'react';
import RadioItemContent from './RadioItemContent';
import './RadioStyles.css';

function RadioItem({ name, frequency, image }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    console.log('click happened!');
    setExpanded((expanded) => !expanded);
  };

  return (
    <div className='radio-items-wrapper'>
      <div className='radio-items-container' onClick={handleClick}>
        <p className='radio-item station'>{name.toUpperCase()}</p>
        <p className='radio-item frequency'>{frequency}</p>
      </div>
      <div
        className={
          expanded ? 'inner-container expanded' : 'inner-container collapsed'
        }
      >
        <RadioItemContent image={image} />
      </div>
    </div>
  );
}

export default RadioItem;
