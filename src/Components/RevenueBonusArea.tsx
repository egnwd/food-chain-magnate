import React, { useContext } from 'react';
import ToggleButton from './ToggleButton';
import { ColorsToggleButton } from './ToggleButton';
import { HouseDemandContext } from './HouseDemandContext';
import Title from './Title';

type RevenueBonusProps = {};

const RevenueBonusArea: React.FC<RevenueBonusProps> = () => {
  const { hasGarden, setHasGarden, hasCFO, setHasCFO, } = useContext(HouseDemandContext);

  const handleHasGarden = () => {
    setHasGarden(!hasGarden);
  };

  const handleHasCFO = () => {
    setHasCFO(!hasCFO);
  };

  return (
    <section>
      <Title>Revenue Bonuses</Title>
      <div>
        <ToggleButton
          label="Garden"
          active={hasGarden}
          onClick={handleHasGarden}
        />
        <ToggleButton
          label="CFO"
          active={hasCFO}
          onClick={handleHasCFO}
          activeColor={ColorsToggleButton.purple}
        />
      </div>
    </section>
  );
};

export default RevenueBonusArea;
