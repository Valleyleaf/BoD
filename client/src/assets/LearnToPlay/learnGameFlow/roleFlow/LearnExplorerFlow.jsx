import './roleFlow.css';
import { useTranslation } from 'react-i18next';
import explorerFlowJSON from './explorerFlowJSON.json';

const ExplorerFlow = () => {
  const { i18n } = useTranslation();
  const languageData = explorerFlowJSON[i18n.language] || explorerFlowJSON.en;
  const { explorerFlow } = languageData;

    function roleDuty() {
        return (
            <div className='flexRow center-content'>
                {explorerFlow.duties.map((duty, index) => (
                    <div
                    className='duty'
                    key={index}>
                        <div className='dutyTextContainer'>
                            <h3>{duty.title}</h3>
                            <p>{duty.description}</p>
                        </div>
                            <img src={duty.image} alt={duty.title} />
                    </div>
                ))}
            </div>
        )
    }

  return (
    <div className='roleContainer'>
        <div className='roleTitle'>
            <h2>Explorer</h2>
            <p>Flavor Text</p>
        </div>
        <div className='roleDuty'>
            {roleDuty()}        
        </div>   
        <button id='roleBackButton'>Return</button>     
    </div>
  );


} 

export default ExplorerFlow;