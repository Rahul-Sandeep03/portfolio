import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import './Hero.css';
import profileImg from '../assets/profile.webp';
import sampleVideo from '../assets/sample.mp4';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="home" className="hero d-flex align-items-center" style={{ minHeight: '100vh', backgroundColor: '#17c3b2' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Rahul Sandeep"
              className="img-fluid rounded-circle hero-img"
              style={{ width: '280px', height: '280px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={7} className="text-white text-md-start text-center">
            <p className="mb-1 fs-4">I'm</p>
            <h1 className="display-4 fw-bold text-outline">Rahul Sandeep Muchipalli</h1>
            <h2 className="typed-text mt-2">AI-Enabled Full Stack Developer</h2>
            <div className="mt-4 d-flex flex-wrap justify-content-md-start justify-content-center align-items-center gap-3">
              <a href="/Rahul_Sandeep_Resume.pdf" download className="btn btn-outline-light px-4">
                Download CV
              </a>
              <Button
                variant="light"
                onClick={() => setShowVideo(true)}
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  padding: 0,
                }}
              >
                <i className="bi bi-play-fill fs-4 m-0"></i>
              </Button>
              <span className="text-white">Play Video</span>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for video */}
      <Modal show={showVideo} onHide={() => setShowVideo(false)} size="lg" centered>
        <Modal.Body className="p-0">
          <video controls autoPlay width="100%">
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </section>
  );
}
