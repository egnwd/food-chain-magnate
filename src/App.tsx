import './App.css';
import UnitPriceArea from './Components/UnitPriceArea';
import DemandArea from './Components/DemandArea';
import { HouseDemandProvider } from './Components/HouseDemandContext';
import Price from './Components/Price';
import HouseArea from './Components/HouseArea';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
  },
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <HouseDemandProvider>
            <HouseArea />
            <UnitPriceArea />
            <DemandArea />
            <div style={{ height: '5em' }} />
            <Price />
          </HouseDemandProvider>
        </ThemeProvider>

      </header>
    </div>
  );
}

export default App;
