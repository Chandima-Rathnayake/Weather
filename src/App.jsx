import './App.css'
import { Details } from './components/Details';
import { Navbar } from './components/Navbar';
import LoginForm from './components/LoginForm';
import React, { useState } from 'react';


function App() {
    const [isLoggedIn, setLoggedIn] = useState(true);
  
    const handleLogin = () => {
      // Perform login logic and set the isLoggedIn state to true
      setLoggedIn(true);
    };
  
    return (
      <div>
        {isLoggedIn ? (
          <>
            <Navbar />
            <Details />
          </>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    );
  }
  
  export default App;
  
