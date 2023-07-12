import React, { useContext } from 'react';
import { HouseDemand, HouseDemandContext } from './HouseDemandContext';

function CalculatePrice({milestones, demand, unitPrice, hasGarden, hasCFO} : HouseDemand): number
{
    let numItems = demand.total;
    let basePrice = numItems * unitPrice.unitPrice;
    let housePrice = basePrice * (hasGarden ? 2 : 1);
    let drinkBonus = demand.drinks * (milestones.hasDrinkBonus ? 5 : 0);
    let burgerBonus = demand.burgers * (milestones.hasBurgerBonus ? 5 : 0);
    let pizzaBonus = demand.pizza * (milestones.hasPizzaBonus ? 5 : 0);
    let total = housePrice + drinkBonus + burgerBonus + pizzaBonus;
    return hasCFO ? Math.ceil(total * 1.5) : total;
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
