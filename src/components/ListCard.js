import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const ListCard = ({ title, data = [] }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="mb-0">{title}</h4>
      </div>
      <ul className="list-group list-group-flush">
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item.id || item.name} className="list-group-item">
              {title === 'Referrals' ? (
                <div>
                  <strong>{item.name}</strong> - {item.position} at {item.company}
                </div>
              ) : (
                <div>
                  <strong>{item.name}</strong>: {item.description}
                </div>
              )}
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default ListCard;
