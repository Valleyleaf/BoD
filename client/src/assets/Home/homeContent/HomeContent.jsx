import { Link } from "react-router-dom";
import GamePage from "../../Game/Game.jsx"
import Commandercarousel from "../CommanderCarousel/commanderCarousel.jsx";
import './homeContent.css';

function HomeContent(){
    return (
        <div>
            <div className="carouselContainer">
                <h2 className="heroCarouselTitle">LEGENDS ARE BORN HERE</h2>
                <div className="homeDivider"></div>
            <p>With over 60 characters to choose from, find the one that suits your playstyle and dominate the battlefield!</p>
                <Link to="/Commanders" className='pffButton'>
                    View all Heroes
                </Link>
        </div>
                <div>
                    <Commandercarousel/>
                </div>
            <div className="flexColumn center-content">
                    <h2 className='HomeTitle'>About:</h2>
                    <GamePage/>
            </div>
        </div>
    )
}

export default HomeContent;