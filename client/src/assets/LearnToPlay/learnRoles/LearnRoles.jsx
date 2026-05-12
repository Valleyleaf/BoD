import {react, useState} from 'react';
import { useTranslation } from 'react-i18next';
import rolesJson from './rolesJSON.json';
import './learnroles.css';
import ExplorerFlow from '../learnRoleFlow/roleFlow/LearnExplorerFlow';
import HomeGuardFlow from '../learnRoleFlow/roleFlow/LearnExplorerFlow';
import SettlerFlow from '../learnRoleFlow/roleFlow/LearnExplorerFlow';

const LearnRoles = () => {
  const { i18n } = useTranslation();
  const languageData = rolesJson[i18n.language] || rolesJson.en;
  const { learnRoles, roles } = languageData;
  const [activeView, setActiveView] = useState(null);

  
  const handleBack = () => {
    setActiveView(null);
  };

  if (activeView === "Explorer") {
    return <ExplorerFlow onBack={handleBack} />;
  }

  if (activeView === "HomeGuard") {
    return <HomeGuardFlow onBack={handleBack} />;
  }

  if (activeView === "Settler") {
    return <SettlerFlow onBack={handleBack} />;
  }

  return (
    <div className="learn-roles" >
      <div className="roles-header">
        <h2 className='learnRolestitle'>{learnRoles.title}</h2>
      </div>

      <div className="l2pContent">
        {roles.map((role, index) => (
          <button 
            key={index}
            id={role.title}
            onClick={() => setActiveView(role.title)}
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
              <p className='rolesHover'>{learnRoles.click}</p>
              </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearnRoles;
