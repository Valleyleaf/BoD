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
            <div>
                <h2>Explorer</h2>
                <p>Flavor Text</p>
            </div>
        </div>
            <div className='roleDuty'>
                <div className=''>
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
            </div>   
    </div>
    );


} 

export default ExplorerFlow;