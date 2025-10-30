import React from 'react';
import { useTranslation } from 'react-i18next';
import factionsJson from './factionsJSON.json';
import './learnfactions.css';

const LearnFactions = () => {
  const { t } = useTranslation();

  const factions = factionsJson.map(faction => ({
    title: t(`learnFactions.${faction}.title`),
    description: t(`learnFactions.${faction}.description`),
    crest: (`learnFactions.${faction}.crest`)
  }));

  return (
    <div className="learn-factions">
      <div className='factions-header'>
        <h2>{t('learnFactions.title')}</h2>
        <p>{t('learnFactions.description')}</p>
      </div>
      <ul className='flexColumn center-content'>
        {factions.map((faction, index) => (
          <li key={index}>
            <div>
              <h3>{faction.title}</h3>
              <img src={faction.crest} alt={faction.crestAlt} />
              <p>{faction.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnFactions;
