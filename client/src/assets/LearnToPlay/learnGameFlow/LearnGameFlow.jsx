import { useTranslation } from 'react-i18next';
import flowJson from './flowJSON.json';
import roleFlowJSON from './flowRoleJSON.json';
import './learnGameFlow.css';
import LearnObjectivesDefault from './LearnObjectivesDefault';
import ExplorerFlow from './roleFlow/LearnExplorerFlow';
import {useState} from 'react';

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
      <div id='roleContainer' className='flexColumn center-content'>
        <LearnObjectivesDefault />
        <ExplorerFlow/>
      </div>
    </div>
  );
};

export default LearnGameFlow;
