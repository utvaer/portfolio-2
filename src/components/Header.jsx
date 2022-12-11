import React from "react";

const Header = ({ size = "1", title, classN }) => {
  const VariableHeading = `h${size}`;
  return <VariableHeading className={classN}>{title}</VariableHeading>;
};

export default Header;
