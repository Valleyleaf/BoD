import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import rolesJson from './rolesJSON.json';
import './learnroles.css';
import RoleFlow from '../learnRoleFlow/roleFlow/LearnRoleFlow.jsx';
// import learntoPlayService from '../../services/learntoPlayService';
import Error from '../../Error/Error.jsx';

const LearnRoles = () => {
  const { i18n } = useTranslation();
  const languageData = rolesJson[i18n.language] || rolesJson.en;
  const { learnRoles, roles } = languageData;
  const [activeRoleKey, setActiveRoleKey] = useState(null);
  
  useEffect(() => {
    const fetchLearnToPlay = async () => {
      try {
        const data = await learntoPlayService.getl2pData();
        setCommanders(data);
      } catch (err) {
        setError('Failed to load Learn to Play Data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLearnToPlay();
  }, []);



  const handleBack = () => {
    setActiveRoleKey(null);
  };

  if (activeRoleKey) {
    return <RoleFlow activeRoleKey={activeRoleKey} onBack={handleBack} />;
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
            id={role.key}
            onClick={() => setActiveRoleKey(role.key)}
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
      {/* Above renders each role based on return value from rolesJSON. Should be easy to refactor to run off MongoDB instead. */}
    </div>
  );
};

export default LearnRoles;
