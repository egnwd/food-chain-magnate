import React from "react";

type TitleProps = {
  children: string;
};

const Title: React.FC<TitleProps> = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "start",
      width: "100%",
    }}
  >
    <h2 data-text={children}>{children}</h2>
  </div>
);

export default Title;
