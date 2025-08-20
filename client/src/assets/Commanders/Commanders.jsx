import React, { useState, useEffect, useMemo } from "react";
import CommanderRenderDefault from './CommanderRenderDefault.jsx';
import Loading from '../Loading/Loading.jsx';
import "./commanderRender.css";
import commanderService from '../../services/commanderService';
import CommanderGroupedList from './CommanderGroupedByAttribute.jsx';
import CommanderGroupedByFaction from './CommanderGroupedByFaction';

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

  const sortedCommanders = useMemo(() => {
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
  }, [commanders, sortOption]);


  if (loading) return <Loading/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='commanders'>
      <h2 className='commanderPageText'>Your legend awaits.</h2>
        <div className="homeDivider"></div>
      <p>With over 60 Commanders and counting. Your playstyle is represented on the battlefield.</p>
      <div className="commanderSortDropdownContainer" style={{ margin: "1em 0" }}>
        <label htmlFor="sortDropdown" style={{ marginRight: "0.5em" }}>Sort by:</label>
        <select className="dropDownMenu" id="sortDropdown" value={sortOption} onChange={handleSortChange}>
          <option value="Name">Name(A-Z)</option>
          <option value="Primary Stat">Keystone Attribute</option>
          <option value="Faction">Faction</option>
          <option value="Difficulty">Difficulty (1-5)</option>
        </select>
      </div>
      <div className="commanderRenderBackground fade-slide-up">
        {sortOption === "Primary Stat" ? (
          <CommanderGroupedList commanders={sortedCommanders} />
        ) : sortOption === "Faction" ? (
          <CommanderGroupedByFaction commanders={sortedCommanders} />
        ) : (
          <div className='roster comList'>
            <CommanderRenderDefault commanders={sortedCommanders} />
          </div>
        )}
      </div>
    </div>

  );
}

export default Commanders;
