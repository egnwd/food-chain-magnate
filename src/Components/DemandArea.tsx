import React, { useContext, useState } from 'react';
import NumberButton from './NumberButton';
import { HouseDemandContext } from './HouseDemandContext';
import Title from './Title';

type DemandAreaProps = {};

const DemandArea: React.FC<DemandAreaProps> = () => {
  const { demand, setDemand } = useContext(HouseDemandContext);

  const handleAddDrink = () => {
    if (demand.total >= 5) {
      return;
    }
    setDemand({ ...demand, drinks: demand.drinks + 1, total: demand.total + 1 });
  };

  const handleRemoveDrink = () => {
    if (demand.drinks <= 0) {
      return;
    }
    setDemand({ ...demand, drinks: demand.drinks - 1, total: demand.total - 1 });
  };

  const handleAddBurgers = () => {
    if (demand.total >= 5) {
      return;
    }
    setDemand({ ...demand, burgers: demand.burgers + 1, total: demand.total + 1 });
  };

  const handleRemoveBurgers = () => {
    if (demand.burgers <= 0) {
      return;
    }
    setDemand({ ...demand, burgers: demand.burgers - 1, total: demand.total - 1 });
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

  return (
    <section>
      <Title>Demand</Title>
      <div className='menuItem'>
        <span>Soda/Beer/Lemonade</span>
        <NumberButton
          label={demand.drinks.toString()}
          onIncrement={handleAddDrink}
          onDecrement={handleRemoveDrink}
        />
      </div>
      <div className='menuItem'>
        <span>Burgers</span>
        <NumberButton
          label={demand.burgers.toString()}
          onIncrement={handleAddBurgers}
          onDecrement={handleRemoveBurgers}
        />
      </div>
      <div className='menuItem'>
        <span>Pizza</span>
        <NumberButton
          label={demand.pizza.toString()}
          onIncrement={handleAddPizza}
          onDecrement={handleRemovePizza}
        />
      </div>

    </section>
  );
};

export default DemandArea;
