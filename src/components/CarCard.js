import React from "react";
import PropTypes from "prop-types";
import './CarCard.css';

const CarCard = ({ car, onRemoveCar }) => {
    return (
        <div className="car-card">
            <h3>{car.make} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Color: {car.color}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Status: {car.status === 'available' ? `Available (${car.availableCount})` : `Sold (Next Available: ${car.nextAvailableDate})`} </p>
            <button onClick={() => onRemoveCar(car.id)}>Remove Car</button>
        </div>
    );
};

CarCard.propTypes = {
    car: PropTypes.object.isRequired,
    onRemoveCar: PropTypes.func.isRequired
};

export default CarCard;