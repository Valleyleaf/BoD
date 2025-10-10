import React from "react";
import { Link } from "react-router-dom";

const CommanderRenderDefault = ({ commanders }) => {
  return commanders.map((data) => (
    <Link 
    to={`/commanders/${data.slug}`} 
    key={data.name} 
    className='heroFrame comImg'>
      {data.image ? (
        <img className='splashArt' src={data.image} alt={data.thumbnailAlt || data.name} loading="lazy" onError={(e) => { e.target.src = 'default-placeholder.png'; }}/>
      ) : (
        <img className='splashArt' src={placeholder} alt="Placeholder"/>
      )}
      <h2 className='hoverTitle'>{data.title}</h2>
    </Link>
  ));
};

export default CommanderRenderDefault;
//Naming could be better here.
//This renders the individual panels in the Commander selection screen.
//Lesson to be learned here. Even a simple component like this is worth breaking out into its own file.
