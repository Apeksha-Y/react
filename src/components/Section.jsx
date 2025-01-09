import React from 'react';
import './Section.css';

const Section = ({ title, content }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
