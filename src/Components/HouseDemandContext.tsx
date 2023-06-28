import React, { createContext, useState } from "react";

type Milestones = {
  hasDrinkBonus: boolean;
  hasBurgerBonus: boolean;
  hasPizzaBonus: boolean;
  hasPermanentDiscount: boolean;
};

type UnitPrice = {
  discountManagers: number;
  luxuryManagers: number;
  discountDirectors: number;
  unitPrice: number;
};

type Demand = {
  drinks: number;
  burgers: number;
  pizza: number;
  total: number;
};

export type HouseDemand = {
  hasGarden: boolean;
  setHasGarden: React.Dispatch<React.SetStateAction<boolean>>;
  milestones: Milestones;
  setMilestones: React.Dispatch<React.SetStateAction<Milestones>>;
  unitPrice: UnitPrice;
  setUnitPrice: React.Dispatch<React.SetStateAction<UnitPrice>>;
  demand: Demand;
  setDemand: React.Dispatch<React.SetStateAction<Demand>>;
};

export const HouseDemandContext = createContext<HouseDemand>({
  hasGarden: false,
  milestones: {
    hasDrinkBonus: false,
    hasBurgerBonus: false,
    hasPizzaBonus: false,
    hasPermanentDiscount: false,
  },
  unitPrice: {
    discountManagers: 0,
    discountDirectors: 0,
    luxuryManagers: 0,
    unitPrice: 10,
  },
  demand: {
    drinks: 0,
    burgers: 0,
    pizza: 0,
    total: 0,
  },
  setHasGarden: () => { },
  setMilestones: () => { },
  setUnitPrice: () => { },
  setDemand: () => { },
});

type HouseDemandProviderProps = {
  children: React.ReactNode;
};

export const HouseDemandProvider: React.FC<HouseDemandProviderProps> = ({ children }) => {
  const [milestones, setMilestones] = useState<Milestones>({
    hasDrinkBonus: false,
    hasBurgerBonus: false,
    hasPizzaBonus: false,
    hasPermanentDiscount: false,
  });

  const [unitPrice, setUnitPrice] = useState<UnitPrice>({
    discountManagers: 0,
    discountDirectors: 0,
    luxuryManagers: 0,
    unitPrice: 10,
  });

  const [demand, setDemand] = useState<Demand>({
    drinks: 0,
    burgers: 0,
    pizza: 0,
    total: 0,
  });

  const [hasGarden, setHasGarden] = useState<boolean>(false);

  return (
    <HouseDemandContext.Provider value={{ milestones, setMilestones, unitPrice, setUnitPrice, demand, setDemand, hasGarden, setHasGarden }}>
      {children}
    </HouseDemandContext.Provider>
  );
};