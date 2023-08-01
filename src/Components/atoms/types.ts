export interface IIncrementable {
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
  atMinimum?: (counter: number) => boolean;
  atMaximum?: (counter: number) => boolean;
}

export interface IToggleable {
  active: boolean;
  onClick: () => void;
}

export interface ILabelledButton {
  label: string;
  activeColor?: string;
}
