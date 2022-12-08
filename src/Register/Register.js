import { TextField } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Please Registration :</h1>
      <form action="">
        <TextField 
        type="name" 
        label="Name" 
        style={{width:''}}
        required
        variant="standard" />
        <br/>
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
        <TextField 
        type="password" 
        label="Re-type Password" 
        required
        variant="standard" />
        <br />
        <input type="submit" label="Submit" />

      </form>
    </div>
  );
};

export default Register;
