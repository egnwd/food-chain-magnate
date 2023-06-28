import React from 'react';
import './App.css';
import UnitPriceArea from './Components/UnitPriceArea';
import MilestoneArea from './Components/MilestoneArea';
import DemandArea from './Components/DemandArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UnitPriceArea />
        <MilestoneArea />
        <DemandArea />
      </header>
    </div>
  );
}

export default App;
