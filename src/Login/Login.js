import { Button, TextField } from '@mui/material'
import React from 'react'
import {Register} from "./Register/Register";

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
          <form action="">
        
        <TextField 
        type="email" 
        label="Email" 
        required
        variant="standard" />
        <br/>
        <TextField 
        type="password" 
        label="Password" 
        required
        variant="standard" />
        <br />
        <input style={{width:'50px'}} type="submit" label="Submit" />
        <br />
        <Button variant="contained" onClick={{Register}}>please Register</Button>

      </form>
    </div>
  )
}

export default Login