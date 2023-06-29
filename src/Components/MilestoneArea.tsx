import React, { useContext, useState } from 'react';
import ToggleButton from './ToggleButton';
import { HouseDemandContext } from './HouseDemandContext';
import Title from './Title';

type MilestoneAreaProps = {};

const MilestoneArea: React.FC<MilestoneAreaProps> = () => {
  const { milestones, setMilestones } = useContext(HouseDemandContext);

  const handleDrinkBonus = () => {
    setMilestones({ ...milestones, hasDrinkBonus: !milestones.hasDrinkBonus });
  };

  const handleBurgerBonus = () => {
    setMilestones({ ...milestones, hasBurgerBonus: !milestones.hasBurgerBonus });
  };

  const handlePizzaBonus = () => {
    setMilestones({ ...milestones, hasPizzaBonus: !milestones.hasPizzaBonus });
  };

  const handlePermanentDiscount = () => {
    setMilestones({ ...milestones, hasPermanentDiscount: !milestones.hasPermanentDiscount });
  };

  return (
    <section>
      <Title>Milestones</Title>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          minWidth: '100vw'
        }}>
      <ToggleButton
        label="+$5 on Drinks"
        active={milestones.hasDrinkBonus}
        onClick={handleDrinkBonus}
      />
      <ToggleButton
        label="+$5 on Burger"
        active={milestones.hasBurgerBonus}
        onClick={handleBurgerBonus}
      />
      <ToggleButton
        label="+$5 on Pizza"
        active={milestones.hasPizzaBonus}
        onClick={handlePizzaBonus}
      />
      <ToggleButton
        label="- $1 Sale!"
        active={milestones.hasPermanentDiscount}
        onClick={handlePermanentDiscount}
      /></div>
    </section>
  );
};

export default MilestoneArea;
