import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../../App.css";

export default function ContentCard({ pos, topic, total, completed }) {
  const blue = "#14213D";
  const yellow = "#14213D";
  const colors = [
    "#F4A261",
    "#98C1D9",
    "#2A9D8F",
    "#FFBB12",
    "#264653",
    // '#E9C46A',
    // '#14213D',
    "#F94144",
    "#8AC926",
  ];
  const perc = Math.floor(100 * (completed / total)) % 101;

  return (
    <div style={{ height: "90%", minHeight: "16vh" }}>
      <Card
        variant="outlined"
        sx={{
          border: "0.7vh solid white",
          // background: '#CBC7B1',
          // backgroundImage: 'radial-gradient(white 1px, transparent 0)',
          borderRadius: "1vh",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            borderRadius: "0.6vh",
            height: "60%",
            background: colors[pos % colors.length],
            // backgroundImage: 'radial-gradient(white 1px, transparent 0)',
            // backgroundSize: '25px 25px',
          }}
        >
          <Typography
            // variant="h5"
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
            // background: '#CBC7B1',
          }}
        >
          <Typography
            style={{
              color: "black",
              padding: "0.7rem 0.5rem",
              fontWeight: "500",
              fontSize: "1rem",
              textAlign: "left",
            }}
          >
            Progress
            <span className="progress-count">{perc}</span>
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
