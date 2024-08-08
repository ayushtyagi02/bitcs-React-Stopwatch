import React from 'react'

const StopButton = ({setRunning}) => {
    
  const stopTimer = () => setRunning(false);
  return (
      <button onClick={stopTimer}>Stop</button>
      
  )
}

export default StopButton