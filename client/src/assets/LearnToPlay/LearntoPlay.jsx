import React from 'react';
import LearnRoles from './learnRoles/LearnRoles.jsx';
import LearnFactions from './learnFactions/LearnFactions.jsx';
import LearnObjectives from './learnObjectives/LearnObjectives.jsx';
import learnToPlay from './learntoplayJSON.json'
import LearnGameFlow from './learnGameFlow/LearnGameFlow.jsx';
import PlayNow from './PlayNow.jsx';
import { useTranslation } from 'react-i18next';
import './learntoplay.css';

const LearnToPlay = () => {
  const { i18n } = useTranslation();

  const languageData = learnToPlay[i18n.language] || learnToPlay.en;
  const {
    learnToPlay: { title, description },
  } = languageData;

  const topics = [
    LearnRoles,
    LearnFactions,
    LearnObjectives,
    // LearnGameFlow
    PlayNow
  ];

  return (
    <div className="learn-to-play">
      <h2 className='l2pTitle'>{title}</h2>
        <div className="homeDivider"></div>
      <p>{description}</p>
      {topics.map((Topic, index) => (
        <div className='TopicContainer' key={index}>
          <Topic/>
        </div>
      ))}
    </div>
  );
};

export default LearnToPlay;

//Note. I am duplicating a lot of code with these different components. Pretty sure I could run it all down to a single componenet. Though this might compromise some flexability and readability.
