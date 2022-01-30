import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../../App.css";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { QuestionLinkButton } from "../CustomerComponents";

const style = {
  cardContainer: {
    height: "90%",
    minHeight: "16vh",
  },
  cardComponent: {
    border: "0.7vh solid white",
    borderRadius: "1vh",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  cardHeader: {
    borderRadius: "0.6vh",
    height: "60%",
  },
  topicTitle: {
    padding: "0.6rem",
    color: "white",
    textAlign: "left",
    fontSize: "1rem",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  statusContainer: {
    color: "black",
    padding: "0.5rem",
    fontWeight: "500",
    fontSize: "1rem",
    textAlign: "left",
  },
  cardLower: {
    height: "41%",
  },
};

export default function QuestionCard({ pos = 1, ...props }) {
  const { color } = props;
  return (
    <div style={style.cardContainer}>
      <Card variant="outlined" sx={style.cardComponent}>
        <div
          style={{
            ...style.cardHeader,
            background: color,
          }}
        >
          <div style={style.topicTitle}>
            {"Reverse Linked List using Iterative Method"}
          </div>
        </div>
        <div style={style.cardLower}>
          <Typography style={style.statusContainer}>
            <div className="q-item">
              <div className="completed">
                <Checkbox
                  icon={<RadioButtonUncheckedOutlinedIcon />}
                  checkedIcon={<CheckCircleOutlineOutlinedIcon />}
                />
              </div>
              <div className="link">
                <QuestionLinkButton variant="contained" disableRipple>
                  <div>Leetcode</div>
                </QuestionLinkButton>
              </div>
            </div>
          </Typography>
        </div>
      </Card>
    </div>
  );
}
