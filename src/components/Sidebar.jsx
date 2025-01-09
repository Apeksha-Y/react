import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Sidebar</h3>
      <ul>
        <li><a href="#link1">Link 1</a></li>
        <li><a href="#link2">Link 2</a></li>
        <li><a href="#link3">Link 3</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;