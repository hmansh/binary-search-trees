// import React from "react";
// import Card from "@mui/material/Card";
// import "../../App.css";

// export default function ContentCard({ pos, topic, total, completed, setColor }) {

//   const colors = [
//     // '#000066',
//     // '#031470',
//     '#071597',
//     '#043DF2',
//   ];

//   const perc = Math.floor(100 * (completed / total)) % 101;

//   const changeColor = (color) => {
//     setColor(color);
//   }

//   return (
//     <div style={{ height: "90%", minHeight: "16vh" }} onClick={() => changeColor(colors[pos % colors.length])}>
//       <Card
//         variant="outlined"
//         sx={{
//           border: "0.7vh solid white",
//           borderRadius: "1vh",
//           cursor: "pointer",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           height: "100%",
//         }}
//       >
//         <div
//           style={{
//             borderRadius: "0.6vh",
//             height: "60%",
//             background: colors[Math.floor(Math.random() * 10) % (colors.length)],
//             boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
//           }}
//         >
//           <div
//             style={{
//               padding: "1rem",
//               color: "white",
//               fontWeight: "600",
//               textAlign: "left",
//               fontSize: "2.5vh",
//             }}
//           >
//             {topic}
//           </div>
//         </div>
//         <div
//           style={{
//             height: "41%",
//           }}
//         >
//           <div
//             style={{
//               color: "black",
//               padding: "0.7rem 0.5rem",
//               fontWeight: "500",
//               fontSize: "1rem",
//               textAlign: "left",
//             }}
//           >
//             <div className="progress-number">
//               <span className="progress-count">Progress</span>
//               <span className="progress-count">{perc}%</span>
//             </div>
//             <div className="progress-bar">
//               <span className="total-progress">
//                 <span className="progress" style={{ width: `${perc}%` }}></span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }
