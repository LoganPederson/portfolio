import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './PortfolioShowcase.css';
import SimCompanies from '../Img/simcompanies_800x275.png'
import PopularNews from '../Img/popular_news_800x275.png'


const PortfolioShowcase = () => {
  const projects = [
    {
      imageUrl: SimCompanies,
    },
    {
      imageUrl: PopularNews,
    },
    {
      imageUrl: 'https://via.placeholder.com/800x400',
    },
  ];

  return (
    <section className="portfolio-showcase">
      <Container>
        <h2 className="text-center mb-5">Project Showcase</h2>
        <Carousel>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={project.imageUrl}
                alt={`Slide showing ${project.title}`}
              />
              <Carousel.Caption>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default PortfolioShowcase;