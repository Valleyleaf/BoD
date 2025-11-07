import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import objectivesJson from './objectivesJSON.json';
import './learnobjectives.css';

const LearnObjectives = () => {
  const { i18n } = useTranslation();
  const [videoError, setVideoError] = useState(false);
  const languageData = objectivesJson[i18n.language] || objectivesJson.en;
  const { learnObjectives, objectives } = languageData;
  const tempVideo = "https://res.cloudinary.com/dvutcekav/video/upload/v1758154917/Promo2_qvz6qi.mp4"
  const handleVideoError = (e) => {
      console.error('Video error:', e);
      setVideoError(true);
  };

  return (
    <div className="learn-objectives">
      <div className="objectives-header">
        <h2>{learnObjectives.title}</h2>
        <p>{learnObjectives.description}</p>
      </div>
      <ul className="flexColumn center-content">
        {objectives.map((objective, index) => (
          <li key={index}>
            <div>
              <h3>{objective.title}</h3>
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
                        <source src={tempVideo} type="video/mp4" />
                    </video>
                ) : (
                    <div className="video-fallback">
                        <p>Video could not be loaded</p>
                    </div>
                )}
              <p>{objective.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnObjectives;
