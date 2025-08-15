import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeholder from '../img/placeholder.png';
import Loading from '../Loading/Loading.jsx'
import "./commanderRender.css";
import commanderService from '../../services/commanderService';

function Commanders() {
  const [commanders, setCommanders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("Name");

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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const getSortedCommanders = () => {
    let items = [...commanders];
    if (sortOption === "Name") {
      items.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "Primary Stat") {
      items.sort((a, b) => (a.primaryStat || "").localeCompare(b.primaryStat || ""));
    } else if (sortOption === "Faction") {
      items.sort((a, b) => (a.faction || "").localeCompare(b.faction || ""));
    } else if (sortOption === "Difficulty") {
      items.sort((a, b) => (a.difficulty || 0) - (b.difficulty || 0));
    }
    return items;
  };

  const renderItems = () => {
    return getSortedCommanders().map((data) => (
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

  if (loading) return <Loading/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='commanders'>
      <h2 className='Bio'>Your legend awaits.</h2>
        <div className="homeDivider"></div>
      <p>With over 60 Commanders and counting. Your playstyle is represented on the battlefield.</p>
      {/* Dropdown menu for sorting */}
      <div className="commanderSortDropdownContainer" style={{ margin: "1em 0" }}>
        <label htmlFor="sortDropdown" style={{ marginRight: "0.5em" }}>Sort by:</label>
        <select id="sortDropdown" value={sortOption} onChange={handleSortChange}>
          <option value="Name">Name</option>
          <option value="Primary Stat">Primary Stat</option>
          <option value="Faction">Faction</option>
          <option value="Difficulty">Difficulty (1-5)</option>
        </select>
      </div>
      <div className="commanderRenderBackground fade-slide-up">
        <div className='roster comList'>
          {renderItems()}
        </div>
      </div>
    </div>

  );
}

export default Commanders;
