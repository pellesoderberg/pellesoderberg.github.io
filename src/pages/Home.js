import React from 'react';
import Hero from '../components/Hero';
import CustomerCase from '../components/CustomerCase';

function Home() {
  const services = [
    {
      title: 'Website Design',
      description: 'Custom, responsive websites tailored to your business needs and brand identity.',
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Online stores that make selling your products online easy and efficient.',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your sites visibility and ranking in search engine results.',
    },
  ];

  const customerCases = [
    {
      image: '/images/customer-case-1.jpg',
      title: 'Local Restaurant',
      description: 'Designed and developed a responsive website for a local restaurant, including online reservations and menu display.',
      link: '#',
    },
    {
      image: '/images/customer-case-1.jpg',
      title: 'Retail Store',
      description: 'Built an e-commerce platform for a local retail store, enabling them to sell products online and manage inventory.',
      link: '#',
    },
    {
      image: '/images/customer-case-1.jpg',
      title: 'Professional Services',
      description: 'Created a professional website for a law firm, including service information and a client portal.',
      link: '#',
    },
  ];

  return (
    <>
      <Hero />
      
      <section className="services" id="services">
        <div className="container">
          <h2>My Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customer-cases" id="portfolio">
        <div className="container">
          <h2>Recent Projects</h2>
          <div className="cases-grid">
            {customerCases.map((customerCase, index) => (
              <CustomerCase 
                key={index}
                image={customerCase.image}
                title={customerCase.title}
                description={customerCase.description}
                link={customerCase.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;