import React, {createContext} from 'react';
import './App.css';
import UnitPriceArea from './Components/UnitPriceArea';
import MilestoneArea from './Components/MilestoneArea';
import DemandArea from './Components/DemandArea';
import { HouseDemandProvider } from './Components/HouseDemandContext';
import Price from './Components/Price';
import HouseArea from './Components/HouseArea';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HouseDemandProvider>
          <HouseArea />
          <UnitPriceArea />
          <MilestoneArea />
          <DemandArea />
          <Price />
        </HouseDemandProvider>
      </header>
    </div>
  );
}

export default App;
