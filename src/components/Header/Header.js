import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

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

export default function Header(props) {
    const { navigateBack, title } = props;
    return (
        <AppBar
            position="sticky"
            sx={{ background: "#151515", boxShadow: "none" }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px' }}>
                <Link to="/" style={{ textDecoration: "none", display: 'flex' }}>
                    {navigateBack && <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 1, color: 'white' }}
                    >
                        <ArrowBackIcon />
                    </IconButton>}
                    <div variant="h5" component="div" style={{
                        flexGrow: 1,
                        color: 'white',
                        display: 'flex',
                        fontSize: '2vh',
                        alignItems: 'center'
                    }}>
                        {title}
                    </div>
                </Link>
                <LoginButton variant="contained" disableRipple>
                    <div>Login</div>
                </LoginButton>
            </Toolbar>
        </AppBar>
    );
}
