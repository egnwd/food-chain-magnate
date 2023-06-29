import React, { useContext, useState } from 'react';
import ToggleButton from './ToggleButton';
import { HouseDemandContext } from './HouseDemandContext';
import Title from './Title';

type HouseAreaProps = {};

const HouseArea: React.FC<HouseAreaProps> = () => {
  const { hasGarden, setHasGarden } = useContext(HouseDemandContext);

  const handleHasGarden = () => {
    setHasGarden(!hasGarden);
  };

  return (
    <section>
      <Title>Houses</Title>
      <ToggleButton
        label="House with Garden"
        active={hasGarden}
        onClick={handleHasGarden}
      />
    </section>
  );
};

export default HouseArea;
