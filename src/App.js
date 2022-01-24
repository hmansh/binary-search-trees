import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import QuestionGrid from "./components/QuestionGrid";
import CardGrid from "./components/CardGrid";

function App() {
  const [title, setTitle] = React.useState("binarySearchTree");
  const [navigateBack, setNavigateBack] = React.useState(false);

  const handleTitleChange = (title) => {
    setTitle(title);
  };

  const handleNavBack = (curr) => {
    setNavigateBack(curr);
  };

  const [color, setColor] = React.useState("#1F1F1F");

  return (
    <div className="App">
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          height: "100%",
          background: "#000000",
          backgroundImage: 'radial-gradient(#323232 1px, transparent 0)',
          backgroundSize: '25px 25px',
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <CardGrid
                setColor={setColor}
                title={title}
                navigateBack={navigateBack}
                handleNavBack={handleNavBack}
                setTitle={handleTitleChange}
              />
            }
          />
          <Route
            path="/topic/:slug"
            element={
              <QuestionGrid
                color={color}
                title={title}
                navigateBack={navigateBack}
                handleNavBack={handleNavBack}
                setTitle={handleTitleChange}
              />
            }
          />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
