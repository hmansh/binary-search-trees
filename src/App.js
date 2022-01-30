import "./App.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import TopicContainer from "./components/TopicContainer";
import QuestionContainer from "./components/QuestionContainer";

function App() {

  const [title, setTitle] = React.useState("dsalgo!");
  const [navigateBack, setNavigateBack] = React.useState(false);
  const [user, setUser] = useState({});
  const [signedIn, setSignedIn] = useState(false);
  const [questions, setQuestions] = useState([Array.from(Array(1000).keys()).map((_) => false)]);
  const [color, setColor] = React.useState("#1F1F1F");

  const handleTitleChange = (title) => {
    setTitle(title);
  };

  const handleNavBack = (curr) => {
    setNavigateBack(curr);
  };


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
              <TopicContainer
                setColor={setColor}
                title={title}
                navigateBack={navigateBack}
                handleNavBack={handleNavBack}
                setTitle={handleTitleChange}
                user={user}
                setUser={setUser}
                signedIn={signedIn}
                setSignedIn={setSignedIn}
                questions={questions}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/topic/:slug"
            element={
              <QuestionContainer
                color={color}
                title={title}
                navigateBack={navigateBack}
                handleNavBack={handleNavBack}
                setTitle={handleTitleChange}
                user={user}
                setUser={setUser}
                signedIn={signedIn}
                setSignedIn={setSignedIn}
                questions={questions}
                setQuestions={setQuestions}
              />
            }
          />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
