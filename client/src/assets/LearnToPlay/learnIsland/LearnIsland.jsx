import React from 'react';
import { useTranslation } from 'react-i18next';
import islandJson from './islandJSON.json';
import './learnisland.css';

const LearnIsland = () => {
  const { t } = useTranslation();

  const islands = islandJson.map(island => ({
    title: t(`learnIsland.${island}.title`),
    description: t(`learnIsland.${island}.description`),
    crest: (`learnIsland.${island}.crest`)
  }));

  return (
    <div className="learn-island">
      <div className='island-header'>
        <h2>{t('learnIsland.title')}</h2>
        <p>{t('learnIsland.description')}</p>
      </div>
      <ul className='flexColumn center-content'>
        {islands.map((island, index) => (
          <li key={index}>
            <div>
              <h3>{island.title}</h3>
              <img src={island.crest} alt={island.crestAlt} />
              <p>{island.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnIsland;
