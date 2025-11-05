import React from 'react';
import LearnRoles from './learnRoles/LearnRoles.jsx';
import LearnFactions from './learnFactions/LearnFactions.jsx';
import LearnIsland from './learnIsland/LearnIsland.jsx';
import LearnObjectives from './learnObjectives/LearnObjectives.jsx';
import learnToPlay from './learntoplayJSON.json'
import { useTranslation } from 'react-i18next';
import './learntoplay.css';

const LearnToPlay = () => {
  const { i18n } = useTranslation();

  const languageData = learnToPlay[i18n.language] || learnToPlay.en;
  const { learnToPlay: { title, description } } = languageData;

  return (
    <div className="learn-to-play">
        <h2>{title}</h2>
        <p>{description}</p>
        {LearnRoles()}
        {LearnFactions()}
        {/* {LearnIsland()}
        {LearnObjectives()} */}
    </div>
  );
};

export default LearnToPlay;
