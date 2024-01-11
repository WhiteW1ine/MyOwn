import React from 'react';
import "./cards.css"

const SmallProjectCard = ({name, url, img}) => {
  return (
    <div className="small_project_card">
      <div className='row'>
        <div className='decoration'></div>
        <div className='name'>{name}</div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="link">
            <img src={img} alt={`Logo`} className="pic" />
      </a>
    </div>
  );
};

export default SmallProjectCard;