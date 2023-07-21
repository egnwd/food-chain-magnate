import React, { useContext } from "react";
import LabelledIncrementer from "./LabelledIncrementer";
import { HouseDemandContext } from "./HouseDemandContext";
import Title from "./Title";
import ToggleButton from "./ToggleButton";
import FoodChainMagnatePalette from "./ColorPalette";

const UnitPriceArea: React.FC = () => {
  const { unitPrice, setUnitPrice, milestones, setMilestones, hasGarden, setHasGarden } =
    useContext(HouseDemandContext);

  const handleAddPricingManager = () => {
    if (unitPrice.unitPrice - 1 <= 0 || unitPrice.pricingManagers >= 12) {
      return;
    }
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice - 1,
      pricingManagers: unitPrice.pricingManagers + 1,
    });
  };

  const handleRemovePricingManager = () => {
    if (unitPrice.pricingManagers > 0) {
      setUnitPrice({
        ...unitPrice,
        unitPrice: unitPrice.unitPrice + 1,
        pricingManagers: unitPrice.pricingManagers - 1,
      });
    }
  };

  const handleAddDiscountManager = () => {
    if (unitPrice.unitPrice - 1 <= 0 || unitPrice.discountManagers >= 6) {
      return;
    }
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice - 3,
      discountManagers: unitPrice.discountManagers + 1,
    });
  };

  const handleRemoveDiscountManager = () => {
    if (unitPrice.discountManagers > 0) {
      setUnitPrice({
        ...unitPrice,
        unitPrice: unitPrice.unitPrice + 3,
        discountManagers: unitPrice.discountManagers - 1,
      });
    }
  };

  const handleAddLuxuryManager = () => {
    if (unitPrice.luxuryManagers >= 3) {
      return;
    }
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice + 10,
      luxuryManagers: unitPrice.luxuryManagers + 1,
    });
  };

  const handleRemoveLuxuryManager = () => {
    if (unitPrice.unitPrice - 10 <= 0 || unitPrice.luxuryManagers <= 0) {
      return;
    }

    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice - 10,
      luxuryManagers: unitPrice.luxuryManagers - 1,
    });
  };

  const handleHasGarden = () => setHasGarden(!hasGarden);

  const handlePermanentDiscount = () => {
    if (unitPrice.unitPrice + (!milestones.hasPermanentDiscount ? -1 : 1) <= 0) {
      return;
    }
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice + (!milestones.hasPermanentDiscount ? -1 : 1),
    });
    setMilestones({
      ...milestones,
      hasPermanentDiscount: !milestones.hasPermanentDiscount,
    });
  };

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
        />
        <LabelledIncrementer
          label="Discount Managers"
          counter={unitPrice.discountManagers}
          onIncrement={handleAddDiscountManager}
          onDecrement={handleRemoveDiscountManager}
        />
        <LabelledIncrementer
          label="Luxury Managers"
          counter={unitPrice.luxuryManagers}
          onIncrement={handleAddLuxuryManager}
          onDecrement={handleRemoveLuxuryManager}
        />
        <div style={{ display: "flex" }}>
          <ToggleButton
            label="First to Lower Prices"
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
