import './roleFlow.css';
import { useTranslation } from 'react-i18next';
import settlerFlowJSON from './settlerFlowJSON.json';

const SettlerFlow = ({ onBack }) => {
    const { i18n } = useTranslation();
    const languageData = settlerFlowJSON[i18n.language] || settlerFlowJSON.en;
    const { settlerFlow } = languageData;
    
    return (
    <div 
    className='roleContainer'
    style={{
    backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.73), rgba(3, 3, 3, 0.99)), url(${settlerFlow.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat'
    }}
    >
        <div className='roleTitle'>
            <button id='back' onClick={onBack}>Back</button>
            <div>
                <h2>Settler</h2>
            </div>
        </div>
            <div className='roleDuty'>
                <div>
                    {settlerFlow.duties.map((duty, index) => (
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
                </div>       
            </div>   
    </div>
    );


} 

export default SettlerFlow;