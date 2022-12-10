import React from "react";

const Header = ({ size = "1", title }) => {
  const VariableHeading = `h${size}`;
  return <VariableHeading>{title}</VariableHeading>;
};

export default Header;
