import React from "react";
import { IIncrementable } from "./types";

const enabled = {};
const disabled = { opacity: 0.6 };

const Incrementer: React.FC<IIncrementable> = ({ counter, atMaximum, atMinimum, onDecrement, onIncrement }) => {
  const isAtMinimum = atMinimum ? atMinimum(counter) : false;
  const isAtMaximum = atMaximum ? atMaximum(counter) : false;

  return (
    <>
      <button style={isAtMinimum ? disabled : enabled} onClick={isAtMinimum ? undefined : onDecrement}>
        ◀
      </button>
      <span>{counter.toString()}</span>
      <button style={isAtMaximum ? disabled : enabled} onClick={isAtMaximum ? undefined : onIncrement}>
        ▶
      </button>
    </>
  );
};

export default Incrementer;
