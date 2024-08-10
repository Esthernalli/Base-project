import React from 'react';
import girlImage from './media/girl.png'; // Corrected path
import googleLogo from './media/google-logo.png'; // Corrected path
import appleLogo from './media/apple-logo.png'; // Corrected path
import './SignIn.css'; // Ensure the correct path to your CSS

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="left-side">
        <div className="logo">
          <div className="circle"></div>
          <p>Base</p>
        </div>
        <h2>Generate detailed reports with just one click</h2>
        <div className="mode-switch">
          <div className="switch">
            <input type="checkbox" id="switch" />
            <label htmlFor="switch"></label>
          </div>
        </div>
        <img src={girlImage} alt="Girl" className="left-side-img" />
      </div>
      <div className="right-side">
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
        <div className="buttons">
          <button className="google">
            <img src={googleLogo} alt="Google Logo" className="social-logo" />
            Sign in with Google
          </button>
          <button className="apple">
            <img src={appleLogo} alt="Apple Logo" className="social-logo" />
            Sign in with Apple
          </button>
        </div>
        <form action="#">
          <div className="input-field">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" />
          </div>
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <a href="#">Register here</a></p>
        <div className="social-links">
          <a href="#" className="link"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="link"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className="link"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#" className="link"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
