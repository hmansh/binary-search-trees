import React from "react";
import Grid from "@mui/material/Grid";
import userStat from "../constant";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import ButtonGroup from "@mui/material/ButtonGroup";
import TopicCard from './Card/TopicCard';
import { FilterButton } from "./CustomerComponents";

export default function TopicContainer(props) {

  const { setTitle, handleNavBack, navigateBack, title, setColor, user, setUser, signedIn, setSignedIn, questions, setQuestions } = props;
  React.useEffect(() => {
    setTitle('dsalgo!');
    handleNavBack(false);
  }, []);

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
        <ButtonGroup disableRipple disableElevation>
          {/* <FilterButton value={4}>Hide Completed</FilterButton> */}
          <FilterButton>Data Structures</FilterButton>
          <FilterButton>Algorithms</FilterButton>
        </ButtonGroup>
      </div>
      <Grid
        container
        columns={{ xs: 1, sm: 4, md: 3, lg: 4 }}
        sx={{ padding: "5px" }}
      >
        {userStat.topics.map((item, index) => (
          <Grid
            item
            xs={1}
            sm={2}
            md={1}
            lg={1}
            key={index}
            sx={{ height: "20vh", padding: "10px" }}
          >
            <Link to={`topic/${item.slug}`} style={{ textDecoration: "none" }}>
              <TopicCard
                setColor={setColor}
                pos={index}
                topic={item.topic}
                total={item.totalQuestion}
                completed={item.completed}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
