import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';
import HeroPic from '../Img/hero2.jpg'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center text-center text-md-left">
          <Col md={6}>
            <h1 className="mb-3">Logan Pederson</h1>
            <h2 className="mb-4">Full Stack Web Developer</h2>
            <p>
              Crafting exceptional web experiences with modern technologies.
            </p>
            <Button
              className="mt-3"
              variant="outline-primary"
              href="#portfolio"
            >
              View My Resume
            </Button>
            <Button
              className="mt-3"
              variant="outline-primary"
              href="#portfolio"
            >
              View My Github
            </Button>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <img
              src={HeroPic}
              alt="Web Design Sticker Image"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;