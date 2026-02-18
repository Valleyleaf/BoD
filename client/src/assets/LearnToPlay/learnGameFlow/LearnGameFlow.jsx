import { useTranslation } from 'react-i18next';
import flowJson from './flowJSON.json';
import './learnGameFlow.css';

const LearnGameFlow = () => {
  const { i18n } = useTranslation();
  const languageData = flowJson[i18n.language] || flowJson.en;
  const { learnGameFlow, flow } = languageData;

  return (
    <div>
      <div>
        <h2>{learnGameFlow.title}</h2>
        <p>{learnGameFlow.description}</p>
      </div>
      <div className="flexRow">
        {flow.map((flow, index) => (
          <div 
            key={index}>
              <div>
                <div>
                  <h3>{flow.title}</h3>
                  <img  src={flow.crest} alt={flow.crestAlt}/>
                </div>
              <p>{flow.description}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnGameFlow;
