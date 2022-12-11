import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col sm={12} md={6}>
          <div className="footer-link">
            <a
              href="https://www.linkedin.com/in/tiffany-utv%C3%A6r-gasser-023336115/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Connect
            </a>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="footer-p">
            <p>Copyright Utv&aelig;r 2022</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
