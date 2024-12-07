import React from "react";
import "./Login.css";
import login from "./../../assets/login/loginimg.png";

const Login = () => {
  return (
    <div className="loginparent">
      <div className="logimage">
        <img src={login} alt="" />
      </div>
      <form action="" className="logform">
        <div className="logtitle">
          <h1>Welcome Back</h1>
          <p>Please Login To Continue</p>
        </div>
        <div className="loginputcon">
          <input
            type="text"
            className="lname"
            placeholder="Username or email"
          />
          <input type="text" className="lpwd" placeholder="password" />
          <div className="lftpwd">
            <span>Forgot Password?</span>npm install react-icons
          </div>
        </div>
        <button className="logbtn">Login</button>
        <p className="logrights">2024 | all rights reserved</p>
      </form>
    </div>
  );
};

export default Login;
