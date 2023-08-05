import React, { useContext } from "react";
import LabelledIncrementer from "../atoms/LabelledIncrementer";
import { HouseDemandContext } from "../HouseDemandContext";
import Title from "../atoms/Title";
import Sticker from "../atoms/Sticker";

const UnitPriceArea: React.FC = () => {
  const { unitPrice, setUnitPrice } = useContext(HouseDemandContext);

  const handleAddDistance = () => {
    setUnitPrice({
      ...unitPrice,
      distance: unitPrice.distance + 1,
    });
  };

  const handleRemoveDistance = () => {
    setUnitPrice({
      ...unitPrice,
      distance: unitPrice.distance - 1,
    });
  };

  const atNumber = (limit: number) => (counter: number) => counter == limit;

  return (
    <section>
      <Title>Distance</Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "10px",
        }}
      >
        <LabelledIncrementer
          label="Distance"
          counter={unitPrice.distance}
          onIncrement={handleAddDistance}
          onDecrement={handleRemoveDistance}
          atMinimum={atNumber(0)}
          atMaximum={atNumber(8)}
        />
        <Sticker>{unitPrice.distance + unitPrice.unitPrice}</Sticker>
      </div>
    </section>
  );
};

export default UnitPriceArea;
