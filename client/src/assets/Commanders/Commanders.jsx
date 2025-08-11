import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeholder from '../img/placeholder.png';
import "./commanderRender.css";
import commanderService from '../../services/commanderService';

function Commanders() {
  const [commanders, setCommanders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommanders = async () => {
      try {
        const data = await commanderService.getAllCommanders();
        setCommanders(data);
      } catch (err) {
        setError('Failed to load commanders');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommanders();
  }, []);

  const renderItems = () => {
    return commanders.map((data) => (
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

  if (loading) return <div>Loading commanders...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='commanders'>
      <h2 className='Bio'>Your legend awaits.</h2>
        <div className="homeDivider"></div>
      <p>With over 60 Commanders and counting. Your playstyle is represented on the battlefield.</p>
      <div className="commanderRenderBackground fade-slide-up">
        <div className='roster comList'>
          {renderItems()}
        </div>
      </div>
    </div>

  );
}

export default Commanders;
