import React from 'react';

const Laps = ({ laps }) => {
  return (
    <div className="laps">
      {laps.map((lap, index) => (
        <div key={index} className="lap">
          Lap {index + 1}: {`0${Math.floor(lap / 3600000)}`.slice(-2)}:
          {`0${Math.floor((lap / 60000) % 60)}`.slice(-2)}:
          {`0${Math.floor((lap / 1000) % 60)}`.slice(-2)}.
          {`0${(lap % 1000) / 10}`.slice(-2)}
        </div>
      ))}
    </div>
  );
};

export default Laps;
