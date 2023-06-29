import React, { useContext, useState } from 'react';
import { HouseDemand, HouseDemandContext } from './HouseDemandContext';

function CalculatePrice({milestones, demand, unitPrice, hasGarden} : HouseDemand): number
{
    let numItems = demand.total;
    let basePrice = numItems * (unitPrice.unitPrice + (milestones.hasPermanentDiscount ? -1 : 0));
    let housePrice = basePrice * (hasGarden ? 2 : 1);
    let drinkBonus = demand.drinks * (milestones.hasDrinkBonus ? 5 : 0);
    let burgerBonus = demand.burgers * (milestones.hasBurgerBonus ? 5 : 0);
    let pizzaBonus = demand.pizza * (milestones.hasPizzaBonus ? 5 : 0);
    return housePrice + drinkBonus + burgerBonus + pizzaBonus;
}

type PriceProps = {};

const Price: React.FC<PriceProps> = () => {
  const house = useContext(HouseDemandContext);

  return (
    <div className='price'>
      <h1>${CalculatePrice(house)}</h1>
    </div>
  );
};

export default Price;
