import React from "react";
import "./StatusTickets.css"
import { BsSoundwave } from "react-icons/bs";
import { ThemeContext } from "../../Components/ThemeContect/ThemeContext";
import { useContext } from "react";

const StatusTickets = ()=>{

    const { theme } = useContext(ThemeContext);


    return(
        <div className="statusParent">
           <div className="status status1" style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'}}>
            <div style={{display:'block',textAlign:"center",color:'#CD5C5C'}}>
            <h2>OPEN</h2>
            <h2 style={{paddingTop:"5px"}}>7</h2>
            </div>
            <BsSoundwave size='120px' style={{color:'#CD5C5C'}}/>
           </div>
           <div className="status status2" style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'}}>
           <div style={{display:'block',textAlign:"center",color:'blue'}}>
            <h2>In Progress</h2>
            <h2 style={{paddingTop:"5px"}}>44</h2>
            </div>
            <BsSoundwave size='120px' style={{color:'blue'}}/>
           </div>
           <div className="status status3" style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'}}>
           <div style={{display:'block',textAlign:"center",color:'rgb(250, 208, 44)'}}>
            <h2>Pending</h2>
            <h2 style={{paddingTop:"5px"}}>5</h2>
            </div>
            <BsSoundwave size='120px' style={{color:'rgb(250, 208, 44)'}}/>
           </div>
           <div className="status status4" style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'}}>
           <div style={{display:'block',textAlign:"center",color:'green'}}>
            <h2>Resolved</h2>
            <h2 style={{paddingTop:"5px"}}>4205</h2>
            </div>
            <BsSoundwave size='120px' style={{color:'green'}}/>
           </div>
        </div>
    )
}
export default StatusTickets