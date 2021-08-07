import React, { useState } from 'react';
import RadioComponentItemInnerContent from './RadioComponentItemInnerContent';
import './RadioStyles.css';

function RadioComponentItemContent({ name, frequency, image }) {
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
        <RadioComponentItemInnerContent image={image} />
      </div>
    </div>
  );
}

export default RadioComponentItemContent;
