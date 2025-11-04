import React from 'react';
import { useTranslation } from 'react-i18next';
import objectivesJson from './factionsJSON.json';
import './learnobjectives.css';

const LearnObjectives = () => {
  const { t } = useTranslation();

  const objectives = objectivesJson.map(objective => ({
    title: t(`learnObjectives.${objective}.title`),
    description: t(`learnObjectives.${objective}.description`),
    crest: (`learnObjectives.${objective}.crest`)
  }));

  return (
    <div className="learn-objectives">
      <div className='objectives-header'>
        <h2>{t('learnObjectives.title')}</h2>
        <p>{t('learnObjectives.description')}</p>
      </div>
      <ul className='flexColumn center-content'>
        {objectives.map((objective, index) => (
          <li key={index}>
            <div>
              <h3>{objective.title}</h3>
              <img src={objective.crest} alt={objective.crestAlt} />
              <p>{objective.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnObjectives;
