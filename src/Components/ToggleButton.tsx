import React from 'react';

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
  activeColor = 'rgb(141, 194, 199)',
}) => {
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

const ColorsToggleButton = {
  palePink: 'rgb(246, 170, 147)',
  purple: 'rgb(161, 122, 211)',
};

export default ToggleButton;
export { ColorsToggleButton };
