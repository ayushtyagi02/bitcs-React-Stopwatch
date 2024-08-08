import React from 'react'

const StartButton = ({setRunning}) => {
    const startTimer = () => setRunning(true);
  return (
    <button onClick={startTimer}>Start</button>
  )
}

export default StartButton