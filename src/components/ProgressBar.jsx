import React, {useEffect, useState} from 'react'


function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect( () => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime-10);
    },10);

    return () => {
      console.log('Cleaning up setInterval');
      clearInterval(interval);
    };
  },[]);
  
  return (
      <progress value={remainingTime} max={timer} />
  )
}

export default ProgressBar;




  