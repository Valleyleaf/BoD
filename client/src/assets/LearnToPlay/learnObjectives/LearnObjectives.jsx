import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import objectivesJson from './objectivesJSON.json';
import './learnobjectives.css';
import Error from "../../Error/Error";

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
        <h2 className="objectives-header">{learnObjectives.title}</h2>
      <div className="objectiveContainer">
        {objectives.map((objective, index) => (
          <div 
          className="objectiveTextContainer" 
          key={index}
          style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.73), rgba(3, 3, 3, 0.99)), url(${objective.sampleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
          }}
          >
              <div className="objectiveContent">
                <div>
                  <h2 className="objectiveTitle">{objective.title}</h2>
                    <div>
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
                              <source src={objective.sampleVideo} type="video/mp4" />
                          </video>
                      ) : (
                          <div className="objectiveVideo">
                              <p>Video could not be loaded</p>
                          </div>
                      )}
                  </div>
                  <p className="objectiveDisc">{objective.description}</p>
                </div>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnObjectives;

// There is an issue here where if one video fails to load, they all go into the ):( else state.