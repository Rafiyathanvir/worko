import React, { useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';

const mockCompanies = [
  { id: 1, name: 'Tech Innovations', industry: 'Technology' },
  { id: 2, name: 'HealthFirst', industry: 'Healthcare' },
  { id: 3, name: 'FinServices', industry: 'Finance' },
  { id: 4, name: 'Creative Solutions', industry: 'Design' },
  { id: 5, name: 'GreenTech', industry: 'Environment' },
];

const Index = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleSearch = (query) => {
    const results = mockCompanies.filter(company =>
      company.name.toLowerCase().includes(query.toLowerCase()) ||
      company.industry.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setShowAll(false); // Hide full list if searching
  };

  const handleShowAll = () => {
    setSearchResults(mockCompanies);
    setShowAll(true); // Show the full list
  };

  return (
    <div className="index-page">
      <header className="d-flex justify-content-between align-items-center p-3 bg-light">
        <h1>Welcome to Job Referral Platform</h1>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </header>
      <main className="container mt-4">
        <SearchComponent onSearch={handleSearch} />
        <button 
          onClick={handleShowAll} 
          className="btn btn-secondary mt-3"
        >
          Show All Companies
        </button>
        <div className="mt-4">
          {searchResults.length > 0 && !showAll ? (
            <ul className="list-group">
              {searchResults.map(company => (
                <li key={company.id} className="list-group-item">
                  {company.name} - {company.industry}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="list-group">
              {mockCompanies.map(company => (
                <li key={company.id} className="list-group-item">
                  {company.name} - {company.industry}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
