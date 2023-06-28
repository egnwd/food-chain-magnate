import React, { useState } from 'react';
import NumberButton from './NumberButton';

type UnitPriceAreaProps = {};

const UnitPriceArea: React.FC<UnitPriceAreaProps> = () => {
  const [discountManagers, setDiscountManagers] = useState(0);
  const [luxuryManagers, setLuxuryManagers] = useState(0);
  const [discountDirectors, setDiscountDirectors] = useState(0);
  const [unitPrice, setUnitPrice] = useState(10);

  const handleAddDiscountManager = () => {
    if (unitPrice - 1 <= 0) {
      return;
    }
    setUnitPrice(unitPrice - 1);
    setDiscountManagers(discountManagers + 1);
  };

  const handleRemoveDiscountManager = () => {
    if (discountManagers > 0) {
        setUnitPrice(unitPrice + 1);
        setDiscountManagers(discountManagers - 1);
    }
  };

  const handleAddDiscountDirector = () => {
    if (unitPrice - 3 <= 0) {
      return;
    }
    setUnitPrice(unitPrice - 3);
    setDiscountDirectors(discountDirectors + 1);
  };

  const handleRemoveDiscountDirector = () => {
    if (discountDirectors > 0) {
        setUnitPrice(unitPrice + 3);
        setDiscountDirectors(discountDirectors - 1);
    }  
  };

  const handleAddLuxuryManager = () => {
    setUnitPrice(unitPrice + 10);
    setLuxuryManagers(luxuryManagers + 1);
  };

  const handleRemoveLuxuryManager = () => {
    if (unitPrice - 10 <= 0) {
      return;
    }
    if (luxuryManagers > 0) {
      setUnitPrice(unitPrice - 10);
      setLuxuryManagers(luxuryManagers - 1);
    }
  };

  return (
    <div>
      <h1>Unit Price</h1>
      <NumberButton
          label="- $1"
          onIncrement={handleAddDiscountManager}
          onDecrement={handleRemoveDiscountManager}
      />
      <NumberButton
          label="- $3"
          onIncrement={handleAddDiscountDirector}
          onDecrement={handleRemoveDiscountDirector}
      />
      <div>${unitPrice}</div>
      <NumberButton
          label="+ $10"
          onIncrement={handleAddLuxuryManager}
          onDecrement={handleRemoveLuxuryManager}
      />
    </div>
  );
};

export default UnitPriceArea;
