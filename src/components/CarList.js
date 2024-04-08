import React from "react";
import PropTypes from "prop-types";
import CarCard from "./CarCard";

const CarList = ({ carData, handleRemoveCar }) => {
    return (
        <div className="car-list">
            <h2>Car Inventory</h2>
            {carData.map((car) => (
                <CarCard key={car.id} car={car} onRemoveCar={handleRemoveCar} />
            ))}
        </div>
    );
};

CarList.propTypes = {
    carData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    handleRemoveCar: PropTypes.func.isRequired,
};

export default CarList;