import React, { useState, useEffect } from "react";
import CarList from './CarList';
import AddCarForm from './AddCarForm';
import SignInForm from './SignInForm';
import SignOutButton from './SignOutButton';
import { Link } from 'react-router-dom';
import InitialCarData from './InitialCarData';
import "./InvManagement.css";

const InventoryManagement = () => {
    const [carData, setCarData] = useState(InitialCarData());
    const MAX_INVENTORY_SIZE = 30;
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user was previously logged in
        const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedLoggedInStatus === 'true');
    }, []);

    const handleAddCar = (newCar) => {
        if (carData.length < MAX_INVENTORY_SIZE) {
            setCarData([...carData, newCar]);
        } else {
            console.error("Inventory capacity reached. Cannot add more cars.")
        }
    };

    const handleRemoveCar = (carId) => {
        const filteredCarData = carData.filter((car) => car.id !== carId);
        setCarData(filteredCarData);
    };

    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();
        setSearchTerm(searchText);
    };
    

    const filteredCarData = carData.filter((car) => {
        if (!car || !car.make || !car.model || !car.year || !car.status) {
            console.log('Found invalid car object:', car);
            return false;
        }
    
        const searchText = searchTerm.toLowerCase();
        return (
            car.make.toLowerCase().includes(searchText) ||
            car.model.toLowerCase().includes(searchText) ||
            car.year.toString().includes(searchText) ||
            car.status.toLowerCase().includes(searchText)
        );
    });
    

    const handleSignIn = () => {
        setIsLoggedIn(true); 
        localStorage.setItem('isLoggedIn', true); 
    };
    
    const handleSignOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <div className="dashboard">
            <h1 className="dashboard-header">Car Dealership Inventory</h1>
            {isLoggedIn ? (
                <>
                    <AddCarForm onAddCar={handleAddCar} />
                    <div className="quick-access-buttons">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search Inventory"
                            onChange={(e) => handleSearch(e)}
                        />
                    </div>
                    <CarList carData={filteredCarData} handleRemoveCar={handleRemoveCar} />
                </>
            ) : (
                <SignInForm onSignIn={() => setIsLoggedIn(true)} />
            )}
            {isLoggedIn && <SignOutButton onSignOut={handleSignOut} />}
        </div>
    );
};

export default InventoryManagement;
