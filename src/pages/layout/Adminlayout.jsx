import React from 'react';
import './Adminlayout.css';
import Navbar from './navbar.jsx';
import Content from './Content.jsx';
import Sidebar from './Sidebar.jsx';
const Adminlayout = () => {
  return (
    <div className="layout-container">
    <Navbar/>
    <div className="layout-main">
      <Sidebar />
      <div className="contentparent">
        <Content />
      </div>
    </div>
  </div>
  )
}

export default Adminlayout
