import React, { useState } from 'react';
import { Navbar } from "./Navbar";
import { Details } from './Details';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulating a successful login
    if (email === 'LoonsLab' && password === '12345') {
      setLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2><button onClick={handleLogout}>Logout</button></h2>
        <Navbar />
        <Details />
      </div>
    );
  }

  return (
    <div className="LoginForm">
      <form>
        <h2>Login Page</h2>
        <input
          type="email"
          placeholder="User Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>..................................................................</p>
        <p>© 2023 Chandima Rathnayake</p>
      </form>
    </div>
  );
};

export default LoginForm;
