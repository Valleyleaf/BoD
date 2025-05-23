import React from "react";
import "./commanders.css";
import { Characters } from '../Info/Characters';
import { Link } from "react-router-dom";

function Commanders() {
  const renderItems = () => {
    return Characters.map((data) => (
      <Link to={`/commanders/${data.slug}`} key={data.name} className='heroFrame comImg'>
        <img
          className='thumbnail'
          src={data.thumbnail}
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
