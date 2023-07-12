import React from 'react';

type NumberButtonProps = {
    label: string;
    onIncrement: () => void;
    onDecrement: () => void;
    horizontal?: boolean;
  };


const VerticalCounter: React.FC<Omit<NumberButtonProps, 'horizontal'>> = ({
    label,
    onIncrement,
    onDecrement,
  }) => {
    return (
      <div className='numberCruncher'>
        <button onClick={onIncrement}>▲</button>
        <span>{label}</span>
        <button onClick={onDecrement}>▼</button>
      </div>
    );
  };

const HorizontalCounter: React.FC<Omit<NumberButtonProps, 'horizontal'>> = ({
    label,
    onIncrement,
    onDecrement,
  }) => {
    return (
      <div className='numberCruncher' style={{display: 'flex', 
      flexDirection: 'row', justifyContent: 'space-between'}}>
        <button onClick={onDecrement}>◀</button>
        <span>{label}</span>
        <button onClick={onIncrement}>▶</button>
      </div>
    );
  };

const NumberButton: React.FC<NumberButtonProps> = ({
    label,
    onIncrement,
    onDecrement,
    horizontal = false,
  }) => {
      return ( horizontal
        ? <HorizontalCounter 
            label={label} 
            onIncrement={onIncrement} 
            onDecrement={onDecrement} /> 
        : <VerticalCounter 
            label={label} 
            onIncrement={onIncrement} 
            onDecrement={onDecrement} />
      );
  };

export default NumberButton;
