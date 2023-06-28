import React from 'react';
import './App.css';
import UnitPriceArea from './Components/UnitPriceArea';
import MilestoneArea from './Components/MilestoneArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UnitPriceArea />
        <MilestoneArea />
      </header>
    </div>
  );
}

export default App;
