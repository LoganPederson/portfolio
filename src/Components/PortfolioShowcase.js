import React from 'react';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import calc from '../Img/simcompanies_800x400.png';
import popularNews from '../Img/popular_news_800x400.png';
import './PortfolioShowcase.css'

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
    title: 'Popular News',
    description: [
      'Full-stack web application',
      'Robust user authentication',
      'Personalized user experience with AWS RDS',
      'Real-time news from third-party API',
      'Hosted on Ubuntu EC2, served by Nginx',
    ],
    imageUrl: popularNews,
    projectUrl: 'https://popularnews.org',
  },
];

const ProjectShowcase = () => {
  return (
    <Container className='portfolio-showcase'>
      <h2 className="portfolio-showcase text-center mb-5">Project Showcase</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} style={{paddingBottom:'17px'}}>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ProjectShowcase;