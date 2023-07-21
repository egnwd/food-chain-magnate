import React from "react";
import FoodChainMagnatePalette from "../ColorPalette";

type NumberButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
  activeColor?: string;
};

const IncrementAndToggle: React.FC<NumberButtonProps> = ({
  label,
  active,
  onClick,
  counter,
  onIncrement,
  onDecrement,
  activeColor = FoodChainMagnatePalette.defaultActive,
}) => {
  const inactiveColor = FoodChainMagnatePalette.defaultInactive;
  const toggledBackgroundColor = active ? activeColor : inactiveColor;
  const textColor = FoodChainMagnatePalette.defaultText;
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
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "700",
          padding: "5px 0",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: activeColor,
          alignItems: "center",
          padding: "5px",
          borderBottom: "2px solid rgba(0, 0, 0, 0.4)",
        }}
      >
        <button onClick={onDecrement}>◀</button>
        <span>{counter.toString()}</span>
        <button onClick={onIncrement}>▶</button>
      </div>
      <button
        onClick={onClick}
        style={{
          color: textColor,
          borderColor: inactiveColor,
          padding: "5px 0",
          cursor: "pointer",
          flexGrow: 1,
          backgroundColor: toggledBackgroundColor,
        }}
      >
        Bonus
      </button>
    </div>
  );
};

export default IncrementAndToggle;
