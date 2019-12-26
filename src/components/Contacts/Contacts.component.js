import React, { Fragment } from 'react';
import Field from 'components/Field';
import styles from './Contacts.module.scss';

const Contacts = ({ contacts }) => {
  
  return (
    <Fragment>
      Contacts:
        {
          Object.keys(contacts).map( i => <Field name={i} desc={contacts[i]} speed={100} className={styles.item} key={i}/>)
        }
    </Fragment>
  )
}

export default Contacts;
