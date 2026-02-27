// Login.jsx
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="main-heading">
          Decide faster so you can do more
        </h1>
        <p className="sub-text">
          Join our community and manage your workflow efficiently.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Log in</h2>

          <label>Email</label>
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="6+ characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;