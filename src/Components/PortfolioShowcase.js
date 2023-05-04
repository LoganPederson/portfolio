import React from 'react';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import calc from '../Img/simcompanies_800x400.png';
import popularNews from '../Img/popular_news_800x400.png';
import farmrpg from '../Img/farmrpg.png'
import './PortfolioShowcase.css'
import { Fade } from 'react-reveal';

const projects = [
  {
    title: 'Popular News',
    description: [
      'Full-stack web application',
      'Real-time news from third-party API',
      'Robust user authentication',
      'Personalized user experience with AWS RDS',
      'Hosted on Ubuntu EC2, served by Nginx',
    ],
    imageUrl: popularNews,
    projectUrl: 'https://popularnews.org',
  },
  {
    title: 'SimCompanies Calculator',
    description: [
      'Full-stack web application',
      'Robust user authentication',
      'Personalized user experience with AWS RDS',
      'Real-time news from third-party API',
      'Hosted on Ubuntu EC2, served by Nginx',
    ],
    imageUrl: calc,
    projectUrl: 'https://simcompaniescalculator.org',
  },
  {
    title: 'FarmRPG Bot',
    description: [
      'Python OpenCV bot',
      'Tkinter GUI',
      'Automates repetitive gameplay loops',
      'Thousands of times more efficient than a human',
      'Utilizes Python threading',
    ],
    imageUrl: farmrpg,
    projectUrl: 'https://github.com/LoganPederson/FarmRPG_Bot',
  },
];

const ProjectShowcase = () => {
  return (
    <Container className='portfolio-showcase'>
      <Fade delay={1000} duration={1500}>
      <h2 className="portfolio-showcase text-center mb-5">Project Showcase</h2>
      </Fade>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} style={{paddingBottom:'17px'}}>
            <Fade right delay={1400+(index * 400)} duration={1300}>
              <Card className="mb-4" style={{ minHeight: '100%'}}>
                <Card.Img variant="top" src={project.imageUrl} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <ListGroup variant="flush">
                    {project.description.map((point, i) => (
                      <ListGroup.Item key={i}>{point}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Card.Link href={project.projectUrl} target="_blank">
                    View Project
                  </Card.Link>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ProjectShowcase;