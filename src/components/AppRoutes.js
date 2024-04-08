import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import statement
import Welcome from "../Welcome";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome />} /> {/* Welcome route */}
                {/* Add other routes here */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;