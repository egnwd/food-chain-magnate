import React, { useContext, useState } from 'react';
import NumberButton from './NumberButton';
import { HouseDemandContext } from './HouseDemandContext';
import Title from './Title';
import ToggleButton from './ToggleButton';

type UnitPriceAreaProps = {};

const UnitPriceArea: React.FC<UnitPriceAreaProps> = () => {
  const { unitPrice, setUnitPrice, milestones, setMilestones } = useContext(HouseDemandContext);

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

  const handlePermanentDiscount = () => {
    if (unitPrice.unitPrice + (!milestones.hasPermanentDiscount ? -1 : 1)  <= 0) {
      return;
    }
    setUnitPrice({ ...unitPrice, unitPrice: unitPrice.unitPrice + (!milestones.hasPermanentDiscount ? -1 : 1) });
    setMilestones({ ...milestones, hasPermanentDiscount: !milestones.hasPermanentDiscount });
  };

  return (
    <section>
      <Title>Unit Price</Title>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          minWidth: '100vw'
        }}>
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
        <div style={{ minWidth: '3em', fontSize: '2em', fontWeight: 700 }}>${unitPrice.unitPrice}</div>
        <NumberButton
          label="+ $10"
          onIncrement={handleAddLuxuryManager}
          onDecrement={handleRemoveLuxuryManager}
        />
      </div>
      <ToggleButton
        label="- $1 Sale!"
        active={milestones.hasPermanentDiscount}
        onClick={handlePermanentDiscount}
        permanentDiscount={true}
      />
    </section>
  );
};

export default UnitPriceArea;
