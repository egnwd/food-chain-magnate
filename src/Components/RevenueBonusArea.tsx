import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import LabelledIncrementer from "./LabelledIncrementer";
import FoodChainMagnatePalette from "./ColorPalette";
import { HouseDemandContext } from "./HouseDemandContext";
import Title from "./Title";

const RevenueBonusArea: React.FC = () => {
  const { hasCFO, setHasCFO, milestones, setMilestones, numberWaitresses, setNumberWaitresses } =
    useContext(HouseDemandContext);

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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", width: "100%" }}>
        <ToggleButton
          label="CFO"
          active={hasCFO}
          onClick={handleHasCFO}
          activeColor={FoodChainMagnatePalette.businessDevelopment}
        />
        <ToggleButton
          label="First Waitress"
          active={milestones.hasFirstWaitress}
          onClick={handleHasFirstWaitress}
          activeColor={FoodChainMagnatePalette.businessDevelopment}
        />
        <LabelledIncrementer
          label={<span>Waitresses</span>}
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
