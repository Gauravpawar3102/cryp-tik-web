import React from 'react';

function Login() {
  return (
    <div className="Login-container flex">
      <div className="login-left-container">
        <h1 className="login-left-heading">Log in / Sign up</h1>
        <div className="email-left">Email</div>
        <div className="password-left">password</div>
        <div className="signin-with-google">sign in with google</div>
      </div>
      <div className="login-right-container">right</div>
    </div>
  );
}

export default Login;
