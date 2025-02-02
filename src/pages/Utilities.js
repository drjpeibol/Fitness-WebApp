import React, { useState } from 'react';
import AmrapTimer from '../components/utilities/timers/AmrapTimer';
import EmomTimer from '../components/utilities/timers/EmomTimer';
import WodGenerator from '../components/utilities/WodGenerator';

function Utilities() {
  const [activeTab, setActiveTab] = useState('amrap');

  return (
    <div className="utilities-container">
      <h1>Training Utilities</h1>
      <div className="utilities-tabs">
        <button 
          className={`tab-btn ${activeTab === 'amrap' ? 'active' : ''}`}
          onClick={() => setActiveTab('amrap')}
        >
          AMRAP Timer
        </button>
        <button 
          className={`tab-btn ${activeTab === 'emom' ? 'active' : ''}`}
          onClick={() => setActiveTab('emom')}
        >
          EMOM Timer
        </button>
        <button 
          className={`tab-btn ${activeTab === 'generator' ? 'active' : ''}`}
          onClick={() => setActiveTab('generator')}
        >
          WOD Generator
        </button>
      </div>
      <div className="utilities-content">
        {activeTab === 'amrap' && <AmrapTimer />}
        {activeTab === 'emom' && <EmomTimer />}
        {activeTab === 'generator' && <WodGenerator />}
      </div>
    </div>
  );
}

export default Utilities; 