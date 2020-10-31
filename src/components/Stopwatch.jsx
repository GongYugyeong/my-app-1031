import React, {useEffect, useState} from "react";

function Stopwatch(props) {
  let tickRef;
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const tick = () => {
    if (isRunning){
      setTimer(timer + 1);
    }
  }

  useEffect(() => {
    tickRef = setInterval((tick), 1000);
    return () => {
      clearInterval(tickRef);
    }
  })


  const getButton = () => {
    if(isRunning){
      return (
        <button onClick={() => setIsRunning(!isRunning)}>Stop</button>
      );
    }else{
      return (
        <button onClick={() => setIsRunning(!isRunning)}>Start</button>
      );
    }
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{timer}</span>
      {
        getButton()
      }
      <button>Reset</button>
    </div>
  );
}

export default Stopwatch;