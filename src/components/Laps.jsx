import React from 'react';
import { formatTime } from './StopWatchTimer';

const Laps = ({ laps }) => {
  return (
    <div className="laps">
      {laps.map((lap, index) => (
        <div key={index} className="lap">
          Lap {index + 1}: {formatTime(lap)}
        </div>
      ))}
    </div>
  );
};

export default Laps;
