import React, { useState } from 'react';
import { commands } from 'UIcommands';
import Field from 'components/Field';
import CommandsList from 'components/CommandsList';
import Input from 'components/Input';

import styles from './Footer.module.scss';

function Footer() {
  const [command, setCommand] = useState('');
  const [error, setError] = useState('');
  const [click, setClickValue] = useState(false);
  const ref = React.createRef();

  const clickOnFooter = () => {
    ref.current.focus();
    setClickValue(true);
  }

  const setCommandValue = (e) => { setCommand(e.target.value) }

  const keyPress = (e) => {
    const { key } = e;
    const currentCommand = commands[command];

    if (key === 'Enter') {
      if (!!currentCommand) {
        currentCommand();
        setCommand('');
        setError('');
      } else {
        command === '' ?
          setError('') :
          setError(`### Error: command '${command}' not found.`);
      }
    }
  }

  return (
    <div className={styles.footer} onKeyPress={keyPress} onClick={clickOnFooter}>
      <Field desc='For contacts to me or watching my profiles you can use this available commands:' />
      <CommandsList />
      <Input onChange={setCommandValue} value={command} ref={ref} click={click}/>
      {error === '' ? '' : <div className={styles.footer__error}>{error}</div>}
    </div>
  );
}

export default Footer;
