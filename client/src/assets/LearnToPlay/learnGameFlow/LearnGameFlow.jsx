import { useTranslation } from 'react-i18next';
import flowJson from './flowJSON.json';
import roleFlowJSON from './flowRoleJSON.json';
import './learnGameFlow.css';

const LearnGameFlow = () => {
  const { i18n } = useTranslation();
  const languageData = flowJson[i18n.language] || flowJson.en;
  const { learnGameFlow, flow } = languageData;
  const roleFlowData = roleFlowJSON[i18n.language] || roleFlowJSON.en;
  const { roleFlow } = roleFlowData;

  return (
    <div>
      <div>
        <h2 className='gameFlowStageTitle'>{learnGameFlow.title}</h2>
      </div>
      <div className='flexColumn center-content'>
        {roleFlow.map((flow, index) => (
          <div 
            className='gameFlowContainer'
            style={{
            backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.73), rgba(3, 3, 3, 0.99)), url(${flow.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
            }}
            key={index}>
                <div className='gameFlowTextContainer'>
                  <h3 className='gameFlowStageTitle'>{flow.title}</h3>
                  <p className='gameFlowStageDescription'>{flow.description}</p>
                  <div className='roleButtons'>
                    <button><img src={flow.roleButton1Image} alt={flow.roleButton1}/></button>
                    <button><img src={flow.roleButton2Image} alt={flow.roleButton2}/></button>
                    <button><img src={flow.roleButton3Image} alt={flow.roleButton3}/></button>
                  </div>
                </div>
                <img className='gameFlowVisualContainer' src={flow.sampleImage} alt={flow.sampleImageAlt}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnGameFlow;
