import React from "react";
import FoodChainMagnatePalette from "../ColorPalette";
import { IIncrementable, IToggleable, ILabelledButton } from "./types";
import Incrementer from "./Incrementer";
import ToggleButton from "./ToggleButton";
import Label from "./Label";

type NumberButtonProps = ILabelledButton & IIncrementable & IToggleable;

const IncrementAndToggle: React.FC<NumberButtonProps> = ({
  label,
  active,
  onClick,
  counter,
  atMaximum,
  atMinimum,
  onIncrement,
  onDecrement,
  activeColor = FoodChainMagnatePalette.defaultActive,
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
      <Label label={label} />
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
        <Incrementer
          counter={counter}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          atMaximum={atMaximum}
          atMinimum={atMinimum}
        />
      </div>
      <ToggleButton label="Bonus" onClick={onClick} activeColor={activeColor} active={active} rounded={false} />
    </div>
  );
};

export default IncrementAndToggle;
