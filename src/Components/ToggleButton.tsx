import React from 'react';

type ToggleButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  permanentDiscount?: boolean;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ 
  label,
  active,
  onClick,
  permanentDiscount = false,
}) => {
  const activeColor = permanentDiscount ? 'rgb(246, 170, 147)' : 'rgb(141, 194, 199)';
  const inactiveColor = 'rgb(216, 217, 204)';
  const textColor = 'rgb(60, 64, 63)';
  return (
    <button
      onClick={onClick}
      className='togglable'
      style={{
        backgroundColor: active ? activeColor : inactiveColor, 
        color: textColor, 
      }}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
