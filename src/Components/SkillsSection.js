import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SkillsSection.css";
import nginx from "../Img/nginx.png"
import auth0 from "../Img/auth0.png"
import aws from "../Img/aws.png"
import bootstrap from "../Img/bootstrap.png"
import crossdevice from "../Img/crossdevice.png"
import fastapi from "../Img/fastapi.png"
import git from "../Img/git.png"
import html from "../Img/html.png"
import react from "../Img/react.png"
import restapi from "../Img/restapi.png"
import sql from "../Img/sql.png"
import javascript from "../Img/javascript.png"



const Skill = ({ icon, name }) => (
  <Col xs={6} sm={4} md={3} lg={2} className="mb-4 text-center">
    <img src={icon} alt={name} className="skill-icon mb-2" />
    <h5>{name}</h5>
  </Col>
);

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: react },
    { name: "FastAPI", icon: fastapi  },
    { name: "AWS", icon: aws },
    { name: "Nginx", icon: nginx },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Auth0", icon: auth0 },
    { name: "HTML/CSS", icon: html },
    { name: "JavaScript", icon: javascript },
    { name: "SQL", icon: sql },
    { name: "Git", icon: git },
    { name: "RESTful API", icon: restapi },
    { name: "Cross-device Compatibility", icon: crossdevice },
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