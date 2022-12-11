import React from "react";
import { Col, Row } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section className="about-section">
      <Row>
        <Col sm={12} md={4}>
          <p>
            I am finalizing a two year long frontend development course at
            Noroff. Currently working within fintech in Norway and looking to
            expand my knowledge.
          </p>
        </Col>
        <Col sm={12} md={{ span: 4, offset: 2 }}>
          <p>I am currently working on:</p>
          <ul>
            <li>Strengthening my understanding of Javascript</li>
            <li>Learning about AWS</li>
          </ul>
        </Col>
        <Col sm={12}>
          <p>Here are a few of my latest projects</p>
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
