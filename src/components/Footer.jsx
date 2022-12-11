import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Row>
      <Col sm={12} md={6}>
        <a
          href="https://www.linkedin.com/in/tiffany-utv%C3%A6r-gasser-023336115/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Connect
        </a>
      </Col>
      <Col sm={12} md={6}>
        <p>Copyright Utv&aelig;r 2022</p>
      </Col>
    </Row>
  );
};

export default Footer;
