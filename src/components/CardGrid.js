import React from "react";
import Grid from "@mui/material/Grid";
import ContentCard from "./Card/Card";
import userStat from "../constant";
import { Link } from "react-router-dom";

export default function CardGrid() {
  return (
    <Grid
      container
      columns={{ xs: 1, sm: 4, md: 3, lg: 4 }}
      sx={{ padding: "10px" }}
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
            <ContentCard
              pos={index}
              topic={item.topic}
              total={item.totalQuestion}
              completed={item.completed}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
