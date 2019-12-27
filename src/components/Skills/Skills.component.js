import React from 'react';
import Field from 'components/Field';
import { skills } from 'assets/resume.json';

import styles from './Skills.module.scss';

function Skills() {
  return (
    <div className={styles.skills}>
      <Field desc='Skills:' speed={100} />
      <ul className={styles.skills__list}>
        {
          Object.keys(skills).map(item => (
            <li key={skills[item]} className={styles.skills__list__item}>{skills[item]}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Skills;
