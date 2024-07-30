import React, { useState, useEffect } from 'react';
import './App.css';
// import StartButton from './StartButton';
// import LapButton from './LapButton';
// import ResetButton from './ResetButton';
// import StopButton from './StopButton';
import Laps from './components/Laps';
import StopWatchTimer from './components/StopWatchTimer';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const startTimer = () => setRunning(true);

  const stopTimer = () => setRunning(false);

  const resetTimer = () => {
    if (!running) {
      setTime(0);
      setLaps([]);
    }
  };

  const lapTimer = () => {
    if (running) {
      setLaps([...laps, time]);
    }
  };

  return (
    <div className="App">
      <StopWatchTimer time={time} />
      <div className="buttons">
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={lapTimer}>Lap</button>
      <button onClick={resetTimer} disabled={running}>Reset</button>
      </div>
      <Laps laps={laps} />
    </div>
  );
}

export default App;
