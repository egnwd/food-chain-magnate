import React, { useState } from 'react';
import NumberButton from './NumberButton';
import ToggleButton from './ToggleButton';

type MilestoneAreaProps = {};

const MilestoneArea: React.FC<MilestoneAreaProps> = () => {
    const [hasDrinkBonus, setHasDrinkBonus] = useState(false);
    const [hasBurgerBonus, setHasBurgerBonus] = useState(false);
    const [hasPizzaBonus, setHasPizzaBonus] = useState(false);
    const [hasPermenantDiscount, setHasPermenantDiscount] = useState(false);
    const [hasWaitressBonus, setHasWaitressBonus] = useState(false);

  const handleDrinkBonus = () => {
    setHasDrinkBonus(!hasDrinkBonus);
  };

  const handleBurgerBonus = () => {
    setHasBurgerBonus(!hasBurgerBonus);
  };

  const handlePizzaBonus = () => {
    setHasPizzaBonus(!hasPizzaBonus);
  };

  const handlePermenantDiscount = () => {
    setHasPermenantDiscount(!hasPermenantDiscount);
  };

  const handleWaitressBonus = () => {
    setHasWaitressBonus(!hasWaitressBonus);
  };


  return (
    <div>
      <h1>Milestones</h1>
      <ToggleButton
        label="+$5 on Drinks"
        active={hasDrinkBonus}
        onClick={handleDrinkBonus}
      />
      <ToggleButton
        label="+$5 on Burger"
        active={hasBurgerBonus}
        onClick={handleBurgerBonus}
      />
      <ToggleButton
        label="+$5 on Pizza"
        active={hasPizzaBonus}
        onClick={handlePizzaBonus}
      />
      <ToggleButton
        label="- $1"
        active={hasPermenantDiscount}
        onClick={handlePermenantDiscount}
      />
      <ToggleButton
        label="+$2 per Waitress"
        active={hasWaitressBonus}
        onClick={handleWaitressBonus}
      />
    </div>
  );
};

export default MilestoneArea;
