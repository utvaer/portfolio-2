import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectThumbnail from "./ProjectThumbnail";

const Projects = ({ projects }) => {
  return (
    <Row>
      {projects.map((project) => (
        <Col sm={12} lg={6}>
          <ProjectThumbnail
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.image}
            github={project.github}
            site={project.site}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
