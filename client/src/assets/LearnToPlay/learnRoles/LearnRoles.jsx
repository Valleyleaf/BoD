import React from 'react';
import { useTranslation } from 'react-i18next';
import rolesJson from './rolesJSON.json';
import './learnroles.css';

const LearnRoles = () => {
  const { i18n } = useTranslation();

  const languageData = rolesJson[i18n.language] || rolesJson.en;
  const { learnRoles, roles } = languageData;

  return (
    <div className="learn-roles">
      <div className="roles-header">
        <h2 className='learnRolestitle'>{learnRoles.title}</h2>
        <p>{learnRoles.description}</p>
      </div>

      <ul className="flexColumn center-content">
        {roles.map((role, index) => (
          <div key={index}>
            <div className='rolesContainer'>
              <div className='rolesTitle'>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              </div>
              <img className='roleCrest' src={role.crest} alt={role.crestAlt}/>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LearnRoles;
