// import React from "react";
// import Grid from "@mui/material/Grid";
// import { useParams } from "react-router-dom";
// import userStat from "../../constant";
// import Header from "../Header/Header.js"
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Alert from '@mui/material/Alert';
// import QuestionCard from './../Card/QuestionCard';

// const FilterButton = styled(Button)({
//   boxShadow: "none",
//   textTransform: "none",
//   border: "none",
//   color: "white",
//   height: "2rem",
//   fontWeight: '500',
//   backgroundColor: "#626F8A",
//   borderColor: "#0A0C12",
//   "&:hover": {
//     backgroundColor: "#27304E",
//     border: "none"
//   },
//   "&:active": {
//     backgroundColor: "#27304E",
//     boxShadow: "none",
//     border: "none"
//   },
//   "&:focus": {
//     boxShadow: "0 0 0 0.1rem rgba(107, 147, 242,.5)",
//     border: "none"
//   }
// });

// const SaveButton = styled(Button)({
//   boxShadow: "none",
//   textTransform: "none",
//   border: "none",
//   color: "white",
//   height: "2rem",
//   fontWeight: '500',
//   backgroundColor: "#626F8A",
//   borderColor: "#0A0C12",
//   "&:hover": {
//     backgroundColor: "#27304E",
//     border: "none"
//   },
//   "&:active": {
//     backgroundColor: "#27304E",
//     boxShadow: "none",
//     border: "none"
//   },
//   "&:focus": {
//     boxShadow: "0 0 0 0.1rem rgba(107, 147, 242,.5)",
//     border: "none"
//   },
//   "&:disabled" : {
//     backgroundColor: 'grey',
//   }
// });

// export default function QuestionGrid(props) {
//   const { slug } = useParams();
//   const { setTitle, handleNavBack, navigateBack, title, color, user, setUser, signedIn, setSignedIn } = props;
//   const { question, topic } = userStat.topics.filter(
//     (item) => item.slug === slug
//   )[0];

//   React.useEffect(() => {
//     setTitle(topic);
//     handleNavBack(true);
//   });

//   return (
//     <>
//       <Header title={title} navigateBack={navigateBack} 
//         user={user}
//         setUser={setUser}
//         signedIn={signedIn}
//         setSignedIn={setSignedIn}
//       />
//       {/* <Alert sx={{
//         background: "#32CD30", width: '100%',
//         maxWidth: '400px', margin: '10px',
//         position: 'fixed', bottom: '10px'
//       }} severity="success" variant="filled" color="success">
//         This is a success alert — check it out!
//       </Alert> */}
//       <div className="filter-tab">
//         <SaveButton disableElevation disableRipple disabled={false}>Save Progress</SaveButton>
//         <ButtonGroup disableRipple disableElevation>
//           <FilterButton value={4}>Hide Completed</FilterButton>
//         </ButtonGroup>
//       </div>
//       <Grid
//         container
//         columns={{ xs: 1, sm: 4, md: 3, lg: 4 }}
//         sx={{ padding: "5px" }}
//       >
//         {question.map((item, index) => (
//           <Grid
//             item
//             xs={1}
//             sm={2}
//             md={1}
//             lg={1}
//             key={index}
//             sx={{ height: "20vh", padding: "10px" }}
//           >
//             <QuestionCard pos={index} question={item.questionName} color={color} />
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// }
