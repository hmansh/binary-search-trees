import React from "react";
import Card from "@mui/material/Card";
import "../../App.css";

const style = {
  cardContainer: {
    height: "100%",
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
    height: "55%",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  topicTitle: {
    padding: "0.7rem",
    color: "white",
    fontWeight: "600",
    textAlign: "left",
    fontSize: "2.5vh",
  },
  progressContainer: {
    color: "black",
    padding: "0.7rem 0.5rem",
    fontWeight: "500",
    fontSize: "1rem",
    textAlign: "left",
  },
  cardLower: {
    height: '45%',
  }
};

const colorMapper = {
  "basic": "#14746F",
  "ds": "#023E8A",
  "algorithms": "#FF6700",
}

export default function TopicCard({ pos, topic, total, completed, setColor , type}) {

  const perc = Math.floor(100 * (completed / total)) % 101;

  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <div
      style={style.cardContainer}
      onClick={() => changeColor(colorMapper[type])}
    >
      <Card variant="outlined" sx={style.cardComponent}>
        <div
          style={{
            background: colorMapper[type],
            ...style.cardHeader,
          }}
        >
          <div style={style.topicTitle}>{topic}</div>
        </div>
        <div
          style={style.cardLower}
        >
          <div style={style.progressContainer}>
            <div className="progress-number">
              <span className="progress-count">Progress</span>
              <span className="progress-count">{perc}%</span>
            </div>
            <div className="progress-bar">
              <span className="total-progress">
                <span className="progress" style={{ width: `${perc}%` }}></span>
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
