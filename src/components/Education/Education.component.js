import React from 'react';
import Field from 'components/Field';
import { education } from 'assets/resume.json';
import styles from './Education.module.scss';

function Education() {
  return (
    <div className={styles.education}>
      <Field desc='Education:' speed={100}/>
      <div className={styles.education__container}>
        <Field desc={education.university} speed={50} />
        <Field desc={education.profession} speed={100} />
        <Field desc={education.period} speed={200} />
      </div>
    </div>
  );
}

export default Education;
