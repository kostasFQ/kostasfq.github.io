import React, { forwardRef, useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

const Input = forwardRef( (props, ref) => {
  const [isHide, setHide] = useState(false);
  const [isFocused, setFocus] = useState(false);

  useEffect( () => {
    if (isFocused) {
      const blink = setInterval( () => {
        setHide(!isHide);
      }, 500 )
      return () => { clearInterval(blink) };
    }
  }, [isHide, isFocused] );

  const blurred = () => { setFocus(false) }

  const focused = () => {
    setFocus(true);
    setHide(false);
  }

  return (
    <div className={styles.input}>
      <div className={styles.cmd}>
        <span>{props.value}</span>
        <div className={cn(styles.cursor, { [styles.cursor__inactive]: !isFocused, [styles.cursor__hide]: isHide && isFocused } )}></div>
      </div>
      <input
        onChange={props.onChange}
        value={props.value}
        className={styles.input__line}
        ref={ref}
        autoFocus
        onBlur={blurred}
        onFocus={focused}
        spellCheck="false"
      />
    </div>
  )
});

export default Input;
