import React, { useEffect, useState } from 'react';
import Toolbar from "@mui/material/Toolbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut  } from "firebase/auth";
import app from "../../firebase";
import LogoutIcon from '@mui/icons-material/Logout';
import "../../App";

const LogoutButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.5vh",
    padding: "6px 12px",
    height: "100%",
    width: '30%',
    maxWidth: "130px",
    border: "none",
    lineHeight: 1.5,
    backgroundColor: "#FF2511",
    fontWeight: 600,
    "&:hover": {
        backgroundColor: "#D01110",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#FF2511",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(255, 0, 0, 0.5)",
    },
});

const LoginButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.5vh",
    padding: "6px 12px",
    height: "100%",
    width: '20%',
    maxWidth: "100px",
    border: "none",
    lineHeight: 1.5,
    color: '#000000',
    backgroundColor: "#FFFFFF",
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#F5F5F5',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(202, 202, 202, 0.705)',
    },
});

export default function Header(props) {
    const { navigateBack, title, user, setUser, signedIn, setSignedIn  } = props;

    const handleUserLogin = () => {
        console.log("user tried to log in");
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        if (app) {
            signInWithPopup(auth, provider).then((result) => {
                const {
                    displayName: name,
                    email,
                    uid,
                } = result.user;
                setUser({
                    email: email,
                    name: name,
                    uid: uid
                });
                setSignedIn(true);
            }).catch((error) => {
                console.log(error);
                setSignedIn(false);
            })
        }
    };

    const handleUserLogOut = () => {
        console.log("user tried to log out");
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
            setSignedIn(false);
        }).catch((error) => {
            console.log(error);
            setSignedIn(true);
        })
    }

    useEffect(() => {
        console.log(user);
    }, [user]);


    return (
        <AppBar
            position="sticky"
            sx={{ background: "#151515", boxShadow: "none" }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px' }}>
                <Link to="/" style={{ textDecoration: "none", display: 'flex', maxWidth: '65%', }}>
                    {navigateBack && <IconButton
                        size="large"
                        edge="start"
                        sx={{ mr: 1, color: "#ffffff", transform: 'scale(1.2)' }}
                    >
                        <ArrowBackIcon />
                    </IconButton>}
                    <div variant="h5" component="div" style={{
                        fontFamily: title === 'dsalgo!' ? 'Reem Kufi' : '',
                        // flexGrow: 1,
                        color: '#ffffff',
                        display: 'flex',
                        fontSize: title === 'algo!' ? '2em': '1.4em',
                        fontWeight: 600,
                        letterSpacing: '0.05rem',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                        overflow: 'auto',
                        textOverflow: 'ellipsis',
                    }}>
                        {title}
                    </div>
                </Link>
                {signedIn ? <LogoutButton variant="contained" disableRipple onClick={handleUserLogOut} endIcon={<LogoutIcon/>}>
                    <div>{user.name}</div>
                </LogoutButton> : <LoginButton variant="contained" disableRipple onClick={handleUserLogin}>
                    <div>Login</div>
                </LoginButton> }
            </Toolbar>
        </AppBar>
    );
}
