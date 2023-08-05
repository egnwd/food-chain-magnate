import React, { useContext } from "react";
import LabelledIncrementer from "../atoms/LabelledIncrementer";
import { HouseDemandContext } from "../HouseDemandContext";
import Title from "../atoms/Title";
import ToggleButton from "../atoms/ToggleButton";
import FoodChainMagnatePalette from "../ColorPalette";

const UnitPriceArea: React.FC = () => {
  const { unitPrice, setUnitPrice, milestones, setMilestones, hasGarden, setHasGarden } =
    useContext(HouseDemandContext);

  const handleAddPricingManager = () => {
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice - 1,
      pricingManagers: unitPrice.pricingManagers + 1,
    });
  };

  const handleRemovePricingManager = () => {
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice + 1,
      pricingManagers: unitPrice.pricingManagers - 1,
    });
  };

  const handleAddDiscountManager = () => {
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice - 3,
      discountManagers: unitPrice.discountManagers + 1,
    });
  };

  const handleRemoveDiscountManager = () => {
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice + 3,
      discountManagers: unitPrice.discountManagers - 1,
    });
  };

  const handleAddLuxuryManager = () => {
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice + 10,
      luxuryManagers: unitPrice.luxuryManagers + 1,
    });
  };

  const handleRemoveLuxuryManager = () => {
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice - 10,
      luxuryManagers: unitPrice.luxuryManagers - 1,
    });
  };

  const handleHasGarden = () => setHasGarden(!hasGarden);

  const handlePermanentDiscount = () => {
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice + (!milestones.hasPermanentDiscount ? -1 : 1),
    });
    setMilestones({
      ...milestones,
      hasPermanentDiscount: !milestones.hasPermanentDiscount,
    });
  };

  const atNumber = (limit: number) => (counter: number) => counter == limit;

  return (
    <section>
      <Title>Unit Price</Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        <LabelledIncrementer
          label="Pricing Managers"
          counter={unitPrice.pricingManagers}
          onIncrement={handleAddPricingManager}
          onDecrement={handleRemovePricingManager}
          atMinimum={atNumber(0)}
          atMaximum={atNumber(12)}
        />
        <LabelledIncrementer
          label="Discount Managers"
          counter={unitPrice.discountManagers}
          onIncrement={handleAddDiscountManager}
          onDecrement={handleRemoveDiscountManager}
          atMinimum={atNumber(0)}
          atMaximum={atNumber(6)}
        />
        <LabelledIncrementer
          label="Luxury Managers"
          counter={unitPrice.luxuryManagers}
          onIncrement={handleAddLuxuryManager}
          onDecrement={handleRemoveLuxuryManager}
          atMinimum={atNumber(0)}
          atMaximum={atNumber(3)}
        />
        <div style={{ display: "flex" }}>
          <ToggleButton
            label="-$1 Sale!"
            active={milestones.hasPermanentDiscount}
            onClick={handlePermanentDiscount}
            activeColor={FoodChainMagnatePalette.discounters}
          />
        </div>
        <div
          style={{
            minWidth: "3em",
            fontSize: "2em",
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>${unitPrice.unitPrice}</div>
        </div>
        <ToggleButton
          label="Garden"
          active={hasGarden}
          onClick={handleHasGarden}
          activeColor={FoodChainMagnatePalette.businessDevelopment}
        />
      </div>
    </section>
  );
};

export default UnitPriceArea;
