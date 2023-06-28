import React from 'react';

type NumberButtonProps = {
    label: string;
    onIncrement: () => void;
    onDecrement: () => void;
  };
  
  const NumberButton: React.FC<NumberButtonProps> = ({
    label,
    onIncrement,
    onDecrement,
  }) => {
    return (
      <div>
        <div>
          <button onClick={onIncrement}>▲</button>
          <span>{label}</span>
          <button onClick={onDecrement}>▼</button>
        </div>
      </div>
    );
  };
  

export default NumberButton;
