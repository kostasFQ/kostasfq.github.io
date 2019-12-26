import React, { useState, useEffect } from 'react';

const Field = ({name = '', desc, speed, delay, className}) => {
  const [string, setString] = useState('');
  const [i, setI] = useState(0);

  useEffect(() => {
    if (string.length === desc.length) return;
    
    const intervalId = setInterval(() => {
      setString(string + desc[i]);
      setI(i + 1)
    }, speed);

    return () => { clearInterval(intervalId) };

  }, [string, i, desc, speed]);
  
  return (
    <div className={className}>
      {name !== '' ? `${name}: ` : ''} {string}
    </div>
  )
}

export default Field;