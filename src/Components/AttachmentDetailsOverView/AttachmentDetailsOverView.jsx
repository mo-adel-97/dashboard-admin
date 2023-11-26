import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import "./AttachmentDetailsOverView.css"
import ArticleIcon from '@mui/icons-material/Article';
import ImageIcon from '@mui/icons-material/Image';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
const data = [
  {  value: 20,color:"	#48D1CC" },
  {  value: 12,color:"#FAD02C" },
  {  value: 8 ,color:"red"},
  {  value: 15,color:"blue" },
];

const ArrayFiles = [
    {  title:"Document Files",icon:"docs",num:"1.225",size:"1.3GB" },
    {  title:"Image Files",icon:"image",num:"1.849",size:"7.3GB" },
    {  title:"Voice Files",icon:"voice",num:"1.005",size:"4.1GB" },
    {  title:"Videos Files",icon:"video",num:"723",size:"1.3GB" },
  ];

export default function PieChartWithPaddingAngle() {
  return (
    <div style={{padding:"10px"}}>
        <h6 style={{fontSize:"14px"}}>Attachment Overview</h6>
    <Stack direction="row">
      <PieChart
     series={[
          {
            innerRadius: 40,
            outerRadius: 60,
            data,
          },
        ]}
        margin={{ right: 5 }}
        height={130}
        legend={{ hidden: true }}
      />
    </Stack>
    <div className='Files'>
    {ArrayFiles.map((fruit, index) => (
        <div className='FilesChild'>
        <div className='FilesChild1'>
            {fruit.icon === "docs" ? <ArticleIcon style={{ color: "blue", width: "30px", height: "30px" }} /> 
            : fruit.icon === "image" ? <ImageIcon style={{ color: "blue", width: "30px", height: "30px" }} /> :
            fruit.icon === "voice"? <RecordVoiceOverIcon style={{ color: "blue", width: "30px", height: "30px" }} /> :
            fruit.icon === "video" ? <VideoLibraryIcon style={{ color: "blue", width: "30px", height: "30px" }} /> :
            null }
        </div>
        <div className='FilesChild2'>
            <h6 style={{fontSize:"13px"}}>{fruit.title}</h6>
            <p style={{fontSize:"15px"}}>{fruit.num}</p>
        </div>
        <div className='FilesChild3'>
            <p style={{fontSize:"13px"}}>{fruit.size}</p>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}