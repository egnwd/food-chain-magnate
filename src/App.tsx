import React from "react";
import "./App.css";
import UnitPriceArea from "./Components/UnitPriceArea";
import DemandArea from "./Components/DemandArea";
import { HouseDemandProvider } from "./Components/HouseDemandContext";
import Price from "./Components/Price";
import RevenueBonusArea from "./Components/RevenueBonusArea";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          boxSizing: "content-box",
          padding: 3,
          fontSize: "1.125rem",
        },
      },
    },
  },
});

const App: React.FC = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <HouseDemandProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100vw",
            height: "calc(100vh - 5em)",
            padding: "20px 30px",
            boxSizing: "border-box",
          }}
        >
          <UnitPriceArea />
          <DemandArea />
          <RevenueBonusArea />
        </div>
        <Price />
      </HouseDemandProvider>
    </ThemeProvider>
  </div>
);

export default App;
