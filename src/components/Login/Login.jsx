import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate('/dashboard'); 
    } else {
      alert("Palihog butangi og username ug password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Usbon nato ang text para "Log in" parehas sa picture */}
        <h2 className="login-title">Log in</h2>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            {/* Gikuha ang icon para mas limpyo tan-awon */}
            <input 
              type="text" 
              placeholder="Email or Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="button-group">
            {/* Himoon natong dako ang Login button */}
            <button type="submit" className="login-btn">Log in</button>
          </div>
          
          <button type="button" className="forgot-btn">Forgot Password?</button>
        </form>
      </div>
    </div>
  );
};

export default Login;