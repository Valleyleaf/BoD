import React from 'react';
import { useTranslation } from 'react-i18next';
import islandJson from './islandJSON.json';
import './learnisland.css';

const LearnIsland = () => {
  const { i18n } = useTranslation();

  const languageData = islandJson[i18n.language] || islandJson.en;
  const { learnIsland, islandTopics } = languageData;

  return (
    <div className="learn-island">
      <div className="island-header">
        <h2>{learnIsland.title}</h2>
        <p>{learnIsland.description}</p>
      </div>

      <ul className="flexColumn center-content">
        {islandTopics.map((island, index) => (
          <div key={index}>
            <div className='islandContainer'>
              <div>
              <h3>{island.title}</h3>
              <p>{island.description}</p>
              </div>
              <img src={island.thumbnail} alt={island.thumbnailAlt}/>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LearnIsland;
