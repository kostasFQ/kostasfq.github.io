import React from 'react';
import Field from 'components/Field';
import { contacts } from 'assets/resume.json';

import styles from './Contacts.module.scss';

import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as Linked } from 'assets/icons/linked.svg';

const Contacts = () => {
  
  return (
    <div className={styles.contacts__container}>
      Contacts:
      <ul className={styles.contacts__container__list}>
        {
          Object.keys(contacts).map(i => (
            <li className={styles.contacts__container__list__item} key={i}>
              <Field name={i} desc={contacts[i]} speed={100} />
            </li>
            )
          )
        }
      </ul>
      <div className={styles.contacts__container__socials}>
        <a href='https://github.com/kostasFQ' target='blank' width={12} className={styles.contacts__container__socials__item}><Github /></a>
        <a href='https://www.linkedin.com/in/kanstantsin-asipenka-7b140611b/' target='blank' className={styles.contacts__container__socials__item}><Linked /></a>
      </div>
    </div>
  )
}

export default Contacts;
