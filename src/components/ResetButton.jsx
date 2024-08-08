import React from 'react'

const ResetButton = ({setTime,setLaps,running}) => {
    const resetTimer = () => {
        if (!running) {
          setTime(0);
          setLaps([]);
        }
      };
  return (
    <button onClick={resetTimer} disabled={running}>Reset</button>
  )
}

export default ResetButton