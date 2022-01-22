import React from "react";
import Grid from "@mui/material/Grid";
import QCard from "./QCard/QCard";
import { useParams } from "react-router-dom";
import userStat from "../constant";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function QuestionGrid(props) {
  const { slug } = useParams();

  const { question, topic } = userStat.topics.filter(
    (item) => item.slug === slug
  )[0];

  React.useEffect(() => {
    console.log(question);
  });

  return (
    <div>
      <div
        style={{
          // border: '1px solid red',
          height: "7vh",
          margin: "1vh 0 0 2vh",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <IconButton
            disableRipple
            sx={{ color: "#1f1f1f", fontWeight: "600" }}
          >
            <ArrowBackIcon style={{ fontSize: "2vh" }} />
            <Typography
              variant="h5"
              sx={{
                textAlign: "left",
                padding: "10px",
                // fontWeight: '600'
              }}
            >
              {topic}
            </Typography>
          </IconButton>
        </Link>
      </div>
      <Grid
        container
        columns={{ xs: 1, sm: 4, md: 3, lg: 4 }}
        sx={{ padding: "10px" }}
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
            <QCard pos={index} question={item.questionName} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
