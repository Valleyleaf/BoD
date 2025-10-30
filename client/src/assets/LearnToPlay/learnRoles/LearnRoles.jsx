import './learntoplay.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import rolesJson from './rolesJSON.json';

const LearnRoles = () => {
  const { t } = useTranslation();

  const roles = rolesJson.map(role => ({
    title: t(`learnRoles.${role}.title`),
    description: t(`learnRoles.${role}.description`),
    crest: (`learnRoles.${role}.crest`)
  }));

  return (
    <div className="learn-roles">
      <div className='roles-header'>
        <h2>{t('learnRoles.title')}</h2>
        <p>{t('learnRoles.description')}</p>
      </div>
      <ul className='flexColumn center-content'>
        {roles.map((role, index) => (
          <li key={index}>
            <div>
              <h3>{role.title}</h3>
              <img src={role.crest} alt="" />
              <p>{role.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnRoles;
