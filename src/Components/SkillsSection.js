import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SkillsSection.css";

const Skill = ({ icon, name }) => (
  <Col xs={6} sm={4} md={3} lg={2} className="mb-4 text-center">
    <img src={icon} alt={name} className="skill-icon mb-2" />
    <h5>{name}</h5>
  </Col>
);

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: "path/to/react-icon.svg" },
    { name: "FastAPI", icon: "path/to/fastapi-icon.svg" },
    { name: "AWS", icon: "path/to/aws-icon.svg" },
    { name: "Nginx", icon: "path/to/nginx-icon.svg" },
    { name: "Bootstrap", icon: "path/to/bootstrap-icon.svg" },
    { name: "Auth0", icon: "path/to/auth0-icon.svg" },
    { name: "HTML/CSS", icon: "path/to/html-css-icon.svg" },
    { name: "JavaScript", icon: "path/to/javascript-icon.svg" },
    { name: "SQL", icon: "path/to/sql-icon.svg" },
    { name: "Git", icon: "path/to/git-icon.svg" },
    { name: "RESTful API", icon: "path/to/restful-api-icon.svg" },
    { name: "Cross-device Compatibility", icon: "path/to/cross-device-icon.svg" },
  ];

  return (
    <Container className="skills-section">
      <h2 className="text-center mb-5">Skills & Technologies</h2>
      <Row>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </Row>
    </Container>
  );
};

export default SkillsSection;