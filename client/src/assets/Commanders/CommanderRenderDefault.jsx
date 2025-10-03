import React from "react";
import { Link } from "react-router-dom";
import placeholder from '../img/placeholder.png';

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
// Not a big deal but the above naming convention is horrible and doesn't actually explain what this does. This renders the individual panels in the Commander selection screen.
