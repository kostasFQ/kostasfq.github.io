import React, { useState, useEffect } from 'react';

const Field = ({name = '', desc, speed, className}) => {
  const [string, setString] = useState('');
  const [i, setI] = useState(0);
  const fullDesc = name !== '' ? `${name}: ${desc}` : desc ;

  useEffect(() => {
    if (!desc || string.length === fullDesc.length) return;
    
    const intervalId = setInterval(() => {
      setString(string + fullDesc[i]);
      setI(i + 1)
    }, speed);

    return () => { clearInterval(intervalId) };

  }, [string, i, fullDesc, speed, desc]);
  
  return (
    <div className={className}>
      {string}
    </div>
  )
}

export default Field;