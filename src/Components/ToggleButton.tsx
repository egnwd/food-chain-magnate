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
      style={{
        backgroundColor: active ? 'blue' : 'lightgray',
        color: active ? 'white' : 'black',
      }}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
