import React from 'react';
import Header from 'components/Header';
import Contacts from 'components/Contacts';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
        <Header />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
