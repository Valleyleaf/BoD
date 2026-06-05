import './roleFlow.css';
import { useTranslation } from 'react-i18next';
import explorerFlowJSON from './explorerFlowJSON.json';
import homeguardFlowJSON from './homeguardFlowJSON.json';
import settlerFlowJSON from './settlerFlowJSON.json';
import { useNavigate } from 'react-router-dom';

const flowFiles = {
  role1: explorerFlowJSON,
  role2: homeguardFlowJSON,
  role3: settlerFlowJSON,
};
//Above will need to be refactored for MongoDB in future.
const flowKeys = {
  role1: 'explorerFlow',
  role2: 'homeGuardFlow',
  role3: 'settlerFlow',
};
//Flowkey sets in LearnRoles.jsx from activeRoleKey
const RoleFlow = ({ activeRoleKey, onBack }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const selectedFlowFile = flowFiles[activeRoleKey];

  if (!selectedFlowFile) {
    return null;
  }

  const languageData = selectedFlowFile[i18n.language] || selectedFlowFile.en;
  const selectedFlowKey = flowKeys[activeRoleKey];
  const flow = languageData[selectedFlowKey];

  if (!flow) {
    return null;
  }

  const { title, backgroundImage, duties, roleExamples } = flow;

  return (
    <div
      className='roleContainer'
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.73), rgba(3, 3, 3, 0.99)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='roleTitle'>
        <button id='back' onClick={onBack}>Back</button>
        <h3>{title}</h3>
      </div>
      <div className='roleDuty'>
        {duties.map((duty, index) => (
          <div
                        className='duty'
                        style={{
                        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.73), rgba(3, 3, 3, 0.99)), url(${duty.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat'
                        }}
                        key={index}>
                            <div className='dutyTextContainer'>
                                <h3>{duty.title}</h3>
                                <p>{duty.description}</p>
                            </div>
                            <img src={duty.image} alt={duty.title} />
                        </div>
                    ))}
                    {roleExamples && (
                      <div 
                      className='roleExampleMain'>
                          <div>
                              <h2>{roleExamples.roleExamplesTitleCard.title}</h2>
                              <p>{roleExamples.roleExamplesTitleCard.description}</p>
                          </div>
                          <div className='roleExampleItemContainer'>
                              {roleExamples.roleExampleItems
                                .sort(() => 0.5 - Math.random())
                                .slice(0, 3)
                                .map((example, index) => (
                                  <button
                                  className='roleExampleItem'
                                  type="button"
                                  onClick={() => navigate({ pathname: example.ExampleCharacterLink })}
                                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                                  key={index}>
                                      <img className='roleExampleThumbnail' src={example.ExampleImage} alt={example.ExampleTitle} />
                                      <div>
                                          <h3>{example.ExampleTitle}</h3>
                                      </div>
                                  </button>
                              ))}
                          </div>
                      </div>
                    )}
            </div>   
    </div>
    );


} 

export default RoleFlow;

//These should frankly be refactored to be a single component.