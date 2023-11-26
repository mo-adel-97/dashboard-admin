import React from "react";
import "./CardRating.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
const RatingCard = ()=>{
    return(
        <div className="CardRating">
           <h5 className="paragraph">Overall Rating</h5>
           <div style={{textAlign:"center",paddingTop:"20px"}}>
           <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
                >
                <h5 style={{color:"#308efe"}}>4.8<span style={{color:"yellowgreen",fontSize:"19px"}}>/5</span></h5>
                <Rating name="read-only" value={5} readOnly />
            </Box>
            </div>
            <br />
            <div style={{textAlign:"center"}}>
            <Box sx={{ width: "80%",margin:"auto",textAlign:"center" }}>
                <h5 style={{color:"#308efe"}}>Ration Atio </h5>
         <Slider
            style={{color:"blue",paddingTop:"85px"}}
            disabled={false}
            value={33}
            marks={false}
            max={100}
            min={0}
            size="medium"
            valueLabelDisplay="on"
        />
    </Box>
            </div>
        </div>
    )
}
export default RatingCard;