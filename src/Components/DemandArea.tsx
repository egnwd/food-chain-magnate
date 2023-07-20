import React, { useContext } from "react";
import NumberButton from "./NumberButton";
import { HouseDemandContext } from "./HouseDemandContext";
import Title from "./Title";
import ToggleButton from "./ToggleButton";
import SodaIcon from "../Icons/SodaIcon";
import BurgerIcon from "../Icons/BurgerIcon";
import PizzaIcon from "../Icons/PizzaIcon";

const DemandArea: React.FC = () => {
  const { demand, setDemand, milestones, setMilestones } = useContext(HouseDemandContext);

  const handleAddDrink = () => {
    if (demand.total >= 5) {
      return;
    }
    setDemand({
      ...demand,
      drinks: demand.drinks + 1,
      total: demand.total + 1,
    });
  };

  const handleRemoveDrink = () => {
    if (demand.drinks <= 0) {
      return;
    }
    setDemand({
      ...demand,
      drinks: demand.drinks - 1,
      total: demand.total - 1,
    });
  };

  const handleAddBurgers = () => {
    if (demand.total >= 5) {
      return;
    }
    setDemand({
      ...demand,
      burgers: demand.burgers + 1,
      total: demand.total + 1,
    });
  };

  const handleRemoveBurgers = () => {
    if (demand.burgers <= 0) {
      return;
    }
    setDemand({
      ...demand,
      burgers: demand.burgers - 1,
      total: demand.total - 1,
    });
  };

  const handleAddPizza = () => {
    if (demand.total >= 5) {
      return;
    }
    setDemand({ ...demand, pizza: demand.pizza + 1, total: demand.total + 1 });
  };

  const handleRemovePizza = () => {
    if (demand.pizza <= 0) {
      return;
    }
    setDemand({ ...demand, pizza: demand.pizza - 1, total: demand.total - 1 });
  };

  const handleDrinkBonus = () => {
    setMilestones({ ...milestones, hasDrinkBonus: !milestones.hasDrinkBonus });
  };

  const handleBurgerBonus = () => {
    setMilestones({
      ...milestones,
      hasBurgerBonus: !milestones.hasBurgerBonus,
    });
  };

  const handlePizzaBonus = () => {
    setMilestones({ ...milestones, hasPizzaBonus: !milestones.hasPizzaBonus });
  };

  return (
    <section>
      <Title>Demand</Title>
      <div className="menuItem">
        <SodaIcon />
        <NumberButton label={demand.drinks.toString()} onIncrement={handleAddDrink} onDecrement={handleRemoveDrink} />
        <ToggleButton label="+$5 on Drinks" active={milestones.hasDrinkBonus} onClick={handleDrinkBonus} />
      </div>
      <div className="menuItem">
        <BurgerIcon />

        <NumberButton
          label={demand.burgers.toString()}
          onIncrement={handleAddBurgers}
          onDecrement={handleRemoveBurgers}
        />
        <ToggleButton label="+$5 on Burger" active={milestones.hasBurgerBonus} onClick={handleBurgerBonus} />
      </div>
      <div className="menuItem">
        <PizzaIcon />

        <NumberButton label={demand.pizza.toString()} onIncrement={handleAddPizza} onDecrement={handleRemovePizza} />
        <ToggleButton label="+$5 on Pizza" active={milestones.hasPizzaBonus} onClick={handlePizzaBonus} />
      </div>
    </section>
  );
};

export default DemandArea;
