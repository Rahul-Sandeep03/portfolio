import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(prev => !prev);
  const handleClose = () => setExpanded(false);

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" onClick={handleClose}>
          <span style={{ color: '#00d9a5', fontWeight: 'bold' }}>Rahul</span>
          <span style={{ color: '#343a40', fontWeight: 'bold' }}>Sandeep</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            {['home', 'about', 'education', 'projects', 'contact'].map((id, index) => (
              <Nav.Link key={index} href={`#${id}`} onClick={handleClose}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Nav.Link>
            ))}
            <Nav.Item className="ms-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulsandeep03@gmail.com&su=Hiring%20Opportunity&body=Hi%20Rahul,%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20you%20for%20a%20project.%20Please%20get%20in%20touch%20with%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success rounded-pill px-4"
                onClick={handleClose}
              >
                Hire Me
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
