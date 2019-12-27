import React from 'react';
import Field from 'components/Field';
import { about } from 'assets/resume.json';

import styles from './About.module.scss';

function Languages() {
  return (
    <div className={styles.about}>
      <Field desc='About me:' speed={100} />
      <div className={styles.about__container}>
        <Field desc={about} speed={10} />
      </div>
    </div>
  );
}

export default Languages;
