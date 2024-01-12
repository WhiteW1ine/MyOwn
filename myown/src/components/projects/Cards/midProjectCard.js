import React from 'react';
import "./cards.css"

const MidProjectCard = ({name, url, img}) => {
  return (
    <div className="mid_project_card">
      <div className='name'>{name}</div>
      <div className='row'>
        <div className='decor'>
          <img src='empty_ellipse.png'></img>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="link">
            <img src={img} alt={`Logo`}/>
        </a>
      </div>
    </div>
  );
};

export default MidProjectCard;