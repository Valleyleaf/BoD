import './roleFlow.css';
import { useTranslation } from 'react-i18next';
import explorerFlowJSON from './explorerFlowJSON.json';
import { useNavigate } from "react-router-dom";

const ExplorerFlow = ({ onBack }) => {
    const { i18n } = useTranslation();
    const languageData = explorerFlowJSON[i18n.language] || explorerFlowJSON.en;
    const { explorerFlow } = languageData;
    const navigate = useNavigate();

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
                    <div 
                    className='roleExampleMain'>
                        <div>
                            <h2>{explorerFlow.roleExamples.roleExamplesTitleCard.title}</h2>
                            <p>{explorerFlow.roleExamples.roleExamplesTitleCard.description}</p>
                        </div>
                        <div className='roleExampleItemContainer'>
                            {explorerFlow.roleExamples.roleExampleItems.map((example, index) => (
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
            </div>   
    </div>
    );


} 

export default ExplorerFlow;