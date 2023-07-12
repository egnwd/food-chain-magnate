import React from 'react';
import FoodChainMagnatePalette from './ColorPalette';

type ToggleButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  activeColor?: string;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ 
  label,
  active,
  onClick,
  activeColor = FoodChainMagnatePalette.defaultActive,
}) => {
  const inactiveColor = FoodChainMagnatePalette.defaultInactive;
  const textColor = FoodChainMagnatePalette.defaultText;
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
