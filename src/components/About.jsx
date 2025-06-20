// src/components/About.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './About.css';
import profileImage from '../assets/profile.webp';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center section-title">
          <span className="text-background">ABOUT</span>
          <span className="text-foreground">ABOUT ME</span>
        </h2>
        <div className="row align-items-center mt-5" data-aos="fade-up">
          <div className="col-md-5 text-center" data-aos="zoom-in">
            <img
              src={profileImage}
              alt="Profile"
              className="img-fluid profile-img"
            />
          </div>
          <div className="col-md-7" data-aos="fade-left">
            <h3 className="mb-3">AI-Enabled Full Stack Developer</h3>
            <p className="text-muted">
             AI-Enabled Full Stack Developer skilled in building intelligent, end-to-end web applications using React, Java, Spring Boot, and MySQL.
Proficient in integrating AI-driven features to enhance user experience and system efficiency.
Focused on delivering scalable, secure, and user-centric solutions with modern development practices.
            </p>
            <div className="row mb-4">
              <div className="col-sm-6">
                <p><strong>Name:</strong> Rahul Sandeep Muchipalli</p>
                <p><strong>Degree:</strong> B-Tech</p>
                <p><strong>Phone:</strong> +91 63045 97929</p>
                <p><strong>Address:</strong> 6th cross, Btm Layout, Banglore </p>
              </div>
              <div className="col-sm-6">
                <p><strong>Birthday:</strong> 08 July 2003</p>
                <p><strong>Experience:</strong> Fresher</p>
                <p><strong>Email:</strong> rahulsandeep03@gmail.com</p>
                <p><strong>Freelance:</strong> Available</p>
              </div>
            </div>
            <div className="d-flex gap-3">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulsandeep03@gmail.com&su=Hiring%20Opportunity&body=Hi%20Rahul,%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20you%20for%20a%20project.%20Please%20get%20in%20touch%20with%20me."
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-success rounded-pill px-4"
>
  Hire Me
</a>


             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
