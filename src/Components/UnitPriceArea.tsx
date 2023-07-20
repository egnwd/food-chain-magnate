import React, { useContext } from "react";
import LabelledIncrementer from "./LabelledIncrementer";
import { HouseDemandContext } from "./HouseDemandContext";
import Title from "./Title";
import ToggleButton from "./ToggleButton";
import FoodChainMagnatePalette from "./ColorPalette";

const UnitPriceArea: React.FC = () => {
  const { unitPrice, setUnitPrice, milestones, setMilestones } = useContext(HouseDemandContext);

  const handleAddPricingManager = () => {
    if (unitPrice.unitPrice - 1 <= 0) {
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
    if (unitPrice.unitPrice - 1 <= 0) {
      return;
    }
    setUnitPrice({
      ...unitPrice,
      unitPrice: unitPrice.unitPrice - 1,
      discountManagers: unitPrice.discountManagers + 1,
    });
  };

  const handleRemoveDiscountManager = () => {
    if (unitPrice.discountManagers > 0) {
      setUnitPrice({
        ...unitPrice,
        unitPrice: unitPrice.unitPrice + 1,
        discountManagers: unitPrice.discountManagers - 1,
      });
    }
  };

  const handleAddLuxuryManager = () => {
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
          display: "flex",
          gap: "5px",
          justifyContent: "space-around",
          minWidth: "100vw",
        }}
      >
        <LabelledIncrementer
          label={
            <span>
              Pricing<br></br>Managers
            </span>
          }
          counter={unitPrice.pricingManagers}
          onIncrement={handleAddPricingManager}
          onDecrement={handleRemovePricingManager}
        />
        <LabelledIncrementer
          label={
            <span>
              Discount<br></br>Managers
            </span>
          }
          counter={unitPrice.discountManagers}
          onIncrement={handleAddDiscountManager}
          onDecrement={handleRemoveDiscountManager}
        />
        <LabelledIncrementer
          label={
            <span>
              Luxury<br></br>Managers
            </span>
          }
          counter={unitPrice.luxuryManagers}
          onIncrement={handleAddLuxuryManager}
          onDecrement={handleRemoveLuxuryManager}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          maxWidth: "70vw",
          justifyContent: "space-around",
        }}
      >
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
      </div>
    </section>
  );
};

export default UnitPriceArea;
