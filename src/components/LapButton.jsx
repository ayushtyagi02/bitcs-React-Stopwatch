import React from "react";

const LapButton = ({setLaps,running}) => {
  const lapTimer = () => {
    if (running) {
      setLaps([...laps, time]);
    }
  };
  return  <button onClick={lapTimer}>Lap</button>
  ;
};

export default LapButton;
