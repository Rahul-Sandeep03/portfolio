import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer text-center text-white py-4">
      <Container>
        <div className="mb-3 social-icons">
          <a href="https://www.linkedin.com/in/rahul-sandeep-muchipalli-21876028b/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/Rahul-Sandeep03?tab=repositories" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.instagram.com/rahulsandeep_muchipalli?igsh=MXRiNnRtMDBneXllZQ==" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <p className="mb-0">
          © <strong>Rahul Sandeep Muchipalli</strong>. All Rights Reserved. Designed by <strong>Rahul</strong>
        </p>
      </Container>
    </footer>
  );
}
