import React from 'react';
import InputBase from "@mui/material/InputBase";
import Button from '@mui/material/Button';
import { alpha, styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const ValidationTextField = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      color: 'white',
      borderRadius: 4,
      position: "relative",
      backgroundColor: "none",
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "100%",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow"
      ]),
      "&:focus": {
        borderLeftWidth: 6,
        boxShadow: `${alpha('#ffffff', 0.25)} 0 0 0 0.2rem`,
        borderColor: "white"
      }
    }
}));

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    // fontSize: 16,
    borderRadius: 4,
    padding: "10px 12px",
    border: '1px solid',
    lineHeight: 1.5,
    // width: "100%",
    // margin: '10px',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    '&:hover': {
      backgroundColor: '#F5F5F5',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(202, 202, 202, 0.705)',
    },
  });

const TextButton = styled(Button)({
    textTransform: "none",
    fontSize: 16,
    border: "none",
    padding: "6px 12px",
    color: "#ffffff",
    lineHeight: 1.5
});

export default function Login() {
  return (
    <div className='login_container'
        style={{paddingTop: '10rem'}}
        >
        <div className='login-form'
            style={{
                width: '50vh',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}
        >
            <Typography color="white" variant="h5" sx={{textAlign: 'left', marginLeft: '10px'}}>Login</Typography>
            <ValidationTextField label="email" focused 
                placeholder='email'
                sx={{margin: '10px'}}
            />
            <ValidationTextField label="password" focused 
                placeholder='password'
                sx={{margin: '10px', color: 'white'}}
            />
            <BootstrapButton variant="contained" disableElevation disableRipple
                sx={{margin: '10px'}}
            >Sign In</BootstrapButton>
            <div className="text-btn" style={{display: 'flex', justifyContent: "space-between"}}>
                <TextButton disableRipple>Forget Password ?</TextButton>
                <TextButton disableRipple>Sign Up</TextButton>
            </div>
        </div>
    </div>
  );
}
