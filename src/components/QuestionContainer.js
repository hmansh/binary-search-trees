import React from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import userStat from "../constant";
import Header from "./Header/Header.js"
import ButtonGroup from "@mui/material/ButtonGroup";
import { FilterButton, SaveButton } from "./CustomerComponents";
import QuestionCard from './Card/QuestionCard';

export default function QuestionContainer(props) {
  const { slug } = useParams();
  const { setTitle, handleNavBack, navigateBack, title, color, user, setUser, signedIn, setSignedIn, questions, setQuestions } = props;
  const { question, topic } = userStat.topics.filter(
    (item) => item.slug === slug
  )[0];

  React.useEffect(() => {
    setTitle(topic);
    handleNavBack(true);
  });

  return (
    <>
      <Header title={title} navigateBack={navigateBack} 
        user={user}
        setUser={setUser}
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        questions={questions}
        setQuestions={setQuestions}
      />
      <div className="filter-tab">
        <SaveButton disableElevation disableRipple disabled={false}>Save Progress</SaveButton>
        <ButtonGroup disableRipple disableElevation>
          <FilterButton value={4}>Hide Completed</FilterButton>
        </ButtonGroup>
      </div>
      <Grid
        container
        columns={{ xs: 1, sm: 4, md: 3, lg: 4 }}
        sx={{ padding: "5px" }}
      >
        {question.map((item, index) => (
          <Grid
            item
            xs={1}
            sm={2}
            md={1}
            lg={1}
            key={index}
            sx={{ height: "20vh", padding: "10px" }}
          >
            <QuestionCard pos={index} question={item.questionName} color={color} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
