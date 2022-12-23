import React from "react";

const Login = () => {
  return (
    <div>
      <h1>please Login </h1>
      
        <h1>plaease login </h1>
        <form action="">
        <TextField 
        type="email" 
        label="Email" 
        variant="standard" />
        <br/>
        <TextField 
        type="password" 
        label="Password" 
        required
        variant="standard" />
        <br />
        <input type="submit" label="Submit" />

      </form>
    </div>
  );
};

export default Login;
