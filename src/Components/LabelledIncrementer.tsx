import React, { ReactNode } from "react";
import FoodChainMagnatePalette from "./ColorPalette";

type NumberButtonProps = {
  label: ReactNode;
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
  activeColor?: string;
};

const LabelledIncrementer: React.FC<NumberButtonProps> = ({
  label,
  counter,
  onIncrement,
  onDecrement,
  activeColor = FoodChainMagnatePalette.discounters,
}) => {
  return (
    <div
      className="numberCruncher"
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "120px",
        backgroundColor: activeColor,
      }}
    >
      <div style={{ backgroundColor: "black", color: "white", borderRadius: "5px 5px 0px 0px", padding: "5px" }}>
        {label}
      </div>

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
