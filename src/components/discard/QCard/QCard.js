// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import "../../App.css";
// import { styled } from '@mui/material/styles';
// import Checkbox from "@mui/material/Checkbox";
// import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
// import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
// import Button from '@mui/material/Button';

// const BootstrapButton = styled(Button)({
//     boxShadow: 'none',
//     textTransform: 'none',
//     padding: '5px',
//     height: '89%',
//     width: '60%',
//     border: 'none',
//     lineHeight: 1,
//     backgroundColor: '#0A0C12',
//     borderColor: '#0A0C12',
//     fontWeight: 600,
//     '&:hover': {
//         backgroundColor: '#353535',
//         borderColor: '#0A0C12',
//         boxShadow: 'none',
//     },
//     '&:active': {
//         boxShadow: 'none',
//         backgroundColor: '#0A0C12',
//     },
//     '&:focus': {
//         boxShadow: '0 0 0 0.2rem rgba(0,0,0,.5)',
//     },
// });

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// export default function QCard({ pos = 1, ...props }) {
//     const { color } = props;
//     return (
//         <div style={{ height: '90%', minHeight: '16vh' }}>
//             <Card
//                 variant="outlined"
//                 sx={{
//                     border: '0.7vh solid white',
//                     borderRadius: '1vh',
//                     cursor: 'pointer',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     height: '100%',
//                 }}
//             >
//                 <div
//                     style={{
//                         borderRadius: '0.6vh',
//                         height: '60%',
//                         background: color,
//                     }}
//                 >
//                     <div
//                         style={{
//                             padding: '1rem',
//                             color: 'white',
//                             textAlign: 'left',
//                             fontSize: '1.1rem',
//                             boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
//                         }}
//                     >
//                         {"Reverse Linked List using Iterative Method"}
//                     </div>
//                 </div>
//                 <div
//                     style={{
//                         height: '41%',
//                     }}
//                 >
//                     <Typography
//                         style={{
//                             color: 'black',
//                             padding: '0.7rem 0.5rem',
//                             fontWeight: '500',
//                             fontSize: '1rem',
//                             textAlign: 'left',
//                         }}
//                     >
//                         <div className="q-item">
//                             <div className="completed">
//                                 <Checkbox
//                                     {...label}
//                                     icon={<RadioButtonUncheckedOutlinedIcon />}
//                                     checkedIcon={<CheckCircleOutlineOutlinedIcon />}
//                                 />
//                             </div>
//                             <div className="link">
//                                 <BootstrapButton variant="contained" disableRipple>
//                                     <div>Leetcode</div>
//                                 </BootstrapButton>
//                             </div>
//                         </div>
//                     </Typography>
//                 </div>
//             </Card>
//         </div>
//     );
// }