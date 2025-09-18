import React, { useState, useRef, useEffect } from "react";
import HomeContent from "./homeContent/HomeContent.jsx";
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
    //Delay seems uneccesary considering I have the 2 second fake load at the beginning. Remove one or the other.

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
                        onError={handleVideoError}>
                        <source src="https://player.cloudinary.com/embed/?cloud_name=dvutcekav&public_id=Promo2_qvz6qi&profile=cld-default" type="video/mp4" />
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
                <HomeContent/>
        </div>
    );
}
