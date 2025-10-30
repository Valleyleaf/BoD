import './learntoplay.scss';
import React from 'react';
import LearnRoles from './learnRoles/LearnRoles.jsx';
import { useTranslation } from 'react-i18next';

const LearnToPlay = () => {
  const { t } = useTranslation();

  return (
    <div className="learn-to-play">
        <h2>{t('learnToPlay.title')}</h2>
        {LearnRoles()}
        {/* {LearnFactions()}
        {LearnIsland()}
        {LearnObjectives()} */}
    </div>
  );
};

export default LearnToPlay;
