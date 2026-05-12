import { useTranslation } from 'react-i18next';
import './learntoplay.css';
import learnToPlay from './learntoplayJSON.json'

const PlayNow = () => {
    const { i18n } = useTranslation();
    const languageData = learnToPlay[i18n.language] || learnToPlay.en;
    const { learnObjectives, objectives } = languageData;
    const bgimg = 'https://res.cloudinary.com/dvutcekav/image/upload/v1771006889/Gemini_Generated_Image_ia2prcia2prcia2p_ihwwno.jpg';
  
    return (
        <div 
        className="downloadContainer"
        style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.16), rgba(26, 26, 26, 0.99)), url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
    }}>
            <div>
                <h2 className='l2pTitle'>Ready to claim your victory?</h2>
                <a href="https://www.hiveworkshop.com/threads/battle-of-dominance-v2-0-arcane-showdown.326630/" target="_blank" rel="noopener noreferrer">
                    <button className="playButton">PLAY NOW</button>
                </a>
            </div>
        </div>
    );
};

export default PlayNow;

