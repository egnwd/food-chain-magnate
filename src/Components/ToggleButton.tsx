import React from 'react';

type ToggleButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='togglable'
      style={{
        backgroundColor: active ? 'rgb(141, 194, 199)' : 'rgb(216, 217, 204)',
        color: 'rgb(60, 64, 63)',
      }}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
