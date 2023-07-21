import React, { useContext } from "react";
import { HouseDemand, HouseDemandContext } from "./HouseDemandContext";

type CalculatedPrice = {
  subTotal: number;
  waitressBonus: number;
  cfoBonus: number;
  total: number;
};

function CalculatePrice({
  milestones,
  demand,
  unitPrice,
  hasGarden,
  hasCFO,
  numberWaitresses,
}: HouseDemand): CalculatedPrice {
  const numItems = demand.total;
  const houseMultiplier = hasGarden ? 2 : 1;
  const totalItemPrice = numItems * (unitPrice.unitPrice * houseMultiplier);

  const drinkBonus = demand.drinks * (milestones.hasDrinkBonus ? 5 : 0);
  const burgerBonus = demand.burgers * (milestones.hasBurgerBonus ? 5 : 0);
  const pizzaBonus = demand.pizza * (milestones.hasPizzaBonus ? 5 : 0);

  const dollarPerWaitress = milestones.hasFirstWaitress ? 5 : 3;
  const waitressBonus = numberWaitresses * dollarPerWaitress;

  const subTotal = totalItemPrice + drinkBonus + burgerBonus + pizzaBonus;
  const cfoBonus = hasCFO ? Math.ceil((subTotal + waitressBonus) * 0.5) : 0;
  const total = subTotal + waitressBonus + cfoBonus;
  return { subTotal, waitressBonus, cfoBonus, total };
}

const Price: React.FC = () => {
  const house = useContext(HouseDemandContext);
  const prices = CalculatePrice(house);
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
      <h1>
        ${prices.subTotal} + ${prices.waitressBonus} + ${prices.cfoBonus} = ${prices.total}
      </h1>
    </div>
  );
};

export default Price;
