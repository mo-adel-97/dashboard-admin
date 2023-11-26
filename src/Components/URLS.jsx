import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { ThemeContext } from './ThemeContect/ThemeContext';
import { useContext } from "react";


export default function LabTabs() {

   const { theme } = useContext(ThemeContext);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={{color:theme === "dark" ? 'white' : 'black'}} label="Overview" value="1" />
            <Tab style={{color:theme === "dark" ? 'white' : 'black'}} label="Development" value="2" />
            <Tab style={{color:theme === "dark" ? 'white' : 'black'}} label="New Feature" value="3" />
            <Tab style={{color:theme === "dark" ? 'white' : 'black'}} label="FQA" value="4" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}