import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../firebase-config';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      console.log('Login successful');
      localStorage.setItem('token', 'dummy');
      
      console.log('Before navigating to /candidate/home');
      navigate('/candidate/home');
      console.log('After navigating to /candidate/home');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            autoComplete="email" // Suggests that this field is for email
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            autoComplete="current-password" // Suggests that this field is for the current password
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
