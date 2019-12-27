import React from 'react';
import Header from 'components/Header';
import Contacts from 'components/Contacts';
import Education from 'components/Education';
import Experience from 'components/Experience';
import Skills from 'components/Skills';
import Languages from 'components/Languages';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
        <Header />
        <Contacts />
        <Education />
        <Experience />
        <Skills />
        <Languages />
      </div>
    </div>
  );
}

export default App;
