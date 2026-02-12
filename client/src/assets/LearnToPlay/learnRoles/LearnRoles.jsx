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
        {/* <p className='RoleHeaderDisc'>{learnRoles.description}</p> */}
      </div>

      <div className="flexRow">
        {roles.map((role, index) => (
          <div 
            key={index} 
            className='rolesContainer'
            style={{
              backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.16), rgba(26, 26, 26, 0.99)), url(${role.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat'
            }}>
              <div className='rolesTextContainer'>
                <div className='roleTitleContainer'>
                  <h3 className='rolesTitle'>{role.title}</h3>
                  <img className='roleCrest' src={role.crest} alt={role.crestAlt}/>
                </div>
              <p className='rolesDisc'>{role.description}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnRoles;
