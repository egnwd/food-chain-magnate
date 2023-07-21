import React, { useContext } from "react";
import { HouseDemandContext } from "./HouseDemandContext";
import Title from "./Title";
import IncrementAndToggle from "./IncrementAndToggle";
import FoodChainMagnatePalette from "./ColorPalette";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          width: "100%",
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
        />
        <IncrementAndToggle
          label="Burgers"
          active={milestones.hasBurgerBonus}
          onClick={handleBurgerBonus}
          counter={demand.burgers}
          onIncrement={handleAddBurgers}
          onDecrement={handleRemoveBurgers}
          activeColor={FoodChainMagnatePalette.defaultActive}
        />
        <IncrementAndToggle
          label="Pizzas"
          active={milestones.hasPizzaBonus}
          onClick={handlePizzaBonus}
          counter={demand.pizza}
          onIncrement={handleAddPizza}
          onDecrement={handleRemovePizza}
          activeColor={FoodChainMagnatePalette.defaultActive}
        />
      </div>
    </section>
  );
};

export default DemandArea;
