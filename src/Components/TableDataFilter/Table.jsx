import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./table.css"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { rows } from '../RowsTable';
import { GoDotFill } from "react-icons/go";
import {RangeStepInput} from 'react-range-step-input';
import { useContext } from 'react';
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

import { ThemeContext } from '../ThemeContect/ThemeContext';


function CustomToolbar({ setFilterButtonEl }) {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton ref={setFilterButtonEl} />
    </GridToolbarContainer>
  );
}



export default function TableData() {
  const { theme } = useContext(ThemeContext);

    const columns = [
        { field: 'ID', headerName: 'ID', width: 50 },
        { field: 'Name', headerName: 'Brand', renderCell: ({ row }) => (
            <div style={{display:"flex"}}>
                <div>
                <img alt="mohamed" src={row.Brand.URLbrand} style={{width: 55, height: 40}} />
                </div>
                <div style={{padding:"4px"}}>
                <h6 style={{fontSize:"11px"}}>{row.Brand.Name}</h6>
                <p style={{fontSize:"11px"}}>{row.Brand.track}</p>
                </div>
            </div>
          ) , width: 170},
        { field: 'Requester', headerName: 'Requester',
        renderCell: ({ row }) => (
            <div style={{display:"flex"}}>
                <div>
                <Avatar alt="mohamed" src={row.Requester.URL} sx={{ bgcolor: 'red',width: 28, height: 28}} />
                </div>
                <div style={{padding:"2px"}}>
                <h6 style={{fontSize:"11px"}}>{row.Requester.firstName} {row.Requester.lastName}</h6>
                <p style={{fontSize:"11px"}}>{row.Requester.track}</p>
                </div>
            </div>
          ),width: 150 },
        { field: 'Assign', headerName: 'Assign',renderCell: ({ row }) => (
            <div style={{display:"flex"}}>
                <div>
                <Avatar alt="mohamed" src={row.Assign.URLCom} sx={{ bgcolor: 'red',width: 28, height: 28}} />
                </div>
                <div style={{padding:"2px"}}>
                <h6 style={{fontSize:"11px"}}>{row.Assign.firstNameCom} {row.Assign.lastNameCom}</h6>
                <p style={{fontSize:"11px"}}>{row.Assign.trackCom}</p>
                </div>
            </div>
          ),width: 190 },
        { field: 'Status', headerName: 'status',renderCell: ({ row }) => (
            <div style={{width:"90%"}}>
                <div style={{  display: "inline-flex",
                    backgroundColor:row.Status === "In Progress" ?
                     "#B0C4DE" : row.Status === "Pending"?"#FFFFE0":row.Status === "Resolved" ? "#00FA9A" :
                     row.Status === "Open" ? "#FFA07A" : null , 
                    borderRadius: "10px",
                    alignItems: "center", // Center items vertically
                    paddingLeft: "2px",
                    paddingRight: "8px",
                    width: "auto",
                    textAlign: "center"}}>
                <div>
              
                <GoDotFill style={{color:row.Status === "In Progress" ?
                     "#00008B" : row.Status === "Pending"?"#999900":row.Status === "Resolved" ? "#006400":
                     row.Status === "Open" ? "#800000" :null
                     ,marginTop:"4px"}} />
                </div>
                <div>
                    <h5 style={{fontSize:"11px",color:row.Status === "In Progress" ?
                     "#00008B" : row.Status === "Pending"?"#999900":row.Status === "Resolved" ? "#006400":
                     row.Status === "Open" ? "#800000" :null}}>{row.Status}</h5>
                </div>
                </div>
            </div>
          ) ,width: 110 },
        { field: 'interactions', headerName: 'Interaction',renderCell: ({ row }) => (
            <AvatarGroup max={3}>
           {row.interactions.avatars.map((image) => {
            return (
                <Avatar style={{width:"30px",height:"30px"}} alt="Cindy Baker" src={image} />
            );
            })}
            </AvatarGroup>
          ),width: 150 },
        { field: 'Responsive', headerName: 'Responsivness',renderCell: ({row}) =>(
            <div style={{display:"flex"}}>
              <RangeStepInput style={{width:"80%"}}  value={row.Responsive}/>
              <p style={{color:"red"}}>{row.Responsive}%</p>
            </div>
        ) ,width: 150 },
        { field: 'Date', headerName: 'Date', width: 120 },
      ];


  const [filterButtonEl, setFilterButtonEl] = React.useState(null);

  return (
    <div style={{padding:"10px"}}>
      <DataGrid
      style={{color:theme === "dark" ? 'white' : 'black'}}
        rows={rows}
        columns={columns}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }} 
          pageSizeOptions={[5,10]}
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={{
          panel: {
            anchorEl: filterButtonEl,
          },
          toolbar: {
            setFilterButtonEl,
          },
        }}
      />
    </div>
  );
}