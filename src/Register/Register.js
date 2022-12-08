import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Please Registration :</h1>
      <form action="">
        <TextField 
        type="name" 
        label="Name" 
        variant="standard" />
        <TextField 
        type="email" 
        label="Email" 
        variant="standard" />
        <TextField 
        type="password" 
        label="Password" 
        variant="standard" />
        <TextField 
        type="password" 
        label="Re-type Password" 
        variant="standard" />

      </form>
    </div>
  );
};

export default Register;
