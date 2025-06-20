import React, { useState } from 'react';
import './Contact.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5 contact-heading">
          <span className="background-text">CONTACT</span>
          <span className="foreground-text">CONTACT ME</span>
        </h2>
        <Form 
          className="contact-form"
          name="contact" 
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Anti-bot hidden field */}
          <input type="hidden" name="bot-field" />

          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-pill"
                required
              />
            </Col>
            <Col md={6} className="mt-3 mt-md-0">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="rounded-pill"
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="rounded-pill"
                required
              />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="rounded-4"
                required
              />
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" variant="outline-success" className="rounded-pill px-4">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
