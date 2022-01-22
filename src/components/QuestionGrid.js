import React from "react";
import Grid from "@mui/material/Grid";
import QCard from "./QCard/QCard";
import { useParams } from "react-router-dom";
import userStat from "../constant";
import Header from "./Header/Header.js"

export default function QuestionGrid(props) {
  const { slug } = useParams();
  const { setTitle, handleNavBack, navigateBack, title, color } = props;
  const { question, topic } = userStat.topics.filter(
    (item) => item.slug === slug
  )[0];

  React.useEffect(() => {
    setTitle(topic);
    handleNavBack(true);
  });

  return (
    <>
      <Header title={title} navigateBack={navigateBack}/>
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
            <QCard pos={index} question={item.questionName} color={color}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
