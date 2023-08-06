import React from "react";

type StickerProps = {
  children: React.ReactNode;
};

const Sticker: React.FC<StickerProps> = ({ children }) => (
  <div className="star-twelve">
    <p>{children}</p>
  </div>
);

export default Sticker;
