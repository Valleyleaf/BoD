import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import objectivesJson from './objectivesJSON.json';
import './learnobjectives.css';

const LearnObjectives = () => {
  const videoRef = useRef(null);
  const { i18n } = useTranslation();
  const [videoError, setVideoError] = useState(false);
  const languageData = objectivesJson[i18n.language] || objectivesJson.en;
  const { learnObjectives, objectives } = languageData;
  const handleVideoError = (e) => {
      console.error('Video error:', e);
      setVideoError(true);
  };

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

  return (
    <div className="learn-objectives">
      <div className="objectives-header">
        <h2>{learnObjectives.title}</h2>
        <p>{learnObjectives.description}</p>
      </div>
      <div className="flexColumn center-content">
        {objectives.map((objective, index) => (
          <div className="flexRow center-content" key={index}>
            <div>
              <h2>{objective.title}</h2>
              <p>{objective.description}</p>
            </div>
            {/* <div>
              {!videoError ? (
                    <video 
                        ref={videoRef}
                        className="objectiveVideo"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        onError={handleVideoError}>
                        <source src={objective.video} type="video/mp4" />
                    </video>
                ) : (
                    <div className="video-fallback">
                        <p>Video could not be loaded</p>
                    </div>
                )}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnObjectives;
