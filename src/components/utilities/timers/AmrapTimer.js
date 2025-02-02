import React, { useState, useEffect } from 'react';

function AmrapTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(10); // Default 10 minutes

  useEffect(() => {
    let interval;
    if (isRunning && time < duration * 60) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (time >= duration * 60) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time, duration]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h3>AMRAP Timer</h3>
      <div className="timer-display">
        <span className="time">{formatTime(time)}</span>
        <span className="total-time">/ {duration}:00</span>
      </div>
      <div className="timer-controls">
        <select 
          value={duration} 
          onChange={(e) => setDuration(parseInt(e.target.value))}
          disabled={isRunning}
        >
          <option value={5}>5 minutes</option>
          <option value={10}>10 minutes</option>
          <option value={15}>15 minutes</option>
          <option value={20}>20 minutes</option>
        </select>
        <button 
          className={`btn ${isRunning ? 'stop' : 'start'}`}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default AmrapTimer; 