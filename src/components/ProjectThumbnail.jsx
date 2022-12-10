import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ActionBtn from "./ActionBtn";

const ProjectThumbnail = ({
  image,
  title,
  stack,
  description,
  github,
  site,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={require("../images/" + image + ".png")} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{stack}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <ActionBtn variant="btn2" myLink={github}>
          Github
        </ActionBtn>
        <ActionBtn myLink={site}>Live website</ActionBtn>
      </Card.Body>
    </Card>
  );
};

export default ProjectThumbnail;
