import React, {useEffect, useRef, useState} from "react";

function Stopwatch(props) {
  let tickRef;
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const refIsRunning = useRef(false);

  const tick = () => {
    //console.log(refIsRunning.current, timer)
    if (refIsRunning.current){
      setTimer(timer => timer + 1);
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
      refIsRunning.current = true;
      return (
        <button onClick={() => setIsRunning(!isRunning)}>Stop</button>
      );
    }else{
      refIsRunning.current = false;
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