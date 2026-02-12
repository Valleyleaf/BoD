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
          <div key={index}>
            <div className="factionContainer"
                style={{
                backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.16), rgba(26, 26, 26, 0.99)), url(${faction.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="factionTextContainer">
                <h3>{faction.title}</h3>
                <p>{faction.description}</p>
              </div>
              <img src={faction.crest} alt={faction.crestAlt} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LearnFactions;
