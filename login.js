import React, { useState } from "react";
import "./styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin" && password === "admin123") {
      alert("Login berhasil!");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="" alt="" className="logo" />
      </div>
      <h2>Welcome Back</h2>
      <p>Enter your username and password to continue.</p>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="password-container">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" className="toggle-password">
            👁
          </button>
        </div>
        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot password
          </a>
        </div>
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
      <div className="login-divider">Or login with</div>
      <div className="social-login">
        <button className="google-login">Google</button>
        <button className="apple-login">Apple</button>
      </div>
      <p className="register-text">
        Don't have an account? <a href="/register">Register</a>
      </p>
      <footer>
        <a href="/privacy-policy">Privacy Policy</a> •{" "}
        <a href="/terms-conditions">Term & Condition</a>
      </footer>
    </div>
  );
};

export default Login;
