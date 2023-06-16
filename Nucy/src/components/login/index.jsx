import React, { useState } from "react";
import "./index.css";
import {  Link,useNavigate  } from 'react-router-dom';
import avatarImage from "../../assets/avatar.png";
import { userLogin } from "./login.api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here
    userLogin({
      name:username,
      password
    }).then((res)=>{
      localStorage.setItem('token',res.token)
       navigate('/product'); 
    }
      )
    .catch(err=>console.log(`login is failed ${err.name}`)) 
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleForgotPassword = () => {
    // Handle forgot password functionality here
    console.log("Forgot password");
  };

  return (
    <div className="login-container">
      <div className="avatar-container">
        <img src={avatarImage} alt="Avatar" className="avatar" />
      </div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="forgot-password">
          <a href="#" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>
        <button type="submit">Login</button>
        <p className="Signup-link">
          Not a member? <Link to="/register" >Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
