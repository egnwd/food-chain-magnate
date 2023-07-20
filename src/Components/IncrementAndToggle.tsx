import React from "react";
import FoodChainMagnatePalette from "./ColorPalette";

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
        borderRadius: "5px",
        minWidth: "120px",
        backgroundColor: inactiveColor,
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "700",
          borderRadius: "5px 5px 0px 0px",
          padding: "5px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <button onClick={onIncrement}>▲</button>
          <span>{counter.toString()}</span>
          <button onClick={onDecrement}>▼</button>
        </div>
        <button
          onClick={onClick}
          style={{
            color: textColor,
            borderLeft: "solid 1px",
            borderColor: activeColor,
            padding: 0,
            cursor: "pointer",
            flexGrow: 1,
            backgroundColor: toggledBackgroundColor,
            borderRadius: "0px 0px 5px 0px",
          }}
        >
          1<sup>st</sup>
        </button>
      </div>
    </div>
  );
};

export default IncrementAndToggle;
