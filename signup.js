import React, { useState } from "react";
import "./styles/signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (username && email && password) {
      alert("Registration successful!");
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src="" alt="" className="" />
      </div>
      <h2>Create an Account</h2>
      <p>Please fill in the form to create an account.</p>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p className="login-text">
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );
};

export default Signup;
