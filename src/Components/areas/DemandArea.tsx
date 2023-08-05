import React, { useContext } from "react";
import { HouseDemandContext } from "../HouseDemandContext";
import Title from "../atoms/Title";
import IncrementAndToggle from "../atoms/IncrementAndToggle";
import FoodChainMagnatePalette from "../ColorPalette";

const DemandArea: React.FC = () => {
  const { demand, setDemand, milestones, setMilestones } = useContext(HouseDemandContext);

  const handleAddDrink = () => {
    setDemand({
      ...demand,
      drinks: demand.drinks + 1,
      total: demand.total + 1,
    });
  };

  const handleRemoveDrink = () => {
    setDemand({
      ...demand,
      drinks: demand.drinks - 1,
      total: demand.total - 1,
    });
  };

  const handleAddBurgers = () => {
    setDemand({
      ...demand,
      burgers: demand.burgers + 1,
      total: demand.total + 1,
    });
  };

  const handleRemoveBurgers = () => {
    setDemand({
      ...demand,
      burgers: demand.burgers - 1,
      total: demand.total - 1,
    });
  };

  const handleAddPizza = () => {
    setDemand({ ...demand, pizza: demand.pizza + 1, total: demand.total + 1 });
  };

  const handleRemovePizza = () => {
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

  const atZero = (counter: number) => counter == 0;
  const atGlobalLimit = () => demand.total >= 5;

  return (
    <section>
      <Title>Demand</Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        <IncrementAndToggle
          label="Drinks"
          active={milestones.hasDrinkBonus}
          onClick={handleDrinkBonus}
          counter={demand.drinks}
          onIncrement={handleAddDrink}
          onDecrement={handleRemoveDrink}
          activeColor={FoodChainMagnatePalette.defaultActive}
          atMinimum={atZero}
          atMaximum={atGlobalLimit}
        />
        <IncrementAndToggle
          label="Burgers"
          active={milestones.hasBurgerBonus}
          onClick={handleBurgerBonus}
          counter={demand.burgers}
          onIncrement={handleAddBurgers}
          onDecrement={handleRemoveBurgers}
          activeColor={FoodChainMagnatePalette.defaultActive}
          atMinimum={atZero}
          atMaximum={atGlobalLimit}
        />
        <IncrementAndToggle
          label="Pizzas"
          active={milestones.hasPizzaBonus}
          onClick={handlePizzaBonus}
          counter={demand.pizza}
          onIncrement={handleAddPizza}
          onDecrement={handleRemovePizza}
          activeColor={FoodChainMagnatePalette.defaultActive}
          atMinimum={atZero}
          atMaximum={atGlobalLimit}
        />
      </div>
    </section>
  );
};

export default DemandArea;
