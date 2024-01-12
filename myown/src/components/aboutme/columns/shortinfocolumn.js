import React from 'react';

const ShortInfoColumn = ({}) => {
  return (
    <div className="shortinfo column">
        <div className='photo'>
          <img src='pic.png' alt={`Logo`} />
        </div>
        <div className='languages'>
          <h3>LANGUAGES</h3>
          <div className='language'>
            <p className='name'>Russian:</p>
            <p className='level'>Native</p>
          </div>
          <div className='language'>
            <p className='name'>English:</p>
            <p className='level'>C1</p>
          </div>
          <div className='language'>
            <p className='name'>Swedish:</p>
            <p className='level'>B1</p>
          </div>
        </div>
    </div>
  );
};

export default ShortInfoColumn;