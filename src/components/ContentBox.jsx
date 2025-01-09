import React from 'react';
import './ContentBox.css';

const ContentBox = ({ title, children }) => {
  return (
    <div className="content-box">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default ContentBox;
