import React from 'react';
import { useTranslation } from 'react-i18next';
import factionsJson from './factionsJSON.json';
import './learnfactions.css';

const LearnFactions = () => {
  const { i18n } = useTranslation();

  const languageData = factionsJson[i18n.language] || factionsJson.en;
  const { learnFactions, factions } = languageData;

  return (
    <div className="learn-factions">
      <div className="factions-header">
        <h2>{learnFactions.title}</h2>
        <p>{learnFactions.description}</p>
      </div>

      <ul className="flexColumn center-content">
        {factions.map((faction, index) => (
          <li key={index}>
            <div className="factionContainer">
              <div className="factionTextContainer">
                <h3>{faction.title}</h3>
                <p>{faction.description}</p>
              </div>
              <img src={faction.crest} alt={faction.crestAlt} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnFactions;
