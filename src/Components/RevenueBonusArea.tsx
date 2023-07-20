import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import IncrementAndToggle from "./IncrementAndToggle";
import FoodChainMagnatePalette from "./ColorPalette";
import { HouseDemandContext } from "./HouseDemandContext";
import Title from "./Title";

const RevenueBonusArea: React.FC = () => {
  const {
    hasGarden,
    setHasGarden,
    hasCFO,
    setHasCFO,
    milestones,
    setMilestones,
    numberWaitresses,
    setNumberWaitresses,
  } = useContext(HouseDemandContext);

  const handleHasGarden = () => {
    setHasGarden(!hasGarden);
  };

  const handleHasCFO = () => {
    setHasCFO(!hasCFO);
  };

  const handleHasFirstWaitress = () => {
    setMilestones({ ...milestones, hasFirstWaitress: !milestones.hasFirstWaitress });
  };

  const handleAddWaitress = () => {
    if (numberWaitresses >= 12) {
      return;
    }
    setNumberWaitresses(numberWaitresses + 1);
  };

  const handleRemoveWaitress = () => {
    if (numberWaitresses <= 0) {
      return;
    }
    setNumberWaitresses(numberWaitresses - 1);
  };

  return (
    <section>
      <Title>Revenue Bonuses</Title>
      <div style={{ display: "flex" }}>
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
        <IncrementAndToggle
          label="Waitresses"
          active={milestones.hasFirstWaitress}
          onClick={handleHasFirstWaitress}
          counter={numberWaitresses}
          onIncrement={handleAddWaitress}
          onDecrement={handleRemoveWaitress}
          activeColor={FoodChainMagnatePalette.businessDevelopment}
        />
      </div>
    </section>
  );
};

export default RevenueBonusArea;
