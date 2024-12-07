import React from 'react'
import './Admin.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from './Protectedroute';
import Login from './login/Login';
import Adminlayout from './layout/Adminlayout';
const Admin = () => {
  return (
    <Router>
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route 
        path="/admin/*" 
        element={<Adminlayout />} 
      />
      {/* <Route 
        path="/admin/*" 
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
      /> */}
    </Routes>
  </Router>
  )
}

export default Admin
