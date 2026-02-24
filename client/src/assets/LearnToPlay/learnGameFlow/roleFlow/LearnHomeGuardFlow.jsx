import './roleFlow.css';
import { useTranslation } from 'react-i18next';

const HomeGuardFlow = () => {
    const { i18n } = useTranslation();
    const [roleSelection, setRoleSelection] = useState(null);
    const languageData = homeGuardFlowJSON[i18n.language] || homeGuardFlowJSON.en;
    const { homeGuardFlow } = languageData;

    const backClick = (roleId) => {
    console.log('back click');
    setRoleSelection(roleId);
    };

    return (
    <div className='roleContainer'>
        <h2>HomeGuard Flow</h2>
    </div>
    );


} 

export default HomeGuardFlow;