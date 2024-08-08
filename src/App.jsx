import React, { useState, useEffect } from "react";
import "./App.css";
import Laps from "./components/Laps";
import StopWatchTimer from "./components/StopWatchTimer";
import StartButton from "./components/StartButton";
import StopButton from "./components/StopButton";
import ResetButton from "./components/ResetButton";
import LapButton from "./components/LapButton";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="App">
      <StopWatchTimer time={time} />
      <div className="buttons"></div>
      <StartButton setRunning={setRunning}/>
      <StopButton setRunning={setRunning}/>
      <LapButton setLaps={setLaps} running={running}/>
      <ResetButton setLaps={setLaps} setTime={setTime} running={running}/>
      <Laps laps={laps} />
    </div>
  );
}

export default App;
