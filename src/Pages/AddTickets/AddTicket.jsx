import React from "react";
import Header from "../../Components/Header/Header";
import "./AddTicket.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import MyForm from "../../Components/FormTicket/Form";
import { ThemeContext } from "../../Components/ThemeContect/ThemeContext";
import { useContext } from "react";
const AddTicket = () =>{

    const { theme } = useContext(ThemeContext);

    return(
        <div className="AddTicket" style={{color : theme === "light" ? "black" :"white",
        backgroundColor: theme === "light" ? "#f0f0f0" :"#2f2f2f"}}>
            <Header />
            <div style={{display:"flex"}}>
                <HomeOutlinedIcon width="15px" height="15px"/>
                <KeyboardArrowRightOutlinedIcon width="20px" height="20px" style={{color:"gray"}}/>
                <p style={{fontSize:"14px,",paddingTop:"3px"}}>tickets</p>
                <KeyboardArrowRightOutlinedIcon width="20px" height="20px" style={{color:"gray"}}/>
                <p style={{fontSize:"14px,",paddingTop:"3px"}}>Add tickets</p>
            </div>
            <h3 style={{paddingTop:"15px",fontFamily:"cursive"}}>Add Ticket</h3>
            <br/>
            <MyForm/>
        </div>
    )
}

export default AddTicket