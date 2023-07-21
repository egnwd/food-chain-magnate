import React from "react";
import FoodChainMagnatePalette from "./ColorPalette";

type LabelledIncrementerProps = {
  label: string;
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
  activeColor?: string;
};

const LabelledIncrementer: React.FC<LabelledIncrementerProps> = ({
  label,
  counter,
  onIncrement,
  onDecrement,
  activeColor = FoodChainMagnatePalette.discounters,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        overflow: "hidden",
        fontWeight: 700,
        minWidth: "3em",
      }}
    >
      <div style={{ backgroundColor: "black", color: "white", padding: "5px" }}>{label}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "5px 0",
          backgroundColor: activeColor,
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
