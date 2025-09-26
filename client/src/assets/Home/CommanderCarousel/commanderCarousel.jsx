
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import commanderService from '../../../services/commanderService.js';
import Loading from '../../Loading/Loading.jsx'
import './commanderCarousel.css';


function Commandercarousel() {
// Break out below to seperate service. Used here and in Commanders.
  const [commanders, setCommanders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommanders = async () => {
      try {
        const data = await commanderService.getAllCommanders();
        setCommanders(data);
      } catch (err) {
        setError('Failed to load commanders');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCommanders();
  }, []);

    if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div className="commander-carousel">{error}</div>;
  }
    // Ensure we have commanders to display
    if (!commanders || commanders.length === 0) {
        return <div className="commander-carousel">No commanders available</div>;
    }

    // Split commanders into three groups for three rows
    const totalCommanders = commanders.length;
    const commandersPerRow = Math.ceil(totalCommanders / 3);
    
    const row1 = commanders.slice(0, commandersPerRow);
    const row2 = commanders.slice(commandersPerRow, commandersPerRow * 2);
    const row3 = commanders.slice(commandersPerRow * 2);
    
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