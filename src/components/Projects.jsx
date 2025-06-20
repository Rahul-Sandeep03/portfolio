import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import project1Img from '../assets/project1.webp';
import project2Img from '../assets/project2.webp';
import project3Img from '../assets/project3.webp';

const Projects = () => (
  <section id="projects" className="py-5 bg-light">
    <Container>
      <div className="position-relative text-center mb-5">
          <h2 className="edu-heading-bg">PROJECTS</h2>
          <h2 className="edu-heading-main">PROJECTS</h2>
        </div>
      <Row>
        {[
          {
            title: 'Tattoo Studio Website',
            img: project1Img,
            desc: 'I designed and developed a responsive and visually engaging website for GlamInk Tattoo Studio...',
            link: 'https://classy-granita-8625cf.netlify.app/',
          },
          {
            title: 'Dance Studio Website',
            img: project2Img,
            desc: 'Designed and developed a fully responsive Dance Studio Website using React.js and Bootstrap...',
            link: 'https://rahul-sandeep03.github.io/dance-studio/',
          },
          {
            title: 'Employee Management System',
            img: project3Img,
            desc: 'Developed a fully responsive Employee Management System frontend using React.js...',
            link: 'https://venerable-taiyaki-d2a184.netlify.app/',
          },
        ].map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={project.img}
                alt={project.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.desc}</Card.Text>
                <Button
                  variant="outline-success"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
