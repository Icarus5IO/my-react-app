import React, { useState } from 'react';
import './SignIn.css';

const SignInForm = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const validCredentials = username === 'admin' && password === 'password123'; // Simulated validation

    if (validCredentials) {
        onSignIn(); // Call a callback function in InventoryManagement to handle successful login (optional)
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type="submit">Sign In</button>
    </form>
  );
};


export default SignInForm;