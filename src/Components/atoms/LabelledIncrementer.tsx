import React from "react";
import FoodChainMagnatePalette from "../ColorPalette";
import { IIncrementable, ILabelledButton } from "./types";
import Incrementer from "./Incrementer";
import Label from "./Label";

type LabelledIncrementerProps = ILabelledButton & IIncrementable;

const LabelledIncrementer: React.FC<LabelledIncrementerProps> = ({
  label,
  counter,
  onIncrement,
  onDecrement,
  atMaximum,
  atMinimum,
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
      <Label label={label} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "5px 0",
          cursor: "pointer",
          backgroundColor: activeColor,
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
    </div>
  );
};

export default LabelledIncrementer;
