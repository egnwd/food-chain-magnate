import React from 'react';

type NumberButtonProps = {
    label: string;
    onIncrement: () => void;
    onDecrement: () => void;
    horizontal?: boolean;
  };
  
  const NumberButton: React.FC<NumberButtonProps> = ({
    label,
    onIncrement,
    onDecrement,
    horizontal = false,
  }) => {
    const verticalCounter = (
      <div className='numberCruncher'>
        <button onClick={onIncrement}>▲</button>
        <span>{label}</span>
        <button onClick={onDecrement}>▼</button>
      </div>
    );
    const horizontalCounter = (
      <div className='numberCruncher' style={{display: 'flex', 
      flexDirection: 'row', justifyContent: 'space-between'}}>
        <button onClick={onDecrement}>◀</button>
        <span>{label}</span>
        <button onClick={onIncrement}>▶</button>
      </div>
    );
    return horizontal ? horizontalCounter : verticalCounter;
  };
  

export default NumberButton;
