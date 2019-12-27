import React from 'react';
import Field from 'components/Field';
import { contacts } from 'assets/resume.json';

import styles from './Contacts.module.scss';

import Icon from 'components/Icons';
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
          <a href='https://github.com/kostasFQ' target='blank' className={styles.contacts__container__socials__item}>
          <Icon type='github' />
          </a>
          <a href='https://www.linkedin.com/in/kanstantsin-asipenka-7b140611b/' target='blank' className={styles.contacts__container__socials__item}>
            <Icon type='linkedIn' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
