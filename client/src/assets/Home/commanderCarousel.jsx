

import { Link } from 'react-router-dom';
import Characters from '../Info/Commanders/A_index.js';
import './commanderCarousel.css';

function Commandercarousel() {
    // Ensure we have commanders to display
    if (!Characters || Characters.length === 0) {
        return <div className="commander-carousel">No commanders available</div>;
    }

    // Split commanders into three groups for three rows
    const totalCommanders = Characters.length;
    const commandersPerRow = Math.ceil(totalCommanders / 3);
    
    const row1 = Characters.slice(0, commandersPerRow);
    const row2 = Characters.slice(commandersPerRow, commandersPerRow * 2);
    const row3 = Characters.slice(commandersPerRow * 2);
    //Above slices A_index into 3 columns. Reminder that this will need to be changed when
    //I introduce mongoDB into this.
    
    // Duplicate arrays multiple times for smooth infinite scrolling
    const duplicatedRow1 = [...row1, ...row1, ...row1];
    const duplicatedRow2 = [...row2, ...row2, ...row2];
    const duplicatedRow3 = [...row3, ...row3, ...row3];

    const renderCommanderThumbnail = (commander, index) => (
        <Link 
            to={`/Commanders/${commander.slug}`} 
            key={`${commander.slug}-${index}`}
            className="commander-thumbnail-link"
        >
            <div className="commander-thumbnail">
                <img 
                    src={commander.thumbnail} 
                    alt={commander.title}
                    onError={(e) => {
                        e.target.src = '/src/assets/img/placeholder.png';
                    }}
                />
                <div className="commander-name">{commander.title}</div>
                {/* Don't need the name really but keeping for now as it makes for a good placeholder visual */}
            </div>
        </Link>
    );

    return(
        <div className="commander-carousel">
            <div className="carousel-row scroll-left">
                <div className="carousel-content">
                    {duplicatedRow1.map((commander, index) => 
                        renderCommanderThumbnail(commander, index)
                    )}
                </div>
            </div>
            
            <div className="carousel-row scroll-right">
                <div className="carousel-content">
                    {duplicatedRow2.map((commander, index) => 
                        renderCommanderThumbnail(commander, index)
                    )}
                </div>
            </div>
            
            <div className="carousel-row scroll-left">
                <div className="carousel-content">
                    {duplicatedRow3.map((commander, index) => 
                        renderCommanderThumbnail(commander, index)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Commandercarousel;