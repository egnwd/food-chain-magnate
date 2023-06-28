import React, { useState } from 'react';
import NumberButton from './NumberButton';

type DemandAreaProps = {};

const DemandArea: React.FC<DemandAreaProps> = () => {
  const [drinks, setDrinks] = useState(0);
  const [burgers, setBurgers] = useState(0);
  const [pizza, setPizza] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAddDrink = () => {
    if (total >= 5) {
      return;
    }
    setDrinks(drinks + 1);
    setTotal(total + 1);
  };

  const handleRemoveDrink = () => {
    if (drinks <= 0) {
      return;
    }
    setDrinks(drinks - 1);
    setTotal(total - 1);
  };

  const handleAddBurgers = () => {
    if (total >= 5) {
      return;
    }
    setBurgers(burgers + 1);
    setTotal(total + 1);
  };

  const handleRemoveBurgers = () => {
    if (burgers <= 0) {
      return;
    }
    setBurgers(burgers - 1);
    setTotal(total - 1);
  };
 
  const handleAddPizza = () => {
    if (total >= 5) {
      return;
    }
    setPizza(pizza + 1);
    setTotal(total + 1);
  };

  const handleRemovePizza = () => {
    if (pizza <= 0) {
      return;
    }
    setPizza(pizza - 1);
    setTotal(total - 1);
  };

  return (
    <div>
      <h1>Demand</h1>
      <span>Soda/Beer/Lemonade</span>
      <NumberButton
          label={drinks.toString()}
          onIncrement={handleAddDrink}
          onDecrement={handleRemoveDrink}
      />
      <span>Burgers</span>
      <NumberButton
          label={burgers.toString()}
          onIncrement={handleAddBurgers}
          onDecrement={handleRemoveBurgers}
      />
      <span>Pizza</span>
      <NumberButton
          label={pizza.toString()}
          onIncrement={handleAddPizza}
          onDecrement={handleRemovePizza}
      />
    </div>
  );
};

export default DemandArea;
