import React from "react";
import Grid from "@mui/material/Grid";
import ContentCard from "./Card/Card";
import userStat from "../constant";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const FilterButton = styled(Button)({
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


export default function CardGrid(props) {

  const { setTitle, handleNavBack, navigateBack, title, setColor } = props;
  React.useEffect(() => {
    setTitle('binarySearchTrees');
    handleNavBack(false);
  }, []);

  return (
    <>
      <Header title={title} navigateBack={navigateBack} />
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
              <ContentCard
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
