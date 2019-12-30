import React from 'react';
import Field from 'components/Field';

import { commands } from 'UIcommands';
import styles from './CommandsList.module.scss';

function CommandList() {

  return (
    <div className={styles.commands}>
      <ul>
        {
          Object.keys(commands).map(i => (
            <li key={i}><Field desc={i} /></li>
          ))
        }
      </ul>
    </div>
  );
}

export default CommandList;
