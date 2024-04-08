import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InventoryManagement from './components/InventoryManagement';
import Dashboard from './components/Dashboard'; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InventoryManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;