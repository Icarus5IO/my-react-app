import React, { useState } from "react";
import './AddCarForm.css';

const AddCarForm = ({ onAddCar }) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [transmission, setTransmission] = useState('');
    const [status, setStatus] = useState('available'); // Default status

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Form validation
        if(!make || !model || !year || !color) {
            alert('Please fill in all required feilds.');
            return;
        }

        const newCar = {
            make,
            model,
            year: parseInt(year), // Convert year to a number
            color,
            transmission,
            status,
        };
        
        onAddCar( newCar ); 
        resetForm(); 
    };

    const resetForm = () => {
        setMake('');
        setModel('');
        setYear('');
        setColor('');
        setTransmission('');
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="form-header">Add New Car</h2>
            <label className="form-label" htmlFor="make">Make:</label>
            <input className="form-input" type="text" id="make" value={make} onChange={(e) => setMake(e.target.value)} required/>

            <label className="form-label" htmlFor="model">Model:</label>
            <input className="form-input" type="text" id="model" value={model} onChange={(e) => setModel(e.target.value)} required />

            <label className="form-label" htmlFor="year">Year:</label>
            <input className="form-input" type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} required />

            <label className="form-label" htmlFor="color">Color:</label>
            <input className="form-input" type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} required />

            <label className="form-label" htmlFor="transmission">Transmission:</label>
            <select className="form-select" id="transmission" value={transmission} onChange={(e) => setTransmission(e.target.value)} required>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
            </select>

            <label className="form-label" htmlFor="status">Status:</label>
            <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
            </select>

            <button className="form-submit" type="submit">Add Car</button>
        </form>
    );
};


export default AddCarForm;