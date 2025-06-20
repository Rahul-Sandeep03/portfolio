import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Education() {
  const educationData = [
    {
    degree: 'Full Stack Development Certification',
    institution: 'ExcelR Solutions',
    duration: '2024 - 2025',
    details:
      'Completed comprehensive training in Full Stack Development including HTML, CSS, JavaScript, React.js, Node.js, Java, Spring Boot, MySQL,Microservices, and project-based learning.',
  },
    {
      degree: 'Bachelor of Mechanical Engineering',
      institution: 'PSCMR College of Engineering and Technology, Vijayawada',
      duration: '2020 - 2024',
      details:
        'Focused on core mechanical concepts including thermodynamics, machine design, and automation with real-world applications and project work.',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: ' Kakarapatti Bhavanarayana College, Vijayawada',
      duration: '2018 - 2020',
      details:
        'Completed intermediate education with specialization in Mathematics, Physics, and Chemistry with a strong academic performance.',
    },
    {
      degree: 'High School',
      institution: ' Harpers High School, Vijayawada',
      duration: '2017 - 2018',
      details:
        'Achieved academic excellence with a focus on mathematics and science subjects, securing strong foundational knowledge.',
    },
    
  ];

  return (
   <section id="education" className="py-5 bg-white position-relative" style={{ overflow: 'hidden' }}>

      <Container>
        <div className="position-relative text-center mb-5">
          <h2 className="edu-heading-bg">EDUCATION</h2>
          <h2 className="edu-heading-main">EDUCATION</h2>
        </div>

        <Row className="justify-content-center">
          <Col md={8}>
            <h4 className="mb-4">My Education</h4>
            <div className="timeline">
              {educationData.map((edu, index) => (
                <div className="timeline-item mb-4" key={index}>
                  <div className="timeline-icon" />
                  <div className="timeline-content">
                    <h5><strong>{edu.degree}</strong></h5>
                    <p><strong>{edu.institution}</strong> | {edu.duration}</p>
                    <p>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .edu-heading-bg {
          font-size: 70px;
          font-weight: 900;
          color: rgba(0, 0, 0, 0.05);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: 0;
        }

        .edu-heading-main {
          color: #17c3b2;
          font-weight: 700;
          font-size: 40px;
          position: relative;
          z-index: 1;
        }

        .timeline {
          position: relative;
          padding-left: 30px;
          border-left: 2px solid #17c3b2;
        }

        .timeline-icon {
          width: 12px;
          height: 12px;
          background-color: #17c3b2;
          border-radius: 50%;
          position: absolute;
          left: -7px;
          margin-top: 8px;
        }

        .timeline-content {
          margin-left: 20px;
        }
      `}</style>
    </section>
  );
}
