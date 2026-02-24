import './roleFlow.css';
import { useTranslation } from 'react-i18next';

const SettlerFlow = () => {
    const { i18n } = useTranslation();
    const [roleSelection, setRoleSelection] = useState(null);
    const languageData = settlerFlowJSON[i18n.language] || settlerFlowJSON.en;
    const { settlerFlow } = languageData;

    const backClick = (roleId) => {
    console.log('back click');
    setRoleSelection(roleId);
    };

    return (
    <div className='roleContainer'>
        <h2>Settler Flow</h2>
    </div>
    );


} 

export default SettlerFlow;