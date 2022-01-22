import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import "../../App.css";
import { styled } from '@mui/material/styles';
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    padding: '5px',
    height: '90%',
    width:'60%',
    border: '1px solid',
    lineHeight: 1,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function QCard({ pos = 1, ...props}) {
    const { color } = props;
    return (
        <div style={{ height: '90%', minHeight: '16vh'}}>
            <Card
                variant="outlined"
                sx={{
                    border:'0.7vh solid #161616',
                    borderRadius:'1vh',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    background: '#161616'
                }}
            >
                <div
                    style={{
                        borderRadius: '0.6vh',
                        height: '60%',
                        background: color,
                    }}
                >
                    <Typography
                        style={{
                            padding: '1rem',
                            color: 'white',
                            textAlign: 'left',
                            fontSize:'2vh'
                        }}
                    >
                        {"Reverse Linked List using Iterative Method"}
                    </Typography>
                </div>
                <div
                    style={{
                        height: '41%',
                        background: '#161616'
                    }}
                >
                    <Typography
                        style={{
                            color: 'black',
                            padding: '0.7rem 0.5rem',
                            fontWeight: '500',
                            fontSize: '1rem',
                            textAlign: 'left',
                        }}
                    >
                        <div className="q-item">
                            <div className="completed" >
                                <Checkbox
                                {...label}
                                icon={<RadioButtonUncheckedOutlinedIcon sx={{color: 'white'}}/>}
                                checkedIcon={<CheckCircleOutlineOutlinedIcon sx={{color: 'white'}}/>}
                                />
                            </div>
                            <div className="link">
                                <BootstrapButton variant="contained" disableRipple>
                                    Leetcode
                                </BootstrapButton>
                            </div>
                        </div>
                    </Typography>
                </div>
            </Card>
        </div>
    );
}