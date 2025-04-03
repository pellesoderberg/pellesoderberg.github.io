import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate web developer with over [X] years of experience in creating 
              beautiful, functional websites for small and medium-sized businesses. I specialize 
              in helping local companies establish their online presence and reach more customers.
            </p>
            <p>
              My approach combines technical expertise with an understanding of business needs. 
              I believe that a great website should not only look good but also help you achieve 
              your business goals.
            </p>
            <p>
              I work closely with each client to understand their unique requirements and deliver 
              custom solutions that meet their specific needs. My focus is on creating websites that 
              are fast, responsive, and easy to use.
            </p>
            <h3>My Skills</h3>
            <ul>
              <li>Responsive Web Design</li>
              <li>E-Commerce Development</li>
              <li>Content Management Systems</li>
              <li>SEO Optimization</li>
              <li>Website Maintenance</li>
            </ul>
          </div>
          <div>
            <img src="/images/hero.jpg" alt="Your Name" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;