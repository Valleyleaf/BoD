import React from 'react';
import { useTranslation } from 'react-i18next';
import factionsJson from './factionsJSON.json';
import './learnfactions.css';

const LearnFactions = () => {
  const { i18n } = useTranslation();

  const languageData = factionsJson[i18n.language] || factionsJson.en;
  const { learnFactions, factions } = languageData;

  function sampleAbility(faction) {
    return (
      <div className='sampleAbilityContainer'>
        <h2 className='sampleAbilityTitle'>Unique Perk: {faction.sampleAbilityTitle}</h2>
        <div className='flexRow'>
          <img className='sampleAbilityIcon' src={faction.sampleAbilityImage} alt={faction.crestAlt}/>
          <p className='sampleAbilityDisc'>{faction.sampleAbilityDisc}</p>
        </div>
      </div>
    );
  }

    function sampleHQ(faction) {
    return (
      <div className='sampleAbilityContainer'>
        <h2 className='sampleAbilityTitle'>Headquarter: {faction.sampleHQTitle}</h2>
        <div className='flexRow'>
          <img className='factionHQIcon' src={faction.sampleHQImage} alt={faction.crestAlt}/>
          <p className='sampleAbilityDisc'>{faction.sampleHQDisc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="learn-factions">
      <div className="factions-header">
        <h2 className='factionTitle'>{learnFactions.title}</h2>
      </div>

      <div className="factionGrid">
        {factions.map((faction, index) => (
          <div key={index}>
            <div className="factionContainer"
                style={{
                backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.64), rgba(26, 26, 26, 0.99)), url(${faction.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="factionMainContainer">
                <div className='factionTitleContainer'>
                  <h3 className='factionTitle'>{faction.title}</h3>
                  <img className='factionCrestIcon' src={faction.crest} alt={faction.crestAlt}/>
                </div>
                <p>{faction.description}</p>
              </div>
                {sampleAbility(faction)}
                {sampleHQ(faction)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnFactions;
