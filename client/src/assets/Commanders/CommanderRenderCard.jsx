import React from "react";
import { useNavigate } from "react-router-dom";
import './commanderRenderCard.css'

const CommanderRenderDefault = ({ commanders }) => {
  const navigate = useNavigate();

  return commanders.map((data) => (
    <button
      key={data.name}
      className='heroFrame'
      type="button"
      onClick={() => navigate(`/commanders/${data.slug}`)}
      style={{ 
        background: "none", 
      }}
    >
      {data.image ? (
        <img className='splashArt' src={data.image} alt={data.thumbnailAlt || data.name} loading="lazy" onError={(e) => { e.target.src = 'default-placeholder.png'; }}/>
      ) : (
        <img className='splashArt' src={placeholder} alt="Placeholder"/>
      )}
      <h2 className='hoverTitle'>{data.title}</h2>
    </button>
  ));
};

export default CommanderRenderDefault;
