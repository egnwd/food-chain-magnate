import React, { useContext } from "react";
import { HouseDemand, HouseDemandContext } from "./HouseDemandContext";

function CalculatePrice({ milestones, demand, unitPrice, hasGarden }: HouseDemand): number {
  const numItems = demand.total;
  const houseMultiplier = hasGarden ? 2 : 1;
  const totalItemPrice = numItems * (unitPrice.unitPrice * houseMultiplier);

  const drinkBonus = demand.drinks * (milestones.hasDrinkBonus ? 5 : 0);
  const burgerBonus = demand.burgers * (milestones.hasBurgerBonus ? 5 : 0);
  const pizzaBonus = demand.pizza * (milestones.hasPizzaBonus ? 5 : 0);

  return totalItemPrice + drinkBonus + burgerBonus + pizzaBonus;
}

const Price: React.FC = () => {
  const house = useContext(HouseDemandContext);
  const price = CalculatePrice(house);
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        height: "5em",
        width: "100%",
        backgroundColor: "rgb(253, 241, 217)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>${price}</h1>
    </div>
  );
};

export default Price;
