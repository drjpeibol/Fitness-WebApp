import React, { useState, useEffect } from 'react';

function EmomTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [rounds, setRounds] = useState(10);
  const [currentRound, setCurrentRound] = useState(1);
  const [interval, setInterval] = useState(1); // Minutes per round (1 = EMOM, 2 = E2MOM, etc.)

  useEffect(() => {
    let timer;
    if (isRunning && currentRound <= rounds) {
      timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime >= interval * 60 - 1) {
            setCurrentRound(prev => prev + 1);
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    } else if (currentRound > rounds) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, currentRound, rounds, interval]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setTime(0);
    setCurrentRound(1);
    setIsRunning(false);
  };

  const getIntervalLabel = (mins) => {
    if (mins === 1) return 'EMOM';
    return `E${mins}MOM`;
  };

  return (
    <div className="timer-container">
      <h3>{getIntervalLabel(interval)} Timer</h3>
      <div className="timer-display">
        <span className="time">{formatTime(time)}</span>
        <span className="round">Round {currentRound}/{rounds}</span>
      </div>
      <div className="timer-controls">
        <div className="timer-settings">
          <div className="setting-group">
            <label>Interval:</label>
            <select 
              value={interval} 
              onChange={(e) => setInterval(parseInt(e.target.value))}
              disabled={isRunning}
              className="interval-select"
            >
              <option value={1}>Every 1 min</option>
              <option value={2}>Every 2 min</option>
              <option value={3}>Every 3 min</option>
              <option value={4}>Every 4 min</option>
              <option value={5}>Every 5 min</option>
            </select>
          </div>
          <div className="setting-group">
            <label>Rounds:</label>
            <select 
              value={rounds} 
              onChange={(e) => setRounds(parseInt(e.target.value))}
              disabled={isRunning}
            >
              <option value={5}>5 rounds</option>
              <option value={10}>10 rounds</option>
              <option value={15}>15 rounds</option>
              <option value={20}>20 rounds</option>
            </select>
          </div>
        </div>
        <div className="timer-buttons">
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
    </div>
  );
}

export default EmomTimer; 