import React from 'react';
import Field from 'components/Field';
import Icon from 'components/Icons';
import { contacts, socials } from 'assets/resume.json';

import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Field desc='Contacts:' speed={100}/>
      <div className={styles.contacts__container}>
        <ul className={styles.contacts__container__list}>
          {
            Object.keys(contacts).map(i => (
              <li className={styles.contacts__container__list__item} key={i}>
                <Icon type={i} /><Field desc={contacts[i]} speed={100} />
              </li>
              )
            )
          }
        </ul>
        <div className={styles.contacts__container__socials}>
          <a href={socials.github} target='blank' className={styles.contacts__container__socials__item}>
            <Icon type='github' />
          </a>
          <a href={socials.linkedin} target='blank' className={styles.contacts__container__socials__item}>
            <Icon type='linkedIn' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
