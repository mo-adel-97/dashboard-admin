import React from "react";
import "./Ticket.css"
import Header from "../../Components/Header/Header";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button } from "@mui/material";
import StatusTickets from "../../Components/StatusTikets/StatusTickets";
import LabTabs from "../../Components/URLS";
import CustomFilterPanelPosition from "../../Components/TableDataFilter/Table";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Components/ThemeContect/ThemeContext";
import { useContext } from "react";
const Ticket = ()=>{

    const { theme } = useContext(ThemeContext);

const navigate = useNavigate();

    return(
        <>
        <Header/>
        <div className="Ticket" style={{backgroundColor:theme === "dark" ? 'black' : '#f0f0f0',
color:theme === "dark" ? 'white' : 'black'}}>
            <div style={{display:"flex",padding:"10px"}}>
                <HomeOutlinedIcon width="15px" height="15px"/>
                <KeyboardArrowRightOutlinedIcon width="20px" height="20px" style={{color:"gray"}}/>
                <p style={{fontSize:"14px,",paddingTop:"3px"}}>tickets</p>
            </div>
            <div className="Action">
               <div>
                <h3>Tickets</h3>
               </div>
               <div style={{display:"flex"}}>
               <Button style={{margin:"3px"}} variant="outlined">Outlined</Button>
               <Button onClick={()=>{
                navigate("/started/addticket")
               }} style={{margin:"3px"}} variant="contained">Add Ticket</Button>
               </div>
            </div>
            <LabTabs/>
            <StatusTickets/>
            <CustomFilterPanelPosition />
        </div>
        </>
    )
}

export default Ticket