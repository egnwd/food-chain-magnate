import React, { ReactNode } from "react";
import FoodChainMagnatePalette from "./ColorPalette";

type NumberButtonProps = {
  label: ReactNode;
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const LabelledIncrementer: React.FC<NumberButtonProps> = ({ label, counter, onIncrement, onDecrement }) => {
  return (
    <div
      className="numberCruncher"
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "120px",
        backgroundColor: FoodChainMagnatePalette.discounters,
      }}
    >
      <div style={{ backgroundColor: "black", color: "white", borderRadius: "5px 5px 0px 0px" }}>{label}</div>
      <div
        className="counter"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <button onClick={onDecrement}>◀</button>
        <span>{counter.toString()}</span>
        <button onClick={onIncrement}>▶</button>
      </div>
    </div>
  );
};

export default LabelledIncrementer;
