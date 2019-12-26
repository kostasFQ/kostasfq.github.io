import React from 'react';
import Field from 'components/Field';
import styles from 'components/Header/Header.module.scss';
import data from 'assets/resume.json';

const Header = () => {
  const { name, position, summary } = data;

  return (
    <div className={styles.header}>
      <Field desc={name} speed={50} className={styles.header__title} />
      <Field name='Position' desc={position} speed={100} className={styles.header__description} />
      <Field name='Summary' desc={summary} speed={10} className={styles.header__summary} />
    </div>
  )
}

export default Header;
