import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="mb-3">Logan Pederson</h5>
            <p>Email: <a href="mailto:LoganPederson@gmail.com">LoganPederson@gmail.com</a></p>
            <p>Phone: 321-370-4064</p>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Social Media</h5>
            <p>
              <a href="https://github.com/LoganPederson" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/logan-p-19527a82/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">About Me</h5>
            <p>
              I'm a passionate software developer with experience in various web technologies. I love
              solving complex problems and creating user-friendly applications.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="text-muted small mt-3">
              &copy; {new Date().getFullYear()} Logan Pederson. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;