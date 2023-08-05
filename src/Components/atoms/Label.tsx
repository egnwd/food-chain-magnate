import React from "react";

const Label: React.FC<{ label: string }> = ({ label }) => (
  <div style={{ backgroundColor: "black", color: "white", padding: "5px", fontWeight: 700 }}>{label}</div>
);
export default Label;
