import React from 'react';
import Field from 'components/Field';
import { experience } from 'assets/resume.json';

import styles from './Experience.module.scss';

function Experience() {
  return (
    <div className={styles.experience}>
      <Field desc='Work experience:' speed={100}/>
      <ul className={styles.experience__list}>
        {
          Object.keys(experience).map( (i, index) => (
            <li key={`${experience[i].organization}${index}`} className={styles.experience__list__item}>
              <Field desc={experience[i].organization} speed={100} />
              <Field name='Position' desc={experience[i].position} speed={100} />
              <Field desc={experience[i].period} speed={100} className={styles.experience__list__item_small}/>
              <Field desc={experience[i].location} speed={100} />
              <Field name='About project' desc={experience[i].description} speed={100} />
              <Field desc='Responsibility:' speed={100} />
              <ul className={styles.experience__list__item__sublist}>
                {
                  Object.keys(experience[i].responsibility).map((res, index) => (
                    <li key={index} className={styles.experience__list__item_small}>
                      <Field desc={experience[i].responsibility[res]} speed={50} />
                    </li>
                  ))
                }
              </ul>
              <Field name='Stack' desc={experience[i].stack} speed={50} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Experience;
