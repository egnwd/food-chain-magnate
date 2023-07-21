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
        display: "grid",
        gridTemplateRows: "3fr",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "700",
          padding: "5px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: activeColor,
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
          padding: "10px 0",
          cursor: "pointer",
          flexGrow: 1,
          backgroundColor: toggledBackgroundColor,
          borderRadius: "0px 0px 5px 5px",
        }}
      >
        Bonus
      </button>
    </div>
  );
};

export default IncrementAndToggle;
