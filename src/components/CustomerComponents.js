import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Alert from '@mui/material/Alert';

export const FilterButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    border: "none",
    color: "white",
    height: "2rem",
    fontWeight: '500',
    backgroundColor: "#626F8A",
    borderColor: "#0A0C12",
    "&:hover": {
        backgroundColor: "#27304E",
        border: "none"
    },
    "&:active": {
        backgroundColor: "#27304E",
        boxShadow: "none",
        border: "none"
    },
    "&:focus": {
        boxShadow: "0 0 0 0.1rem rgba(107, 147, 242,.5)",
        border: "none"
    }
});

export const SaveButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    border: "none",
    color: "white",
    height: "2rem",
    fontWeight: '500',
    backgroundColor: "#626F8A",
    borderColor: "#0A0C12",
    "&:hover": {
      backgroundColor: "#27304E",
      border: "none"
    },
    "&:active": {
      backgroundColor: "#27304E",
      boxShadow: "none",
      border: "none"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.1rem rgba(107, 147, 242,.5)",
      border: "none"
    },
    "&:disabled" : {
      backgroundColor: 'grey',
    }
  });
  

export const QuestionLinkButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    padding: '5px',
    height: '89%',
    width: '60%',
    border: 'none',
    lineHeight: 1,
    backgroundColor: '#0A0C12',
    borderColor: '#0A0C12',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: '#353535',
        borderColor: '#0A0C12',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0A0C12',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,0,0,.5)',
    },
});

export const AlertMessage = () => {
    return (
        <Alert sx={{
            background: "#32CD30", width: '100%',
            maxWidth: '400px', margin: '10px',
            position: 'fixed', bottom: '10px'
          }} severity="success" variant="filled" color="success">
            This is a success alert — check it out!
        </Alert>
    )
}

export const LogoutButton = styled(Button)({
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

export const LoginButton = styled(Button)({
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