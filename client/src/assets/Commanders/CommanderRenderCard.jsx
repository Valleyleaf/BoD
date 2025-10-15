import React from "react";
import { useNavigate } from "react-router-dom";

const CommanderRenderDefault = ({ commanders }) => {
  const navigate = useNavigate();

  return commanders.map((data) => (
    <button
      key={data.name}
      className='heroFrame comImg'
      type="button"
      onClick={() => navigate(`/commanders/${data.slug}`)}
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
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
