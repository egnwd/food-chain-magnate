import React, { useContext } from "react";
import { HouseDemand, HouseDemandContext } from "./HouseDemandContext";

function CalculatePrice({ milestones, demand, unitPrice, hasGarden, hasCFO, numberWaitresses }: HouseDemand): string {
  const numItems = demand.total;
  const basePrice = numItems * unitPrice.unitPrice;
  const housePrice = basePrice * (hasGarden ? 2 : 1);
  const drinkBonus = demand.drinks * (milestones.hasDrinkBonus ? 5 : 0);
  const burgerBonus = demand.burgers * (milestones.hasBurgerBonus ? 5 : 0);
  const pizzaBonus = demand.pizza * (milestones.hasPizzaBonus ? 5 : 0);
  const dollarPerWaitress = milestones.hasFirstWaitress ? 5 : 3;
  const waitressBonus = numberWaitresses * dollarPerWaitress;
  const total = housePrice + drinkBonus + burgerBonus + pizzaBonus + waitressBonus;
  const overallRevenue = hasCFO ? Math.ceil(total * 1.5) : total;
  return `${numItems} x $${unitPrice.unitPrice} + $${
    overallRevenue - numItems * unitPrice.unitPrice
  } = $${overallRevenue}`;
}

const Price: React.FC = () => {
  const house = useContext(HouseDemandContext);

  return (
    <div className="price">
      <h1>{CalculatePrice(house)}</h1>
    </div>
  );
};

export default Price;
