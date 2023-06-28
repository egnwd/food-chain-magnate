import React, { useContext, useState } from 'react';
import NumberButton from './NumberButton';
import { HouseDemandContext } from './HouseDemandContext';

type UnitPriceAreaProps = {};

const UnitPriceArea: React.FC<UnitPriceAreaProps> = () => {
  const { unitPrice, setUnitPrice } = useContext(HouseDemandContext);

  const handleAddDiscountManager = () => {
    if (unitPrice.unitPrice - 1 <= 0) {
      return;
    }
    setUnitPrice({ ...unitPrice, unitPrice: unitPrice.unitPrice - 1, discountManagers: unitPrice.discountManagers + 1 });
  };

  const handleRemoveDiscountManager = () => {
    if (unitPrice.discountManagers > 0) {
      setUnitPrice({ ...unitPrice, unitPrice: unitPrice.unitPrice + 1, discountManagers: unitPrice.discountManagers - 1 });
    }
  };

  const handleAddDiscountDirector = () => {
    if (unitPrice.unitPrice - 3 <= 0) {
      return;
    }
    setUnitPrice({ ...unitPrice, unitPrice: unitPrice.unitPrice - 3, discountDirectors: unitPrice.discountDirectors + 1 });
  };

  const handleRemoveDiscountDirector = () => {
    if (unitPrice.discountDirectors > 0) {
      setUnitPrice({ ...unitPrice, unitPrice: unitPrice.unitPrice + 3, discountDirectors: unitPrice.discountDirectors - 1 });
    }
  };

  const handleAddLuxuryManager = () => {
    setUnitPrice({ ...unitPrice, unitPrice: unitPrice.unitPrice + 10, luxuryManagers: unitPrice.luxuryManagers + 1 });
  };

  const handleRemoveLuxuryManager = () => {
    if (unitPrice.unitPrice - 10 <= 0 || unitPrice.luxuryManagers <= 0) {
      return;
    }

    setUnitPrice({ ...unitPrice, unitPrice: unitPrice.unitPrice - 10, luxuryManagers: unitPrice.luxuryManagers - 1 });
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
      <div>${unitPrice.unitPrice}</div>
      <NumberButton
        label="+ $10"
        onIncrement={handleAddLuxuryManager}
        onDecrement={handleRemoveLuxuryManager}
      />
    </div>
  );
};

export default UnitPriceArea;
