import React from 'react';

function Login() {
  return (
    <div className="Login-container flex  w-9/12 h-3/4 bg-slate-300 ">
      <div className="login-left-container w-1/2">
        <h1 className="login-left-heading">Log in / Sign up</h1>
        <div className="email-left">Email</div>
        <div className="password-left">password</div>
        <div className="signin-with-google">sign google</div>
      </div>
      <div className="login-right-container bg-slate-200 grow w-1/2">right</div>
    </div>
  );
}

export default Login;
