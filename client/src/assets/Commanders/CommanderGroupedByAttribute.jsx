import React from "react";
import { Link } from "react-router-dom";
import placeholder from '../img/placeholder.png';
import './commanderRender.css'

const statClassMap = {
  Strength: "strengthText",
  Agility: "agilityText",
  Intelligence: "intelligenceText"
};

const CommanderGroupedList = ({ commanders }) => {
  const groupedByStat = (items) => {
    const groups = { Strength: [], Agility: [], Intelligence: [] };
    items.forEach(item => {
      if (item.primaryStat) {
        //This is for the Collector only.
        item.primaryStat.split('/').map(attribute => attribute.trim()).forEach(attribute => {
          if (groups[attribute]) {
            groups[attribute].push(item);
          }
        });
      }
    });
    return groups;
  };

  const groups = groupedByStat(commanders);

  return (
    <div>
      {["Strength", "Agility", "Intelligence"].map(stat => (groups[stat].length > 0 && (
          <div key={stat}>
            <h3 className={statClassMap[stat] || "Pstat Missing"} style={{marginTop: '1em'}}>{stat}</h3>
            <div className="homeDivider"></div>
            <div className='roster comList'>
              {groups[stat].map(data => (
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

export default CommanderGroupedList;
