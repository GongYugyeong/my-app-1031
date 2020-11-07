import React, {useEffect, useRef, useState} from "react";
import {useInterval} from "../hooks/useInterval";

function Stopwatch(props) {
  let tickRef;
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useInterval(() => {
    if(isRunning){
      setTimer(timer + 1);
    }
  }, 1000);

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