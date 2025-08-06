import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import GamePage from "../Game/Game.jsx"
import Commandercarousel from "./commanderCarousel.jsx";
import "./home.css";


export default function Home() {
    const videoRef = useRef(null);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        
        if (video) {
            // Add a small delay to ensure the video is loaded
            setTimeout(() => {
                const playPromise = video.play();
                
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log('Video is playing successfully');
                        })
                        .catch(error => {
                            console.log('Autoplay failed:', error);
                            // Try again after user interaction
                            document.addEventListener('click', () => {
                                video.play().catch(e => console.log('Manual play failed:', e));
                            }, { once: true });
                        });
                }
            }, 1000);
        }
    }, []);

    const handleVideoError = (e) => {
        console.error('Video error:', e);
        setVideoError(true);
    };

    return (
        <div className="flexColumn">
            <div className="hero-section">
                {!videoError ? (
                    <video 
                        ref={videoRef}
                        className="background-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        onError={handleVideoError}
                        onLoadStart={() => console.log('Video loading started')}
                        onCanPlay={() => console.log('Video can play')}
                        onPlay={() => console.log('Video started playing')}
                        onPause={() => console.log('Video paused')}>
                        <source src="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" type="video/webm" />
                        <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div className="video-fallback">
                        <p>Video could not be loaded</p>
                    </div>
                )}
                <div className="hero-content">
                    <h2 className='HomeTitle'>Welcome to Battle of Dominance</h2>
                    <div className="homeDivider"></div>
                    <p>A custom MOBA-style map for WARCRAFT III, 15 years in development.</p>
                    <a href="https://www.hiveworkshop.com/threads/battle-of-dominance-v2-0-arcane-showdown.326630/" target="_blank" rel="noopener noreferrer">
                        <button className="pffButton">Play for free with Warcraft III</button>
                    </a>
                </div>
            </div>
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
    );
}