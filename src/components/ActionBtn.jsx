import React from "react";
import Button from "react-bootstrap/Button";

const ActionBtn = (props) => {
  const myLink = props.myLink;
  let extraClass = null;

  if (props.variant === "btn2") {
    extraClass = props.btn2;
  }
  if (!props.myLink) {
    return null;
  }
  return (
    <a
      className={`${props.btn} ${extraClass}`}
      href={myLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

export default ActionBtn;
