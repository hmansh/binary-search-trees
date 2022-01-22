import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Routes, Route, Link } from "react-router-dom";
import QuestionGrid from "./components/QuestionGrid";
import CardGrid from "./components/CardGrid";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LoginButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "1.5vh",
  padding: "6px 12px",
  height: "100%",
  width: '60%',
  maxWidth: "150px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#27AB5F",
  borderColor: "#27AB5F",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#0BD862",
    borderColor: "#27AB5F",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#27AB5F",
    borderColor: "#0BD862",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(39, 171, 95, 0.5)",
  },
});

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          height: "100%",
          background: "#EEEBE0",
        }}
      >
        <AppBar
          position="sticky"
          sx={{ background: "#1F1F1F", boxShadow: "none" }}
        >
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Link to="/" style={{ textDecoration: "none"}}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "white", flexGrow: 1, letterSpacing: "1px" }}
              >
                binarySearchTree
              </Typography>
            </Link>
            <LoginButton variant="contained" disableRipple>Login</LoginButton>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<CardGrid />} />
          <Route path="/topic/:slug" element={<QuestionGrid />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
