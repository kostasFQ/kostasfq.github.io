import React from 'react';
import Field from 'components/Field';
import { languages } from 'assets/resume.json';

import styles from './Languages.module.scss';

function Languages() {
  return (
    <div className={styles.languages}>
      <Field desc='Languages:' speed={50} />
      <ul className={styles.languages__list}>
        {
          Object.keys(languages).map(i => (
            <li  className={styles.languages__list__item} key={languages[i]}>{languages[i]}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Languages;
