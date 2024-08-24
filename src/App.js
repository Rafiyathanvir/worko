import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import CandidateHome from './components/CandidateHome';

const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem('dummy')); // Example auth check

  return (
    <Router>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/candidate/home" 
          element={isAuthenticated ? <CandidateHome /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={<Navigate to="/index" />} />
      </Routes>
    </Router>
  );
};

export default App;
