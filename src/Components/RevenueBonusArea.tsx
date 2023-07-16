import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import FoodChainMagnatePalette from "./ColorPalette";
import { HouseDemandContext } from "./HouseDemandContext";
import Title from "./Title";

const RevenueBonusArea: React.FC = () => {
  const { hasGarden, setHasGarden, hasCFO, setHasCFO } = useContext(HouseDemandContext);

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
          activeColor={FoodChainMagnatePalette.businessDevelopment}
        />
        <ToggleButton
          label="CFO"
          active={hasCFO}
          onClick={handleHasCFO}
          activeColor={FoodChainMagnatePalette.businessDevelopment}
        />
      </div>
    </section>
  );
};

export default RevenueBonusArea;
