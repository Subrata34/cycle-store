import { Button, TextField } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Please Registration :</h1>
      <form action="">
        <TextField 
        type="name" 
        label="Name" 
        style={{borderRadius:'10px'}}
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
        <br />
        <Button variant="contained" style={{paddingLeft:'80px',paddingRight:'80px'}}>Submit</Button>

      </form>
    </div>
  );
};

export default Register;
