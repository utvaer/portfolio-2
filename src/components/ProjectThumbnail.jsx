import React from "react";
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
        <ActionBtn variant="btn2" myLink={github} text="Github" />
        <ActionBtn myLink={site} text="Live website" />
      </Card.Body>
    </Card>
  );
};

export default ProjectThumbnail;
