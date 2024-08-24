import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signOut } from '../firebase-config';
import SearchComponent from '../components/SearchComponent';
import ListCard from '../components/ListCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const referralsData = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', company: 'Tech Innovations' },
  { id: 2, name: 'Jane Smith', position: 'Marketing Manager', company: 'HealthFirst' },
  { id: 3, name: 'Alice Johnson', position: 'Financial Analyst', company: 'FinServices' },
  { id: 4, name: 'Bob Brown', position: 'UX Designer', company: 'Creative Solutions' },
  { id: 5, name: 'Emily Davis', position: 'Product Manager', company: 'Tech Innovations' },
];

const servicesData = [
  { id: 1, name: 'Resume Review', description: 'Get your resume reviewed by professionals' },
  { id: 2, name: 'Interview Coaching', description: 'Prepare for your upcoming interviews with expert coaching' },
  { id: 3, name: 'Career Counseling', description: 'One-on-one sessions to guide your career path' },
  { id: 4, name: 'LinkedIn Profile Optimization', description: 'Enhance your LinkedIn profile for better visibility' },
  { id: 5, name: 'Networking Events', description: 'Join exclusive networking events for job seekers' },
];

const CandidateHome = () => {
  const [referrals, setReferrals] = useState(referralsData);
  const [services, setServices] = useState(servicesData);
  const [filteredReferrals, setFilteredReferrals] = useState(referralsData);
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  const handleSearch = (query) => {
    const referralResults = referrals.filter(referral =>
      referral.name.toLowerCase().includes(query.toLowerCase()) ||
      referral.position.toLowerCase().includes(query.toLowerCase()) ||
      referral.company.toLowerCase().includes(query.toLowerCase())
    );
    const serviceResults = services.filter(service =>
      service.name.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredReferrals(referralResults);
    setFilteredServices(serviceResults);

    console.log('Filtered Referrals:', referralResults);
    console.log('Filtered Services:', serviceResults);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('isLoggedIn');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Candidate Home</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </header>
      <SearchComponent onSearch={handleSearch} />
      <div className="row">
        <div className="col-md-6 mb-4">
          <ListCard title="Referrals" data={filteredReferrals} />
        </div>
        <div className="col-md-6 mb-4">
          <ListCard title="Services" data={filteredServices} />
        </div>
      </div>
    </div>
  );
};

export default CandidateHome;
