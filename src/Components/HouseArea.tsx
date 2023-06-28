import React, { useContext, useState } from 'react';
import ToggleButton from './ToggleButton';
import { HouseDemandContext } from './HouseDemandContext';

type HouseAreaProps = {};

const HouseArea: React.FC<HouseAreaProps> = () => {
  const { hasGarden, setHasGarden } = useContext(HouseDemandContext);

  const handleHasGarden = () => {
    setHasGarden(!hasGarden);
  };

  return (
    <div>
      <h1>Houses</h1>
      <ToggleButton
        label="House with Garden"
        active={hasGarden}
        onClick={handleHasGarden}
      />
    </div>
  );
};

export default HouseArea;
