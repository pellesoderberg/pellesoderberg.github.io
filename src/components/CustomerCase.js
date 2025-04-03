import React from 'react';

function CustomerCase({ image, title, description, link }) {
  return (
    <div className="case-card">
      <img src={image} alt={title} className="case-image" />
      <div className="case-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default CustomerCase;