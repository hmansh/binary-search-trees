import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../../App.css";

export default function ContentCard({ pos, topic, total, completed, setColor }) {

  const colors = [
    "#0A84FF",
    "#64D2FF",
    '#5E5CE6',
    "#FFBB12",
    "#32D74B",
    '#FF2D55'
  ];
  const perc = Math.floor(100 * (completed / total)) % 101;

  const changeColor = (color) => {
      setColor(color);
  }

  return (
    <div style={{ height: "90%", minHeight: "16vh" }} onClick={() => changeColor(colors[pos % colors.length])}>
      <Card
        variant="outlined"
        sx={{
          border: '0.7vh solid #161616',
          borderRadius: "1vh",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          background: '#161616',
        }}
      >
        <div
          style={{
            borderRadius: "0.6vh",
            height: "60%",
            background: colors[pos % colors.length],
          }}
        >
          <Typography
            style={{
              padding: "1rem",
              color: "white",
              fontWeight: "600",
              textAlign: "left",
              fontSize: "3vh",
            }}
          >
            {topic}
          </Typography>
        </div>
        <div
          style={{
            height: "41%",
            background: '#161616'
          }}
        >
          <Typography
            style={{
              color: "white",
              padding: "0.7rem 0.5rem",
              fontWeight: "500",
              fontSize: "1rem",
              textAlign: "left",
            }}
          >
            Progress
            <span className="progress-count">{perc}%</span>
            <div className="progress-bar">
              <span className="total-progress">
                <span className="progress" style={{ width: `${perc}%` }}></span>
              </span>
            </div>
          </Typography>
        </div>
      </Card>
    </div>
  );
}
