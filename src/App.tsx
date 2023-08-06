import React from "react";
import "./App.css";
import { DemandArea, DistanceArea, UnitPriceArea } from "./Components/areas";
import { HouseDemandProvider } from "./Components/HouseDemandContext";
import Price from "./Components/Price";
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
            justifyContent: "flex-end",
            gap: "30px",
            width: "100vw",
            height: "calc(100vh - 5em)",
            padding: "20px 30px",
            boxSizing: "border-box",
          }}
        >
          <DistanceArea />
          <UnitPriceArea />
          <DemandArea />
        </div>
        <Price />
      </HouseDemandProvider>
    </ThemeProvider>
  </div>
);

export default App;
