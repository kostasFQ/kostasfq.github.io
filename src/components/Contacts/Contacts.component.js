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
                <Icon type={i} className={styles.contacts__container__icon} /><Field desc={contacts[i]} speed={100} />
              </li>
              )
            )
          }
        </ul>
        <div className={styles.contacts__container__socials}>
          <a href={socials.gitHub} target='blank' className={styles.contacts__container__socials__item}>
            <Icon type='gitHub' className={styles.contacts__container__icon} height='48px' width='48px'/>
          </a>
          <a href={socials.linkedIn} target='blank' className={styles.contacts__container__socials__item}>
            <Icon type='linkedIn' className={styles.contacts__container__icon} height='48px' width='48px'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
