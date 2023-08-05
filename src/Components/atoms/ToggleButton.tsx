import React from "react";
import FoodChainMagnatePalette from "../ColorPalette";
import { ILabelledButton, IToggleable } from "./types";

type ToggleButtonProps = { rounded?: boolean } & ILabelledButton & IToggleable;

const ToggleButton: React.FC<ToggleButtonProps> = ({
  label,
  active,
  onClick,
  activeColor = FoodChainMagnatePalette.defaultActive,
  rounded = true,
}) => {
  const inactiveColor = FoodChainMagnatePalette.defaultInactive;
  const textColor = FoodChainMagnatePalette.defaultText;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: active ? activeColor : inactiveColor,
        color: textColor,
        margin: 0,
        fontWeight: 700,
        flexGrow: 1,
        border: "none",
        cursor: "pointer",
        padding: "5px",
        borderRadius: rounded ? "5px" : "0",
      }}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
