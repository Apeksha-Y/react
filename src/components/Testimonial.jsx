import React from 'react';
import './Testimonial.css';

const Testimonial = ({ name, feedback }) => {
  return (
    <div className="testimonial">
      <p>"{feedback}"</p>
      <footer>- {name}</footer>
    </div>
  );
};

export default Testimonial;
