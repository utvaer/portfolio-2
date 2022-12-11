import React from "react";

const ActionBtn = ({ myLink, text }) => {
  if (!myLink) {
    return null;
  }
  return (
    <a className="btn" href={myLink} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default ActionBtn;
