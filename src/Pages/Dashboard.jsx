import Header from "../Components/Header/Header";
import "./Dashboard.css"
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ApexChart from "../Components/Chart";
import RatingCard from "../Components/CardRating/CardRating";
import PieChartWithPaddingAngle from "../Components/AttachmentDetailsOverView/AttachmentDetailsOverView";
import ApexChartOverview from "../Components/ApexChart/ApexChart";
import Loading from "./LoadingPage/Loading";
import { useEffect, useState } from "react";
import { ThemeContext } from "../Components/ThemeContect/ThemeContext";
import { useContext } from "react";
import { Zoom } from "react-reveal";
const Blank = () => {
  const [loading, setLoading] = useState(true)

  const { theme } = useContext(ThemeContext);


  useEffect(() => {
      setTimeout(() => setLoading(false), 2500)
  }, [])
  if (loading) {
      return <Loading/>
  }
        const dataArray = [
            { id: 1, title:'Total Tickets', num: 17.825,para:"7.2%",icon:"ticket"},
            { id: 2, title:'Total Interactions',num:785.021,para:"12.2%",icon:"interaction" },
            { id: 3, title:'Total Users',num:8.482,para:"10.2%",icon:"user" },
            { id: 3, title:'Total Groups',num:1.420,para:"3.2%",icon:"group" },
            // ...more data
        ]
    return (
        <div style={{backgroundColor:theme === "dark" ? 'black' : '#f0f0f0',height:"100vh" }}>
            <Header />
            <Zoom duration={1500} delay={100}>
            <div className="grid-container">
            {dataArray.map((item) => (
                        <div class="grid-item item1">
                        <Card style={{height:"100px",border:"none",
                        paddingTop:"5px",backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'}} >
            <Typography level="body-md" style={{color:theme === "dark" ? 'white' : 'black'}} >{item.title}</Typography>
              <CardContent orientation="horizontal">
                  <div  style={{width:"50px",
                  borderRadius:"5px"
                  ,height:"40px", display:"flex",
                  justifyContent: "center",
                  placeItems:"center",
                  alignItems: "center",
                  backgroundColor:"#B9D9EB"}}>
                    {item.icon === "ticket" ? <CheckBoxIcon style={{color:"#308efe",width:"23px",height:"23px"}}
                  /> : item.icon==="interaction" ? <LayersIcon style={{color:"#308efe",width:"23px",height:"23px"}}
                  /> : item.icon==="user" ?<PersonIcon style={{color:"#308efe",width:"23px",height:"23px"}}/> : 
                   item.icon === "group" ? <GroupIcon style={{color:"#308efe",width:"23px",height:"23px"}}/>
                   : null
                  }
                  </div>
                <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                    <div>
                <CardContent style={{paddingBottom:"5px"}}>
                 <h5 style={{color:"#308efe",fontSize:"15px"}}>{item.num}</h5>
                 <p style={{color:theme === "dark" ? 'white' : 'black',paddingBottom:"4px",fontSize:"13px"}}>
                    <span>
                      {item.para === "10.2%" ? <ArrowDownwardIcon  style={{color:"red",width:"14px",height:"14px"}}/>:
                       <ArrowUpwardIcon style={{color:"#308efe",width:"14px",height:"14px"}}/>
                      }
                    </span>
                    <span style={{color:item.para === "10.2%" ? 'red' : '#308efe' }}>{item.para}</span> than last day</p>
                </CardContent>
                </div>
                <div>
                  <ArrowForwardOutlinedIcon style={{color:"#308efe",cursor:"pointer"}}/>
                </div>
                </div>
              </CardContent>
            </Card>
            </div>
        ))}
                <div class="grid-item item5" 
                style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'
                  ,color:theme === "dark" ? 'white' : 'black' }}>
                    <ApexChart style={{fontColor:"red"}}/>
                </div>
                <div class="grid-item item6" style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'
                  ,color:theme === "dark" ? 'white' : 'black' }}>
                    <RatingCard />
                </div>
                <div class="grid-item item7" style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'
                  ,color:theme === "dark" ? 'white' : 'black' }}>
                   <PieChartWithPaddingAngle/>
                </div>
                <div class="grid-item item8" style={{backgroundColor:theme === "dark" ? '#2f2f2f' : 'white'
                  ,color:theme === "dark" ? 'white' : 'black' }}>
                  <ApexChartOverview />
                </div>
            </div>
            </Zoom>
        </div>
    )
};

export default Blank;