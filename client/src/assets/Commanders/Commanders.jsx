import React from "react";
import { Characters } from '../Info/Characters';
import { Link } from "react-router-dom";
import "./commanderRender.css";


function Commanders() {
  const renderItems = () => {
    return Characters.map((data) => (
      //Might need to change this if I want a search/filter functionality later.
      //For now, this will just render all commanders.
      <Link to={`/commanders/${data.slug}`} key={data.name} className='heroFrame comImg'>
        <img
          className='splashArt'
          src={data.image}
          alt={data.thumbnailAlt || data.name}
          loading="lazy"
          onError={(e) => { e.target.src = 'default-placeholder.png'; }}
        />
        <h2 className='hoverTitle'>{data.title}</h2>
      </Link>
    ));
  };

  return (
    <div className="fade-slide-up">
      <div className='roster comList'>
        {renderItems()}
      </div>
    </div>
  );
}

export default Commanders;
