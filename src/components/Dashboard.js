import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dashboard = ({ carData, handleSearch }) => { // Receive carData as a prop
  const [carCount, setCarCount] = useState({
    available: 0,
    sold: 0,
  });

  useEffect(() => {
    // Calculate car count by status on component mount or carData update
    const availableCount = carData.filter((car) => car.status === 'available').length;
    const soldCount = carData.filter((car) => car.status === 'sold').length;
    setCarCount({ available: availableCount, sold: soldCount });
  }, [carData]);

  return (
    <div className="dashboard">
      <h1>Car Dealership Dashboard</h1>
      <div className="car-status-counts">
        <p>Available: {carCount.available}</p>
        <p>Sold: {carCount.sold}</p>
      </div>
      
      <div className="quick-access-buttons">
        <Link to="/add-car"> {/* Link to Add Car route */}
          <button>Add New Car</button>
        </Link>
        <button onClick={() => handleSearch()}>Search Inventory (placeholder)</button> 
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  carData: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default Dashboard;
