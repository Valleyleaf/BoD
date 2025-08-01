import React from "react";
import Characters from '../Info/Commanders/A_index';
import { Link } from "react-router-dom";
import placeholder from '../img/placeholder.png';
import "./commanderRender.css";
// import { joinCommanders } from "../Info/JoinCharacters";

function Commanders() {
  const renderItems = () => {
    return Characters.map((data) => (
      //Might need to change this if I want a search/filter functionality later.
      //For now, this will just render all commanders.
      <Link to={`/commanders/${data.slug}`} key={data.name} className='heroFrame comImg'>
        {data.image ? (
        <img className='splashArt' src={data.image} alt={data.thumbnailAlt || data.name} loading="lazy" onError={(e) => { e.target.src = 'default-placeholder.png'; }}/> 
        ):(
          <img className='splashArt' src={placeholder} alt="Placeholder"/>
        )}
        <h2 className='hoverTitle'>{data.title}</h2>
      </Link>
    ));
  };

  return (
    <div className='commanders'>
      <h2 className='Bio'>To Battle.</h2>
      <p>With over 60 Commanders and counting. Your playstyle is represented on the battlefield.</p>
      <div className="fade-slide-up">
        <div className='roster comList'>
          {renderItems()}
        </div>
      </div>
    </div>

  );
}

export default Commanders;
