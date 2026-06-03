import './roleFlow.css';
import { useTranslation } from 'react-i18next';
import explorerFlowJSON from './explorerFlowJSON.json';

const ExplorerFlow = ({ onBack }) => {
    const { i18n } = useTranslation();
    const languageData = explorerFlowJSON[i18n.language] || explorerFlowJSON.en;
    const { explorerFlow } = languageData;
    
    return (
    <div 
    className='roleContainer'
    style={{
    backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.73), rgba(3, 3, 3, 0.99)), url(${explorerFlow.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat'
    }}
    >
        <div className='roleTitle'>
            <button id='back' onClick={onBack}>Back</button>
        <h3>{explorerFlow.title}</h3>
        </div>
            <div className='roleDuty'>
                <div>
                    {explorerFlow.duties.map((duty, index) => (
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
                    {explorerFlow.roleExamples.roleExampleItems.map((example, index) => (
                        <div
                        className='roleExampleContainer'
                        key={index}>
                            <img classname='roleExampleThumbnail' src={example.ExampleImage} alt={example.ExampleTitle} />
                            <div className='roleExampleItems'>
                                <h3>{example.ExampleTitle}</h3>
                            </div>
                        </div>
                    ))}
                </div>     
            </div>   
    </div>
    );


} 

export default ExplorerFlow;