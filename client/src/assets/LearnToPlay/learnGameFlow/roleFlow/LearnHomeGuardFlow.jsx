import './roleFlow.css';
import { useTranslation } from 'react-i18next';
import homeGuardFlowJSON from './homeGuardFlowJSON.json';

const HomeGuardFlow = ({ onBack }) => {
    const { i18n } = useTranslation();
    const languageData = homeGuardFlowJSON[i18n.language] || homeGuardFlowJSON.en;
    const { homeGuardFlow } = languageData;
    
    return (
    <div 
    className='roleContainer'
    style={{
    backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.73), rgba(3, 3, 3, 0.99)), url(${homeGuardFlow.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat'
    }}
    >
        <div className='roleTitle'>
            <button id='back' onClick={onBack}>Back</button>
            <div>
                <h2>Home Guard</h2>
            </div>
        </div>
            <div className='roleDuty'>
                <div>
                    {homeGuardFlow.duties.map((duty, index) => (
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

export default HomeGuardFlow;