import React from "react";
import { Link } from "react-router-dom";
import placeholder from '../img/placeholder.png';
import './CommanderRender.css'

const FACTION_ORDER = [
  "Mechanisms",
  "Inferno Crusade",
  "Void Whisperers",
  "The Green Order",
  "League of Valor",
  "The Abyss"
];

const CommanderGroupedByFaction = ({ commanders }) => {
  const getFactions = (items) => {
    const set = new Set();
    items.forEach(item => {
      if (item.faction) set.add(item.faction);
    });
    return Array.from(set).sort(
      (a, b) => FACTION_ORDER.indexOf(a) - FACTION_ORDER.indexOf(b)
    );
  };

  const groupedByFaction = (items) => {
    const groups = {};
    items.forEach(item => {
      if (!groups[item.faction]) groups[item.faction] = [];
      groups[item.faction].push(item);
    });
    return groups;
  };

  const factions = getFactions(commanders);
  const groups = groupedByFaction(commanders);

  return (
    <div>
      {factions.map(faction => (groups[faction] && groups[faction].length > 0 && (
          <div key={faction}>
            <h3 style={{marginTop: '1em'}}>{faction}</h3>
            <div className='roster comList'>
              {groups[faction].map(data => (
                <Link to={`/commanders/${data.slug}`} key={data.name} className='heroFrame comImg'>
                  {data.image ? (
                    <img className='splashArt' src={data.image} alt={data.thumbnailAlt || data.name} loading="lazy" onError={(e) => { e.target.src = 'default-placeholder.png'; }}/>
                  ) : (
                    <img className='splashArt' src={placeholder} alt="Placeholder"/>
                  )}
                  <h2 className='hoverTitle'>{data.title}</h2>
                </Link>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default CommanderGroupedByFaction;
